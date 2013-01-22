package com.garciaechegaray.tuttifrescuni;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.view.View;
import android.widget.*;
import android.content.Intent;

public class MainActivity extends Activity implements View.OnClickListener {

    Button fruits;
    Button vegetables;
    TextView season;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //Items
        fruits = (Button) findViewById(R.id.button_fruits);
        vegetables = (Button) findViewById(R.id.button_vegetables);
        season = (TextView) findViewById(R.id.tv_season);
        season.setText(Utility.getSeason(this));

        //Listeners
        fruits.setOnClickListener(this);
        vegetables.setOnClickListener(this);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.activity_main, menu);
        return true;
    }

    @Override
    public void onClick(View arg0) {

        //Load products list by category and date
        if (arg0 == vegetables) {
            Intent intentVegetables = new Intent(this, ActivityProductList.class);
            intentVegetables.putExtra("product_category", 1);
            startActivity(intentVegetables);
        }

        if (arg0 == fruits) {
            Intent intentFruits = new Intent(this, ActivityProductList.class);
            intentFruits.putExtra("product_category", 2);
            startActivity(intentFruits);
        }
    }
}
