package com.wwtx.util;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

public class DateUtil {
	
//	public static boolean isFormatDate(String date,String format){
//		
//	}
	
	
	/**
	 * 把当前的日期 加一
	 * @param date
	 * @return
	 */
//	public String addDay(String date){
//		try{
//			
//		}
//		
//		
//		return "";
//	}
//	
	private static String formatDefault = "yyyy-MM-dd";

	/**
	 * 天数操作
	 */
    public static Date dayOper(String dateStr,int days) {
        //SimpleDateFormat form = new SimpleDateFormat("yyyy-MM-dd");

        int year = new Integer(dateStr.split("-")[0]);
        int month = new Integer(dateStr.split("-")[1]);
        int day = new Integer(dateStr.split("-")[2]);
        
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.YEAR, year);
        calendar.set(Calendar.MONTH, month-1);
        calendar.set(Calendar.DAY_OF_MONTH,day);
        
        int dayOfYear = calendar.get(Calendar.DAY_OF_YEAR);
        
        calendar.set(Calendar.DAY_OF_YEAR, dayOfYear + days);
        return calendar.getTime();
        //return form.format(cc);
    }
    
    /**
     * 取得当前日期是 本年的第几周
     * @param dateStr
     * @return
     */
    public static int weekOfYear(String dateStr){
    	
    	int year = new Integer(dateStr.split("-")[0]);
        int month = new Integer(dateStr.split("-")[1]);
        int day = new Integer(dateStr.split("-")[2]);
        
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.YEAR, year);
        calendar.set(Calendar.MONTH, month-1);
        calendar.set(Calendar.DAY_OF_MONTH,day);
        
    	return calendar.get(Calendar.WEEK_OF_YEAR);
    }
    
    

   	/**
   	 * 月数操作
   	 */
    public static String MonthAdd(int days) {
	    SimpleDateFormat form = new SimpleDateFormat("yyyy-MM");
	    Calendar calendar = Calendar.getInstance();
	    int day = calendar.get(Calendar.MONTH);
	    calendar.set(Calendar.MONTH, day + days);
	    Date cc = calendar.getTime();
	    return form.format(cc);
	}

    public static int getInterval_month_floor(Date d1, Date d2)
    {
    	int month = 0;
        try 
        { 
            Date d_first = d1;
            Date d_second = d2;
            Calendar cal_first = Calendar.getInstance(); 
            Calendar cal_second = Calendar.getInstance(); 
            
            if(d1.getTime()>d2.getTime())
            {
            	d_first = d2;
            	d_second = d1;
            }
        	
            cal_first.setTime(d_first); 
            cal_second.setTime(d_second); 
            
            month = (cal_second.get(Calendar.YEAR)-cal_first.get(Calendar.YEAR))*12+(cal_second.get(Calendar.MONTH) - cal_first.get(Calendar.MONTH));
            if(cal_first.get(Calendar.DAY_OF_MONTH)>cal_second.get(Calendar.DAY_OF_MONTH))
            	month = month - 1;
        } 
        catch (Exception e) 
        { 
            e.printStackTrace(); 
        } 
        return month;
    }
    
    //下个月的当天
    public static Date nextMonth(Date date,int interval)
    {
    	Date nextMonth = date;
    	if(interval == 0)
    		return nextMonth;
    	
    	Calendar calendar = Calendar.getInstance();
    	calendar.setTime(date);
    	int month = calendar.get(Calendar.MONTH);
    	int day = calendar.get(Calendar.DAY_OF_MONTH);
    	
    	calendar.set(Calendar.DAY_OF_MONTH, 1);
    	calendar.set(Calendar.MONTH, month+interval);
    	day = calendar.getActualMaximum(Calendar.DAY_OF_MONTH)<day?calendar.getActualMaximum(Calendar.DAY_OF_MONTH):day;
    	calendar.set(Calendar.DAY_OF_MONTH, day);
    	nextMonth = calendar.getTime();    	
    	
    	return nextMonth;
    }

	
	/**
	 * 格式化时间的显示
	 * @param date	如果date为null那么就是当前时间
	 * @return
	 */
	public static String getDate(Date date,String format){
		String str = "";
		SimpleDateFormat sdf = null;
		if(format==null){
			sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		}else{
			sdf = new SimpleDateFormat(format);
		}
		if(date==null){
			str = sdf.format(new Date());
		}else{
			str = sdf.format(date);
		}
		return str;
	}
	
	/**
	 * 格式化时间的显示
	 * @param date
	 * @return
	 */
	public static String getDate(Date date){
		return getDate(date,"yyyy-MM-dd HH:mm:ss");
		
	}
	/**
	 * 格式化时间的显示
	 * @param date
	 * @return
	 */
	public static String getDate(String format){
		return getDate(new Date(),format);

	}


	/**
	 * 格式化时间的显示
	 * @return
	 */
	public static Date parseDate(String dateStr,String formatStr){
		String type = "yyyy-MM-dd HH:mm:ss";
		if(!StringUtil.isEmpty(formatStr)){
			type = formatStr;
		}
		SimpleDateFormat format=new SimpleDateFormat(type,Locale.CHINA);
		try {
			return format.parse(formatStr);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return null;
	}


	/**
	 * 格式化时间的显示
	 * @param date
	 * @return
	 */
	public static String getDateSimple(Date date){
		return getDate(date,"yyyy-MM-dd");
		
	}
	
	/**
	 * 格式化时间的显示
	 * @param date
	 * @return
	 */
	public static String getDate(){
		return getDate(new Date(),"yyyy-MM-dd HH:mm:ss");
		
	}
	/**
	 * 格式化时间的显示
	 * @param date
	 * @return
	 */
	public static String getSimpleDate(){
		return getDate(new Date(),"yyyyMMdd");
		
	}
	
	public static Date getCurrentDate()
	{
		Locale locale=Locale.CHINA;
		Calendar calendar=Calendar.getInstance(locale);
		return calendar.getTime();
	}
	public static Date getDate(String str,String type)
	{
		if(str==null||str.equals(""))
			return null;
		Date d=null;
		SimpleDateFormat format=new SimpleDateFormat(type,Locale.CHINA);  
		try
		{
			d=format.parse(str);  
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
		return d;
	}
	public static String format(Date d,String type) 
	{
		String strDate="";
		if(d==null)
			return strDate;
		SimpleDateFormat format=new SimpleDateFormat(type,Locale.CHINA);  
		try
		{
			strDate=format.format(d);  
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
		return strDate;
	}
	public static String format(Date d) 
	{
		String strDate="";
		if(d==null)
			return strDate;
		SimpleDateFormat format=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss",Locale.CHINA);  
		try
		{
			strDate=format.format(d);  
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
		return strDate;
	}
	
	public static String format(long date)
	{
		String strDate="";
		SimpleDateFormat format=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		try
		{
			strDate=format.format(new Date(date));  
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
		return strDate;
	}
	
	 // 求2个日期的天数
    public static long getDayInterval(Date date1, Date date2){

        long myTime;
        long myTime2;
        long days = 0;
        try {
            myTime = (date1.getTime() / 1000);
            myTime2 = (date2.getTime() / 1000);

            if (myTime > myTime2) {
                days = (myTime - myTime2) / (1 * 60 * 60 * 24);
            } else {
                days = (myTime2 - myTime) / (1 * 60 * 60 * 24);
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return days;

    }
    
    /**
     * 比较日期差
     * */
    public static long dateDiff(Calendar dtStart,String strInterval,Calendar dtEnd) {
        switch (strInterval) {   
            case "s" :
            	return (dtEnd.getTimeInMillis() - dtStart.getTimeInMillis()) / 1000; 
            case "n" :
            	return (dtEnd.getTimeInMillis() - dtStart.getTimeInMillis()) / 60000;  
            case "h" :
            	return (dtEnd.getTimeInMillis() - dtStart.getTimeInMillis()) / 3600000;  
            case "d" :
            	return (dtEnd.getTimeInMillis() - dtStart.getTimeInMillis()) / 86400000;  
            case "w" :
            	return (dtEnd.getTimeInMillis() - dtStart.getTimeInMillis()) / (86400000 * 7);  
            case "m" :{
            	return (dtEnd.get(Calendar.MONTH)+1)+((dtEnd.get(Calendar.YEAR)-dtStart.get(Calendar.YEAR))*12) - (dtStart.get(Calendar.MONTH)+1);
            }
            case "y" :
            	return dtEnd.get(Calendar.YEAR)- dtStart.get(Calendar.YEAR);  
        }
        return 0;
    };  
    
    /**
     * 如果开始日期、结束日期同月
     * 		如果结束日期为月底：30-开始日期getDate()
     * 		如果结束日期不是月底：结束日期getDate()-开始日期getDate()
     * 如果开始日期、结束日期跨月
     * 		开始日期：
     * 			如果月底：0
     * 			如果不是月底：30-开始日期getDate()
     * 		中间日期：30天
     * 		结束日期：
     * 			如果是月底，算整月30天
     * 			如果不是月底：结束日期getDate()
     */
    public static long DaysBetween_DafaultDay(String startDate,String endDate,boolean month30){

    	long day = 0;
    	int DafaultDay = 30;
    	
    	boolean negative = false;
    	Date start = getDateFormat(startDate, "yyyy-MM-dd");
    	Date end = getDateFormat(endDate, "yyyy-MM-dd");
    	if(start.getTime()>end.getTime()){
    		Date temp = end;
    		end = start;
    		start = temp;
    		negative = true;
    	}
    	
    	//整月30天
    	if(month30){
    		
    		Calendar start_date =Calendar.getInstance();		//开始日期
    		start_date.setTime(start);
    		Calendar end_date = Calendar.getInstance();			//结束日期
    		end_date.setTime(end);
    		long month_interval = dateDiff(start_date,"m",end_date);
    		if(month_interval == 0)	//如果开始日期、结束日期同月
    		{
    			/**
    			 *  * 如果开始日期、结束日期同月
    			 * 		如果结束日期为月底：30-开始日期getDate()
    			 * 		如果结束日期不是月底：结束日期getDate()-开始日期getDate()
    			 */
    			int monthMaxDay_date = end_date.getActualMaximum(Calendar.DAY_OF_MONTH);	//月最后一天日期
    			
    			if(end_date.get(Calendar.DAY_OF_MONTH) == monthMaxDay_date)//如果结束日期为月底
    			{
    				day = DafaultDay - start_date.get(Calendar.DAY_OF_MONTH)<0?0:DafaultDay - start_date.get(Calendar.DAY_OF_MONTH);
    			}
    			else//如果结束日期不是月底
    			{
    				day = end_date.get(Calendar.DAY_OF_MONTH) - start_date.get(Calendar.DAY_OF_MONTH);
    			}
    		}
    		else//如果开始日期、结束日期跨月
    		{
    			/**
    			  * 如果开始日期、结束日期跨月
    			 * 		开始日期：
    			 * 			如果月底：0
    			 * 			如果不是月底：30-开始日期getDate()
    			 * 		中间日期：30天
    			 * 		结束日期：
    			 * 			如果是月底，算整月30天
    			 * 			如果不是月底：结束日期getDate() 
    			 */
    			//计算开始日期
    			int monthMaxDay_date = start_date.getActualMaximum(Calendar.DAY_OF_MONTH);	//月最后一天日期
    			if(start_date.get(Calendar.DAY_OF_MONTH) == monthMaxDay_date)//如果月底
    				day += 0;
    			else//如果不是月底
    				day += DafaultDay - start_date.get(Calendar.DAY_OF_MONTH);
    			//计算开始日期、结束日期之间月份
    			day += (month_interval-1)*DafaultDay;
    			//计算结束日期
    			monthMaxDay_date = end_date.getActualMaximum(Calendar.DAY_OF_MONTH);	//月最后一天日期
    			if(end_date.get(Calendar.DAY_OF_MONTH) == monthMaxDay_date)//如果月底
    				day += DafaultDay;
    			else//如果不是月底
    				day += end_date.get(Calendar.DAY_OF_MONTH);
    		}
    	}
    	else{
    		Calendar start_date =Calendar.getInstance();		//开始日期
    		start_date.setTime(start);
    		Calendar end_date = Calendar.getInstance();			//结束日期
    		start_date.setTime(end);
    		day = dateDiff(start_date,"d",end_date);
    	}
    	if(negative)
    		day = -day;
    	
    	return day;
    }
    
    @SuppressWarnings("static-access")
	public static String nextday(Date date,int interval,String format) 
    {
    	String nextDay = "";
    	Calendar cal = Calendar.getInstance(); 
        SimpleDateFormat sdf = new SimpleDateFormat(format); 
        try 
        { 
            cal.setTime(date); 
            cal.add(cal.DATE, interval); 
            nextDay = sdf.format(cal.getTime()); 
        } 
        catch (Exception e) 
        { 
            e.printStackTrace(); 
        } 
        return nextDay;

    } 

    public static int getDay(Date date)
    {
        Calendar  aCalendar=Calendar.getInstance(); 
        //里面野可以直接插入date类型 
        aCalendar.setTime(date); 
        //计算此日期是一周中的哪一天 
        int   x=aCalendar.get(Calendar.DAY_OF_WEEK); 
        return   x; 
    }
    public static String getDayStr(Date date)
    {
    	String day = "";
    	
    	int x = getDay(date);
    	if(x==1)
    		day = "星期日";
    	else if(x==2)
    		day = "星期一";
    	else if(x==3)
    		day = "星期二";
    	else if(x==4)
    		day = "星期三";
    	else if(x==5)
    		day = "星期四";
    	else if(x==6)
    		day = "星期五";
    	else if(x==7)
    		day = "星期六";
    	
    	return day;
    }
    
	/**
	 * 日期格式化
	 * getDateFormat(String date, String format) 方法说明
	 * return Date
	 */
	public static Date getDateFormat(String date, String format){
		if("".equals(format)){
			format = formatDefault;
		}
		if(date == null || "".equals(date)){
			return null;
		}
		DateFormat df = new SimpleDateFormat(format);
		Date dd = null;
		try {
			dd = df.parse(date);
		} catch (ParseException e) {
			System.out.println(date+"转换日期"+format+"异常");
			e.printStackTrace();
		}
		return dd;
	}
	
	/**
	 * 日期格式化
	 * getDateFormat(Date date, String format) 方法说明
	 * return String
	 */
	public static String getDateFormat(Date date, String format){
		if("".equals(format)){
			format = formatDefault;
		}
		if(date == null){
			return "";
		}
		SimpleDateFormat simple = new SimpleDateFormat(format);
		return simple.format(date);
	}
	
	public static long getInterval_minite(Date d1, Date d2)
	{
		long interval = 0;

		long time1 = d1.getTime() / 1000;
		long time2 = d2.getTime() / 1000;

		interval = (time2 - time1) / (1 * 60);

		return interval;
	}
	public static long getInterval_second(Date d1, Date d2)
	{
		long interval = 0;
		
		long time1 = d1.getTime() / 1000;
		long time2 = d2.getTime() / 1000;
		
		interval = (time2 - time1);
		
		return interval;
	}
	
	/**
	 * 得到当然日期的月天数
	 * @param date
	 * @return
	 */
	public static int getDaysOfMonth(Date date)
	{
		int days = 0;
		
    	Calendar calendar = Calendar.getInstance();
    	calendar.setTime(date);
    	days = calendar.getActualMaximum(Calendar.DAY_OF_MONTH);    
    	
    	return days;
	}

	public static void main(String[] args) throws Exception{
//		SimpleDateFormat f = new SimpleDateFormat("yyyy-MM-dd");
//		long l1 = f.parse("2013-8-6").getTime();
//		long l2 = f.parse("2009-6-30").getTime();
//		
//		long l = l1-l2;
//		System.out.println(l/60/60/24/1000);
//		for(int i=0;i<100;i++){
//		SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss:SSS");
//		System.out.println(formatter.format(new Date()));
//		}
//		System.out.println(dd.getDay(dd.getDate("2010-6-13", "yyyy-MM-dd") ));
		//System.out.println(DateUtil.getDate("2010-09-01","yyyy-MM-dd"));
		//System.out.println(new Date());
		
//		String date = "2015-02-01";
//		System.out.println(getDaysOfMonth(getDate(date,"yyyy-MM-dd")));
		
//		String d1 = "2015-07-01";//10.48
//		String d2 = "2015-12-11";
//		long interval = getDayInterval(getDate(d1,"yyyy-MM-dd"),getDate(d2,"yyyy-MM-dd"));
//		System.out.println(interval);
		
//		String d1 = "2015-12-01";//10.48
//		String d2 = "2016-02-01";
//		long interval = getDayInterval(getDate(d1,"yyyy-MM-dd"),getDate(d2,"yyyy-MM-dd"));
//		double value = 714.23*0.02/30*(interval-10-30);
//		System.out.println(value);
//		
//		d1 = "2015-12-01";//23.55
//		d2 = "2016-03-01";
//		interval = getDayInterval(getDate(d1,"yyyy-MM-dd"),getDate(d2,"yyyy-MM-dd"));
//		value = 666.62*0.02/30*(interval-10-28);
//		System.out.println(value);
//		
//		d1 = "2015-12-01";//34.17
//		d2 = "2016-04-01";
//		interval = getDayInterval(getDate(d1,"yyyy-MM-dd"),getDate(d2,"yyyy-MM-dd"));
//		value = 625*0.02/30*(interval-10-30);
//		System.out.println(value);
//		
//		d1 = "2015-12-01";//44.31
//		d2 = "2016-05-01";
//		interval = getDayInterval(getDate(d1,"yyyy-MM-dd"),getDate(d2,"yyyy-MM-dd"));
//		value = 588.16*0.02/30*(interval-10-29);
//		System.out.println(value);
		
//		d1 = "2015-12-15";//628.57
//		d2 = "2016-02-15";
//		interval = getDayInterval(getDate(d1,"yyyy-MM-dd"),getDate(d2,"yyyy-MM-dd"));
//		value = 42857.18*0.02/30*(interval-10-30);
//		System.out.println(value);
//		
//		d1 = "2015-12-15";//1413.33
//		d2 = "2016-03-15";
//		interval = getDayInterval(getDate(d1,"yyyy-MM-dd"),getDate(d2,"yyyy-MM-dd"));
//		value = 40000*0.02/30*(interval-10-28);
//		System.out.println(value);
//		
//		d1 = "2015-12-15";//1413.33
//		d2 = "2016-04-15";
//		interval = getDayInterval(getDate(d1,"yyyy-MM-dd"),getDate(d2,"yyyy-MM-dd"));
//		value = 37500*0.02/30*(interval-10-30);
//		System.out.println(value);
//		
//		d1 = "2015-12-15";//1413.33
//		d2 = "2016-05-15";
//		interval = getDayInterval(getDate(d1,"yyyy-MM-dd"),getDate(d2,"yyyy-MM-dd"));
//		value = 35294.08*0.02/30*(interval-10-29);
//		System.out.println(value);
//		
//		d1 = "2015-12-15";//1413.33
//		d2 = "2016-06-15";
//		interval = getDayInterval(getDate(d1,"yyyy-MM-dd"),getDate(d2,"yyyy-MM-dd"));
//		value = 33333.39*0.02/30*(interval-10-30);
//		System.out.println(value);
		
//		String d1 = "2014-12-15";//1413.33
//		String d2 = "2015-02-15";
//		long interval = getDayInterval(getDate(d1,"yyyy-MM-dd"),getDate(d2,"yyyy-MM-dd"));
//		double value = 612400*0.02/30*(interval);
//		System.out.println(value);
		
//		String d1 = "2014-12-15";
//		Date nextMonth = nextMonth(getDate(d1,"yyyy-MM-dd"),1);
//		System.out.println(getDateSimple(nextMonth));
//		
//		String no = DateUtil.format(new Date(), "yyMM");
//		System.out.println(no);
		
//		String d1 = "2014-07-05";
//		String d2 = "2014-08-04";
//		long interval = getDayInterval(getDate(d1,"yyyy-MM-dd"),getDate(d2,"yyyy-MM-dd"));
//		System.out.println(interval);
		System.out.println(DaysBetween_DafaultDay("2014-09-10","2015-04-09",true));
		System.out.println(DaysBetween_DafaultDay("2014-09-10","2015-04-11",true));
	}
	
	/**计算月份差*/
	public static Integer calcMonth(String start,String end){
		Date startDate = getDateFormat(start, "yyyy-MM-dd");
		Calendar startCalendar = Calendar.getInstance();
		startCalendar.setTime(startDate);
		Date endDate = getDateFormat(end, "yyyy-MM-dd");
		Calendar endCalendar= Calendar.getInstance();//结束日期
		endCalendar.setTime(endDate);
		int endYear = endCalendar.get(Calendar.YEAR);
		int startYear = startCalendar.get(Calendar.YEAR);
		int endMonth = endCalendar.get(Calendar.MONTH);
		int startMonth = startCalendar.get(Calendar.MONTH);
		int startDay = startCalendar.get(Calendar.DAY_OF_MONTH);
		int startMonthLastDay = startCalendar.getActualMaximum(Calendar.DAY_OF_MONTH);
		int endDay = endCalendar.get(Calendar.DAY_OF_MONTH);
		int endMonthLasyDay = endCalendar.getActualMaximum(Calendar.DAY_OF_MONTH);
		boolean isStartLastDay = startMonthLastDay==startDay;
		boolean isEndLastDay = endMonthLasyDay == endDay;
		int fixedMonth = 0;//月份修正
		if(startDay == endDay){//天相同不修正
			fixedMonth = 0;
		}else{
			if(endDay>startDay){//结束天大于起始天
				if(isStartLastDay&&isEndLastDay){//同是月底不修正
					fixedMonth = 0;
				}else if(isStartLastDay){//如果起始是月底，结束不是月底，修正为少一个月
					fixedMonth = -1;
				}else if(isEndLastDay){//如果结束是月底，起始不是月底，修正为多一个月
					fixedMonth = 1;
				}else if((!isStartLastDay)&&(!isEndLastDay)){//如果都不是月底，起始大于结束算少一个月，起始小于结束算多一个月
					if(endDay-startDay>0){
						fixedMonth = 1;
					}else{
						fixedMonth = -1;
					}
				}
			}
		}
		if(startYear!=endYear){//跨年
			if(endMonth==startMonth){//月相同返回年*12
				return (endYear-startYear)*12+fixedMonth;
			}else if(endYear>startMonth){//结束月份大,返回年*12+月份差
				return (endYear-startYear)*12+(endMonth-startMonth)+fixedMonth;
			}else if(endYear<startMonth){//结束月份小
				return (endYear-startYear-1)*12+(endMonth+12-startMonth)+fixedMonth;
			}
		}else{//同一年
			return endMonth - startMonth+fixedMonth;
		}
		return 0;
	}
	
	/**比较两个日期是否为同一天*/
	public static boolean isSameDate(Date date1, Date date2) {
	       Calendar cal1 = Calendar.getInstance();
	       cal1.setTime(date1);

	       Calendar cal2 = Calendar.getInstance();
	       cal2.setTime(date2);

	       boolean isSameYear = cal1.get(Calendar.YEAR) == cal2
	               .get(Calendar.YEAR);
	       boolean isSameMonth = isSameYear
	               && cal1.get(Calendar.MONTH) == cal2.get(Calendar.MONTH);
	       boolean isSameDate = isSameMonth
	               && cal1.get(Calendar.DAY_OF_MONTH) == cal2
	                       .get(Calendar.DAY_OF_MONTH);

	       return isSameDate;
	 }
}
