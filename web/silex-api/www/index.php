<?php

include __DIR__ . '/../vendor/autoload.php';

use Silex\Application;
use Symfony\Component\HttpFoundation\JsonResponse;
use Silex\Provider\DoctrineServiceProvider;

$app           = new Application();
$app['config'] = array(
    "month"      => date("n"),
    "lang"       => 2,
    "seasons"    => array("best" => "1", "fair" => "2", "poor" => "3"),
    "categories" => array("vegetables" => "1", "fruits" => "2")
);

$app->register(
    new DoctrineServiceProvider(), array(
        'db.options' => array(
            'driver'   => 'pdo_mysql',
            'host'     => 'localhost',
            'dbname'   => 'tutti',
            'user'     => 'username',
            'password' => 'password',
            'charset'  => 'utf8',
        ),
    )
);

$app->get('/seasons', function () use ($app) {
        $sql = "
          select
            p.CodProducto,
            p.CodCategoria,
            l.TraduccionLiteral as Literal,
            f.FlickSizeSquare75 as Foto
          from
            Productos as p
              inner join Temporadas as t on
                p.CodProducto = t.CodProducto
              inner join Literales as l on
                p.CodTraduccion = l.CodTraduccion
              inner join Fotos as f on
                p.CodFoto = f.CodFoto
          where
            l.IdiomaLiteral = :LANG and
            t.CodMes = :MONTH
          ";

        return $app->json(
            $app['db']->fetchAll(
                $sql, array(
                    'LANG'  => $app['config']['lang'],
                    'MONTH' => $app['config']['month']
                )
            )
        );
    }
);

$app->get('/getSeason/{season}', function ($season) use ($app) {
        $sql = "
          SELECT
            p.CodProducto as idProduct,
            p.CodCategoria as idCategory,
            l.TraduccionLiteral as nameProduct,
            f.FlickSizeSqueare150 as SmallPhoto,
            f.FlickSizeLong500 as BigPhoto
          FROM
            Productos as p
              inner join Temporadas as t on
                p.CodProducto = t.CodProducto
              inner join Literales as l on
                p.CodTraduccion = l.CodTraduccion
              inner join Fotos as f on
                p.CodFoto = f.CodFoto

          WHERE
            t.CodRecogida = :SEASON and
            l.IdiomaLiteral = :LANG and
            t.CodMes = :MONTH
          ";

        return $app->json(
            $app['db']->fetchAll(
                $sql, array(
                    'LANG'   => $app['config']['lang'],
                    'SEASON' => $app['config']['seasons'][$season],
                    'MONTH'  => $app['config']['month']
                )
            )
        );
    }
);

$app->error(function(\Exception $e, $code) {
        return new JsonResponse(array("error" => array("text" => $e->getMessage())));
    });

$app->run();