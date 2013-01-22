package com.garciaechegaray.tuttifrescuni;

// ## How to use an existing database with an Android application ##
// http://stackoverflow.com/questions/9109438/how-to-use-an-existing-database-with-an-android-application/9109728#9109728

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import android.content.Context;
import android.database.Cursor;
import android.database.SQLException;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;
import android.widget.CursorAdapter;
import android.widget.SimpleCursorAdapter;

public class DataBaseHelper extends SQLiteOpenHelper {

    // Tag just for the LogCat window
    // destination path (location) of our database on device
    private static String TAG = "DataBaseHelper";
    private static String DB_PATH = "";
    private static String DB_NAME = "fruteria";// Database name
    private SQLiteDatabase mDataBase;
    private final Context mContext;

    public DataBaseHelper(Context context) {
        //public SQLiteOpenHelper (Context context, String name, SQLiteDatabase.CursorFactory factory, int version)
        super(context, DB_NAME, null, 2);
        DB_PATH = "/data/data/" + context.getPackageName() + "/databases/";
        this.mContext = context;
    }

    public void createDataBase() throws IOException {
        // If database not exists copy it from the assets

        boolean mDataBaseExist = checkDataBase();
        if (!mDataBaseExist) {
            this.getReadableDatabase();
            this.close();
            try {
                // Copy the database from assests
                copyDataBase();
                Log.e(TAG, "createDatabase database created");
            } catch (IOException mIOException) {
                throw new Error("ErrorCopyingDataBase");
            }
        }
    }

    // Check that the database exists here: /data/data/your package/databases/Da
    // Name
    private boolean checkDataBase() {
        File dbFile = new File(DB_PATH + DB_NAME);
        // Log.v("dbFile", dbFile + "   "+ dbFile.exists());
        return dbFile.exists();
    }

    // Copy the database from assets
    private void copyDataBase() throws IOException {
        InputStream mInput = mContext.getAssets().open(DB_NAME);
        String outFileName = DB_PATH + DB_NAME;
        OutputStream mOutput = new FileOutputStream(outFileName);
        byte[] mBuffer = new byte[1024];
        int mLength;
        while ((mLength = mInput.read(mBuffer)) > 0) {
            mOutput.write(mBuffer, 0, mLength);
        }
        mOutput.flush();
        mOutput.close();
        mInput.close();
    }

    // Open the database, so we can query it
    public boolean openDataBase() throws SQLException {
        String mPath = DB_PATH + DB_NAME;
        // Log.v("mPath", mPath);
        mDataBase = SQLiteDatabase.openDatabase(mPath, null,
                SQLiteDatabase.CREATE_IF_NECESSARY);
        // mDataBase = SQLiteDatabase.openDatabase(mPath, null,
        // SQLiteDatabase.NO_LOCALIZED_COLLATORS);
        return mDataBase != null;
    }

    @Override
    public synchronized void close() {
        if (mDataBase != null)
            mDataBase.close();
        super.close();
    }

    @Override
    public void onCreate(SQLiteDatabase arg0) {
        // TODO Auto-generated method stub

    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        // TODO Auto-generated method stub

    }

    public static class TestAdapter {
        protected static final String TAG = "DataAdapter";

        private final Context mContext;
        private SQLiteDatabase mDb;
        private DataBaseHelper mDbHelper;

        public TestAdapter(Context context) {
            this.mContext = context;
            mDbHelper = new DataBaseHelper(mContext);
        }

        public TestAdapter createDatabase() throws SQLException {
            try {
                mDbHelper.createDataBase();
            } catch (IOException mIOException) {
                Log.e(TAG, mIOException.toString() + "  UnableToCreateDatabase");
                throw new Error("UnableToCreateDatabase");
            }
            return this;
        }

        public TestAdapter open() throws SQLException {
            try {
                mDbHelper.openDataBase();
                mDbHelper.close();
                mDb = mDbHelper.getReadableDatabase();
            } catch (SQLException mSQLException) {
                Log.e(TAG, "open >>" + mSQLException.toString());
                throw mSQLException;
            }
            return this;
        }

        public void close() {
            mDbHelper.close();
        }

		/*
         * Productos por:
		 * - categoria: verduras = 1, frutas = 2 
		 * - recogida: optima = 1 
		 * - mes actual
		 * - image: http://stackoverflow.com/questions/9209941/how-to-add-image-from-drawable-to-listview-populate-from-database
		 */

        public SimpleCursorAdapter getProductsByActualDate(
                Context contextProducts, int actualMonth, int selectedCategory) {

            try {
                // Cursor
                Cursor cursorUsuarios = mDb
                        .rawQuery("SELECT l.CodTraduccion AS _id, l.TraduccionLiteral AS _literal FROM temporadas AS t INNER JOIN productos AS p ON t.CodProducto = p.CodProducto INNER JOIN literales as l ON p.CodTraduccion = l.CodTraduccion WHERE p.CodCategoria LIKE "
                                        + selectedCategory
                                        + " AND l.IdiomaLiteral LIKE 1 AND  t.CodRecogida LIKE 1 AND t.CodMes LIKE "
                                        + actualMonth, null);
                
                // From & To
                String[] from = new String[]{"_id", "_literal"};
                int[] to =  new int[]{R.id.txtItemId, R.id.txtItemName};

                // Simple Cursor Adapter
                SimpleCursorAdapter simpleCursorAdapter = new SimpleCursorAdapter(contextProducts,
                        R.layout.template_items, cursorUsuarios, from, to,
                        CursorAdapter.FLAG_REGISTER_CONTENT_OBSERVER);

                // return CursorAdapter
                return simpleCursorAdapter;
                
            } catch (SQLException mSQLException) {
                Log.e(TAG, "getTestData >>" + mSQLException.toString());
                throw mSQLException;
            }
        }
    }

}
