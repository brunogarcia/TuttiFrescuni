package com.garciaechegaray.tuttifrescuni;

import android.content.Context;
import android.database.Cursor;
import android.graphics.Bitmap;
import android.graphics.drawable.BitmapDrawable;
import android.view.Gravity;
import android.widget.Toast;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class Utility {

	public static String GetColumnValue(Cursor cur, String ColumnName) {
		try {
			return cur.getString(cur.getColumnIndex(ColumnName));
		} catch (Exception ex) {
			return "";
		}
	}

	// ## Formatting month using SimpleDateFormat ##
	// http://www.java-examples.com/formatting-month-using-simpledateformat
	public static int getActualMonthNumber() {

		int actualMonthNumber;
		String strDateFormat;

		// create Date object
		Date date = new Date();

		// formatting month in M format like 1,2 etc
		strDateFormat = "M";
		SimpleDateFormat sdf = new SimpleDateFormat(strDateFormat);
		actualMonthNumber = Integer.parseInt(sdf.format(date));

		return actualMonthNumber;
	}

	public static String getActualMonthString() {

		String actualMonthString;
		String strDateFormat;

		// create Date object
		Date date = new Date();

		// formatting Month in MMMM format like January, February etc.
		strDateFormat = "MMMM";
		SimpleDateFormat sdf = new SimpleDateFormat(strDateFormat, new Locale(
				"es", "ES"));
		actualMonthString = sdf.format(date).toUpperCase();

		return actualMonthString;
	}

	public static int getActualDayNumber() {

		int actualDayNumber;
		String strDateFormat;

		// create Date object
		Date date = new Date();

		// formatting day in d format like 1,2 etc
		strDateFormat = "d";
		SimpleDateFormat sdf = new SimpleDateFormat(strDateFormat);
		actualDayNumber = Integer.parseInt(sdf.format(date));

		return actualDayNumber;
	}

	public static String getSeason(Context context) {
		// Northern seasons:
		// - spring: 21/3 -> 4 -> 5 -> 20/6
		// - summer: 21/6 -> 7 -> 8 -> 20/9
		// - fall: 21/9 -> 10 -> 11 -> 20/12
		// - winter: 21/12 -> 1 -> 2 -> 20/3

		String season = "";
		String spring = context.getString(R.string.txt_spring);
		String summer = context.getString(R.string.txt_summer);
		String fall = context.getString(R.string.txt_fall);
		String winter = context.getString(R.string.txt_winter);

		int day = getActualDayNumber();
		int month = getActualMonthNumber();

		if (month == 3)
			season = (day <= 20) ? winter : spring;
		else if (month == 6)
			season = (day <= 20) ? spring : summer;
		else if (month == 9)
			season = (day <= 20) ? summer : fall;
		else if (month == 12)
			season = (day <= 20) ? fall : winter;
		else if (month == 4 || month == 5)
			season = spring;
		else if (month == 7 || month == 8)
			season = summer;
		else if (month == 10 || month == 11)
			season = fall;
		else
			season = winter;

		return season;
	}
}
