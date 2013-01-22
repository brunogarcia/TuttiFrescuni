package com.garciaechegaray.tuttifrescuni;

import android.os.Bundle;
import android.app.Activity;
import android.widget.ListView;
import android.widget.SimpleCursorAdapter;
import android.widget.TextView;


public class ActivityProductList extends Activity {

    DataBaseHelper.TestAdapter mDbHelper;
    SimpleCursorAdapter cursorAdapterProducts;
    ListView products;
    TextView season;

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_items);

        //Intent Extras
        Bundle extras = getIntent().getExtras();
        int product_category = extras.getInt("product_category");

        //Season
        season = (TextView) findViewById(R.id.tv_season);
        season.setText(Utility.getSeason(this));

        //Database
        mDbHelper = new DataBaseHelper.TestAdapter(this);
        mDbHelper.createDatabase();
        mDbHelper.open();

        //ListView
        products = (ListView) findViewById(R.id.listViewProducts);

        //Cursor Adapter
        cursorAdapterProducts = mDbHelper.getProductsByActualDate(this, Utility.getActualMonthNumber(), product_category);

        //Add to ListView a CursorAdapter
        products.setAdapter(cursorAdapterProducts);

        //close Database
        mDbHelper.close();


    }
}