<?php

setlocale(LC_ALL, 'en_EN');

require 'Slim/Slim.php';

$app = new Slim();

//Seasons
$app->get('/seasons', 'getSeasons');
$app->get('/seasons/:season', 'getSeason');
$app->get('/months/:idProduct/', 'getMonthsAndSeasons');
$app->run();

//Get all seasons
function getSeasons() {

    $config = config();

    /*  idProduct
        idCategory (vegetable or fruit)
        nameProduct (spanish)
        SmallPhoto (150 px)
        BigPhoto (500 px)
    */
    $sql = "select p.CodProducto, p.CodCategoria,
            (select l.TraduccionLiteral from Literales as l where l.IdiomaLiteral = $config[lang] and p.CodTraduccion = l.CodTraduccion) as Literal,
            (select f.FlickSizeSquare75 from Fotos as f where p.CodFoto = f.CodFoto) as Foto
            from Productos as p inner join Temporadas as t on p.CodProducto = t.CodProducto
            where t.CodMes = $config[month]
            group by p.CodProducto";

    try {
        //connect, query, fetch and JSON encode
        $db = getConnection();
        $stmt = $db->query($sql);
        $products = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($products);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}

//Get season
function getSeason($season) {

    $config = config();

    //filter season
    $this_season = $config["seasons"][$season];

    /*  idProduct
        idCategory (vegetable or fruit)
        nameProduct (spanish)
        SmallPhoto (150 px)
        BigPhoto (500 px)
    */
	$sql = "SELECT  p.CodProducto as idProduct, 
                    p.CodCategoria as idCategory,
                    (SELECT l.TraduccionLiteral FROM Literales as l 
                    WHERE l.IdiomaLiteral = $config[lang] and p.CodTraduccion = l.CodTraduccion) as nameProduct,
                    (SELECT f.FlickSizeSqueare150 FROM Fotos as f WHERE p.CodFoto = f.CodFoto) as SmallPhoto,
                    (SELECT f.FlickSizeLong500 FROM Fotos as f WHERE p.CodFoto = f.CodFoto) as BigPhoto
            FROM Productos as p 
                inner join Temporadas as t 
                on p.CodProducto = t.CodProducto
            WHERE t.CodRecogida = $this_season 
                    and t.CodMes = $config[month]
            GROUP BY p.CodProducto";

	try {
        //connect, query, fetch and JSON encode
		$db = getConnection();
		$stmt = $db->query($sql);
		$products = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo json_encode($products);
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
}

function getMonthsAndSeasons($idProduct) {

    $sql = "SELECT CodMes, CodRecogida
            FROM temporadas
            WHERE CodProducto = $idProduct";

    try {
        //connect, query, fetch and JSON encode
        $db = getConnection();
        $stmt = $db->query($sql);
        $products = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($products);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }                
}

//DB connection
function getConnection() {
	$dbhost="127.0.0.1";
	$dbuser="root";
	$dbpass="";
	$dbname="tutti";
	$dbh = new PDO("mysql:host=$dbhost; dbname=$dbname; charset=utf8", $dbuser, $dbpass);
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $dbh;
    //sudo /etc/init.d/mysql restart
}

//Global configuration
function config() {

    //this month in number format
    $month = date("n");

    //lang: spanish
    $lang = 2;

    //seasons
    $seasons = array("best" => "1", "fair" => "2", "poor" => "3");

    //categories
    $categories = array("vegetables" => "1", "fruits" => "2");

    //config
    $config = array("month" => $month, "lang" => $lang, "seasons" => $seasons, "categories" => $categories);

    //return
    return $config;
}

?>

