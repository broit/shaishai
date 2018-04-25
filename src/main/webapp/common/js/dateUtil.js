//--------------------------------------------------- 
// Date.prototype.IsLeapYear 判断闰年
// Date.prototype.Format 日期格式化
// Date.prototype.DateAdd 日期计算
// Date.prototype.DateDiff 比较日期差
// Date.prototype.ToString 日期转字符串
// Date.prototype.ToArray 日期分割为数组
// Date.prototype.DatePart 取日期的部分信息
// Date.prototype.MaxDayOfDate 取日期所在月的最大天数
// Date.prototype.WeekNumOfYear 判断日期所在年的第几周
// StringToDate 字符串转日期型
// IsValidDate 验证日期有效性
// CheckDateTime 完整日期时间检查
// DaysBetween 日期天数差
//--------------------------------------------------- 

//---------------------------------------------------  
// 判断闰年  
//---------------------------------------------------  
Date.prototype.IsLeapYear = function()   
{   
    return (0==this.getYear()%4&&((this.getYear()%100!=0)||(this.getYear()%400==0)));   
};
  
//---------------------------------------------------  
// 日期格式化  
// 格式 YYYY/yyyy/YY/yy 表示年份  
// MM/M 月份  
// W/w 星期  
// dd/DD/d/D 日期  
// hh/HH/h/H 时间  
// mm/m 分钟  
// ss/SS/s/S 秒  
//---------------------------------------------------  
Date.prototype.Format = function(formatStr,actualMonth)   
{   
    var str = formatStr;   
    var Week = ['日','一','二','三','四','五','六'];
  
    str=str.replace(/yyyy|YYYY/,this.getFullYear());   
    str=str.replace(/yy|YY/,(this.getYear() % 100)>9?(this.getYear() % 100).toString():'0' + (this.getYear() % 100));   
  
    //修改
    if(actualMonth)
    {
        str=str.replace(/MM/,this.getMonth()+1>9?this.getMonth()+ 1:'0' + (this.getMonth()+ 1));   
        str=str.replace(/M/g,this.getMonth()+1); 
    }
    else
    {
    	str=str.replace(/MM/,this.getMonth()>9?this.getMonth()+ 1:'0' + (this.getMonth()));   
        str=str.replace(/M/g,this.getMonth()); 
    }
  
    str=str.replace(/w|W/g,Week[this.getDay()]);   
  
    str=str.replace(/dd|DD/,this.getDate()>9?this.getDate().toString():'0' + this.getDate());   
    str=str.replace(/d|D/g,this.getDate());   
  
    str=str.replace(/hh|HH/,this.getHours()>9?this.getHours().toString():'0' + this.getHours());   
    str=str.replace(/h|H/g,this.getHours());   
    str=str.replace(/mm/,this.getMinutes()>9?this.getMinutes().toString():'0' + this.getMinutes());   
    str=str.replace(/m/g,this.getMinutes());   
  
    str=str.replace(/ss|SS/,this.getSeconds()>9?this.getSeconds().toString():'0' + this.getSeconds());   
    str=str.replace(/s|S/g,this.getSeconds());   
  
    return str;   
};

  
//+---------------------------------------------------  
//| 求两个时间的天数差 日期格式为 YYYY-MM-dd   
//+---------------------------------------------------  
function DaysBetween(DateOne,DateTwo)  
{   
    var OneMonth = DateOne.substring(5,DateOne.lastIndexOf ('-'));  
    var OneDay = DateOne.substring(DateOne.length,DateOne.lastIndexOf ('-')+1);  
    var OneYear = DateOne.substring(0,DateOne.indexOf ('-'));  
  
    var TwoMonth = DateTwo.substring(5,DateTwo.lastIndexOf ('-'));  
    var TwoDay = DateTwo.substring(DateTwo.length,DateTwo.lastIndexOf ('-')+1);  
    var TwoYear = DateTwo.substring(0,DateTwo.indexOf ('-'));  
  
    var cha=((Date.parse(OneMonth+'/'+OneDay+'/'+OneYear)- Date.parse(TwoMonth+'/'+TwoDay+'/'+TwoYear))/86400000);   
    return Math.abs(cha);  
}; 


  
//+---------------------------------------------------  
//| 日期计算  
//+---------------------------------------------------  
Date.prototype.DateAdd = function(strInterval, Number) {   
    var dtTmp = this;  
    switch (strInterval) {   
        case 's' :return new Date(Date.parse(dtTmp) + (1000 * Number));  
        case 'n' :return new Date(Date.parse(dtTmp) + (60000 * Number));  
        case 'h' :return new Date(Date.parse(dtTmp) + (3600000 * Number));  
        case 'd' :return new Date(Date.parse(dtTmp) + (86400000 * Number));  
        case 'w' :return new Date(Date.parse(dtTmp) + ((86400000 * 7) * Number));  
        case 'q' :return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number*3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());  
        case 'm' :return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());  
        case 'y' :return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());  
    }  
}; 
  
//+---------------------------------------------------  
//| 比较日期差 dtEnd 格式为日期型或者有效日期格式字符串  
//+---------------------------------------------------  
Date.prototype.DateDiff = function(strInterval, dtEnd) {   
    var dtStart = this;  
    if (typeof dtEnd == 'string' )//如果是字符串转换为日期型  
    {   
        dtEnd = StringToDate(dtEnd);  
    }  
    switch (strInterval) {   
        case 's' :return parseInt((dtEnd - dtStart) / 1000);  
        case 'n' :return parseInt((dtEnd - dtStart) / 60000);  
        case 'h' :return parseInt((dtEnd - dtStart) / 3600000);  
        case 'd' :return parseInt((dtEnd - dtStart) / 86400000);  
        case 'w' :return parseInt((dtEnd - dtStart) / (86400000 * 7));  
        case 'm' :return (dtEnd.getMonth()+1)+((dtEnd.getFullYear()-dtStart.getFullYear())*12) - (dtStart.getMonth()+1);  
        case 'y' :return dtEnd.getFullYear() - dtStart.getFullYear();  
    }  
};  
  
//+---------------------------------------------------  
//| 日期输出字符串，重载了系统的ToString方法  
//+---------------------------------------------------  
Date.prototype.ToString = function(showWeek)  
{   
    var myDate= this;  
    var str = myDate.toLocaleDateString();  
    if (showWeek)  
    {   
        var Week = ['日','一','二','三','四','五','六'];  
        str += ' 星期' + Week[myDate.getDay()];  
    }  
    return str;  
};
  
//+---------------------------------------------------  
//| 日期合法性验证  
//| 格式为：YYYY-MM-DD或YYYY/MM/DD  
//+---------------------------------------------------  
function IsValidDate(DateStr)   
{   
    var sDate=DateStr.replace(/(^\s+|\s+$)/g,''); //去两边空格;   
    if(sDate=='') return true;   
    //如果格式满足YYYY-(/)MM-(/)DD或YYYY-(/)M-(/)DD或YYYY-(/)M-(/)D或YYYY-(/)MM-(/)D就替换为''   
    //数据库中，合法日期可以是:YYYY-MM/DD(2003-3/21),数据库会自动转换为YYYY-MM-DD格式   
    var s = sDate.replace(/[\d]{ 4,4 }[\-/]{ 1 }[\d]{ 1,2 }[\-/]{ 1 }[\d]{ 1,2 }/g,'');   
    if (s=='') //说明格式满足YYYY-MM-DD或YYYY-M-DD或YYYY-M-D或YYYY-MM-D   
    {   
        var t=new Date(sDate.replace(/\-/g,'/'));   
        var ar = sDate.split(/[-/:]/);   
        if(ar[0] != t.getYear() || ar[1] != t.getMonth()+1 || ar[2] != t.getDate())   
        {   
            //alert('错误的日期格式！格式为：YYYY-MM-DD或YYYY/MM/DD。注意闰年。');   
            return false;   
        }   
    }   
    else   
    {   
        //alert('错误的日期格式！格式为：YYYY-MM-DD或YYYY/MM/DD。注意闰年。');   
        return false;   
    }   
    return true;   
};   
  
//+---------------------------------------------------  
//| 日期时间检查  
//| 格式为：YYYY-MM-DD HH:MM:SS  
//+---------------------------------------------------  
function CheckDateTime(str)  
{   
    var reg = /^(\d+)-(\d{ 1,2 })-(\d{ 1,2 }) (\d{ 1,2 }):(\d{ 1,2 }):(\d{ 1,2 })$/;   
    var r = str.match(reg);   
    if(r==null)return false;   
    r[2]=r[2]-1;   
    var d= new Date(r[1],r[2],r[3],r[4],r[5],r[6]);   
    if(d.getFullYear()!=r[1])return false;   
    if(d.getMonth()!=r[2])return false;   
    if(d.getDate()!=r[3])return false;   
    if(d.getHours()!=r[4])return false;   
    if(d.getMinutes()!=r[5])return false;   
    if(d.getSeconds()!=r[6])return false;   
    return true;   
};   
  
//+---------------------------------------------------  
//| 把日期分割成数组  
//+---------------------------------------------------  
Date.prototype.ToArray = function()  
{    
    var myArray = Array();  
    myArray[0] = this.getFullYear();  
    myArray[1] = this.getMonth();  
    myArray[2] = this.getDate();  
    myArray[3] = this.getHours();  
    myArray[4] = this.getMinutes();  
    myArray[5] = this.getSeconds();  
    return myArray;  
};  
  
//+---------------------------------------------------  
//| 取得日期数据信息  
//| 参数 interval 表示数据类型  
//| y 年 m月 d日 w星期 ww周 h时 n分 s秒  
//+---------------------------------------------------  
Date.prototype.DatePart = function(interval)  
{   
    var myDate = this;  
    var partStr='';  
    var Week = ['日','一','二','三','四','五','六'];  
    switch (interval)  
    {   
        case 'y' :partStr = myDate.getFullYear();break;  
        case 'm' :partStr = myDate.getMonth()+1;break;  
        case 'd' :partStr = myDate.getDate();break;  
        case 'w' :partStr = Week[myDate.getDay()];break;  
        case 'ww' :partStr = myDate.WeekNumOfYear();break;  
        case 'h' :partStr = myDate.getHours();break;  
        case 'n' :partStr = myDate.getMinutes();break;  
        case 's' :partStr = myDate.getSeconds();break;  
    }  
    return partStr;  
}; 
  
//+---------------------------------------------------  
//| 取得当前日期所在月的最大天数  
//+---------------------------------------------------  
Date.prototype.MaxDayOfDate = function()  
{   
    var ary = this.ToArray();  
    var date1 = (new Date(ary[0],ary[1]+1,1));   
    var result = date1.DateAdd('d',-1);  
    return result;  
};

  
//+---------------------------------------------------  
//| 字符串转成日期类型   
//| 格式 MM/dd/YYYY MM-dd-YYYY YYYY/MM/dd YYYY-MM-dd  
//+---------------------------------------------------  
function StringToDate(DateStr)  
{   
  
    var converted = Date.parse(DateStr);  
    var myDate = new Date(converted);  
    if (isNaN(myDate))  
    {   
        //var delimCahar = DateStr.indexOf('/')!=-1?'/':'-';  
        var arys= DateStr.split('-');  
        myDate = new Date(arys[0],--arys[1],arys[2]);
    }  
    return myDate;  
};

Date.prototype.FormatSimple = function(actualMonth)   
{ 
	return this.Format('YYYY-MM-DD',actualMonth);
};

//+---------------------------------------------------  
//| 季初
//+---------------------------------------------------  
Date.prototype.quarterStart = function(actual) {   
  var month_quarter;
  
  var year = this.getFullYear();   //获取完整的年份(4位,1970-????)
  var month = this.getMonth();	 //获取当前月份(0-11,0代表1月)
  if(actual)
  	month = month-1;
  var day = this.getDate();		 //获取当前日(1-31)
  
  month_quarter = month;
  if(month<=3)
  	month_quarter = 3;
  else if(month<=6)
  	month_quarter = 6;
  else if(month<=9)
  	month_quarter = 9;
  else if(month<=12)
  	month_quarter = 12;
  
  var day_start = 1;
  
  return new Date(year,--month_quarter,day_start);
};

//+---------------------------------------------------  
//| 季末
//+---------------------------------------------------  
Date.prototype.quarterEnd = function(actual) {   
var month_quarter;

var year = this.getFullYear();   //获取完整的年份(4位,1970-????)
var month = this.getMonth();	 //获取当前月份(0-11,0代表1月)
if(actual)
	month = month-1;
var day = this.getDate();		 //获取当前日(1-31)

month_quarter = month;
if(month<3)
	month_quarter = 3;
else if(month<6)
	month_quarter = 6;
else if(month<9)
	month_quarter = 9;
else if(month<12)
	month_quarter = 12;

var day_end = 1;

return new Date(year,--month_quarter,day_end).MaxDayOfDate();
};

//+---------------------------------------------------  
//| 求两个时间的天数差(整月算30天) 日期格式为 YYYY-MM-dd
//+---------------------------------------------------  
function DaysBetween_DafaultDay1(start,end,month30)
{
	var day = 0;
	var DafaultDay = 30;
	
	var negative = false;
	if(start>end)
	{
		var temp = end;
		end = start;
		start = temp;
		negative = true;
	}
	
	//整月30天
	if(month30 == true || month30=='true')
	{
		
		var start_date = StringToDate(start);		//开始日期
		var end_date = StringToDate(end);			//结束日期
		var month_interval = start_date.DateDiff('m',end_date);
		for(var i=0;i<=month_interval;i++)
		{
			var monthStart_date;	//月开始日期
			var monthEnd_date;		//月结束日期
			var monthMaxDay_date;	//月最后一天日期
			if(month_interval==0)//开始、结束同月
			{
				monthStart_date = start_date;
				monthEnd_date = end_date;
				monthMaxDay_date = monthEnd_date.MaxDayOfDate();
				
				if(monthStart_date.getDate()==1 && monthEnd_date.getDate()==monthMaxDay_date.getDate())
					day = DafaultDay;
				else
					day = monthStart_date.DateDiff('d',monthEnd_date);
			}
			else//开始、结束跨月
			{
				if(i==0)//开始月
				{
					monthStart_date = start_date;
					monthEnd_date = monthStart_date.MaxDayOfDate();
					if(monthStart_date.getDate()==1)
						day+= DafaultDay;
					else
						day+= monthStart_date.DateDiff('d',monthEnd_date);
				}
				else if(i==month_interval)//结束月
				{
					monthEnd_date = end_date;
					monthStart_date = new Date(monthEnd_date.getFullYear(),monthEnd_date.getMonth(),1);
					monthMaxDay_date = monthEnd_date.MaxDayOfDate();
					if(monthEnd_date.getDate()==monthMaxDay_date.getDate())
						day+= DafaultDay;
					else
						day+= monthStart_date.DateDiff('d',monthEnd_date);
				}
				else//中间月
					day+=DafaultDay;
			}
		}
	}
	else
	{
		day = StringToDate(start).DateDiff('d',end);
	}
	if(negative)
		day = -day;
	
	return day;
};

//+---------------------------------------------------  
//| 求两个时间的天数差(整月算30天) 日期格式为 YYYY-MM-dd
//
//2014-11-01	2014-11-30	29天
//2014-11-01	2014-11-29	28天
//2014-12-01	2014-12-31	29天
//2014-12-01	2014-12-30	29天
//
//2014-11-01	2014-12-01	30天
//2014-11-01	2014-12-02	31天
//2014-12-01	2015-01-01	30天
//2014-12-01	2015-01-02	31天
//
//2014-02-01	2014-02-28	29天
//2014-02-01	2014-02-27	26天
//
//2014-07-05	2014-07-30	25天
//2014-07-05	2014-07-31	25天
//2014-07-05	2014-08-01	26天
//2014-02-05	2014-02-27	22天
//2014-02-05	2014-02-28	25天
//2014-02-05	2014-03-01	26天
//2014-02-27	2014-03-05	8天
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
//+---------------------------------------------------  
function DaysBetween_DafaultDay(start,end,month30)
{
	var day = 0;
	var DafaultDay = 30;
	
	var negative = false;
	if(start>end)
	{
		var temp = end;
		end = start;
		start = temp;
		negative = true;
	}
	
	//整月30天
	if(month30 == true || month30=='true')
	{
		
		var start_date = StringToDate(start);		//开始日期
		var end_date = StringToDate(end);			//结束日期
		var month_interval = start_date.DateDiff('m',end_date);
		
		if(month_interval == 0)	//如果开始日期、结束日期同月
		{
			/**
			 *  * 如果开始日期、结束日期同月
			 * 		如果结束日期为月底：30-开始日期getDate()
			 * 		如果结束日期不是月底：结束日期getDate()-开始日期getDate()
			 */
			var monthMaxDay_date = end_date.MaxDayOfDate();	//月最后一天日期
			
			if(end_date.getDate() == monthMaxDay_date.getDate())//如果结束日期为月底
			{
				day = DafaultDay - start_date.getDate()<0?0:DafaultDay - start_date.getDate();
			}
			else//如果结束日期不是月底
			{
				day = end_date.getDate() - start_date.getDate();
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
			var monthMaxDay_date = start_date.MaxDayOfDate();	//月最后一天日期
			if(start_date.getDate() == monthMaxDay_date.getDate())//如果月底
				day += 0;
			else//如果不是月底
				day += DafaultDay - start_date.getDate();
			//计算开始日期、结束日期之间月份
			day += (month_interval-1)*DafaultDay;
			//计算结束日期
			monthMaxDay_date = end_date.MaxDayOfDate();	//月最后一天日期
			if(end_date.getDate() == monthMaxDay_date.getDate())//如果月底
				day += DafaultDay;
			else//如果不是月底
				day += end_date.getDate();
		}
	}
	else
	{
		day = StringToDate(start).DateDiff('d',end);
	}
	if(negative)
		day = -day;
	
	return day;
};

//+---------------------------------------------------  
//| 日期计算  (整月算30天) 日期格式为 YYYY-MM-dd 
//+--------------------------------------------------- 
function DateAdd_DafaultDay(start,interval,month30)
{
	var dateStr='';
	var DafaultDay = 30;
	if(interval ==0 )
		return start;
	
	//整月30天
	if(month30 == true || month30=='true')
	{
		var start_date = StringToDate(start);					//开始日期
		var monthMaxDay_start_date = start_date.MaxDayOfDate();		//月最后一天日期
		var month = Math.floor(interval/DafaultDay);	//应累加的月数
		var date = interval%DafaultDay;					//应累加的天数
		
		var result_date = null;
		//月处理
		var firstDay = new Date(start_date.getFullYear(),start_date.getMonth()+month,1);
		var monthMaxDay_date = firstDay.MaxDayOfDate();		//月最后一天日期
		
		//如果开始日期为月末
		if(start_date.getDate() == monthMaxDay_start_date.getDate())
		{
				result_date = monthMaxDay_date;
		}
		else
		{
			if(start_date.getDate()>monthMaxDay_date.getDate())
				result_date = monthMaxDay_date;
			else
				result_date = new Date(start_date.getFullYear(),start_date.getMonth()+month,start_date.getDate());
		}
		
		
		//天数处理
		result_date = result_date.DateAdd('d',date);
		
		dateStr = result_date.FormatSimple(true);
	}
	else
	{
		dateStr = StringToDate(start).DateAdd('d',interval).FormatSimple(true);
	}
	return dateStr;
};

//+---------------------------------------------------  
//| 月份计算  (整月算30天) 日期格式为 YYYY-MM-dd 
//+--------------------------------------------------- 
function MonthAdd_DafaultDay(start,interval,month30)
{
	var dateStr='';
	var DafaultDay = 30;
	if(interval ==0 )
		return start;
	
	//整月30天
	if(month30 == true || month30=='true')
	{
		return DateAdd_DafaultDay(start,interval*DafaultDay,month30);
	}
	else
	{
		dateStr = StringToDate(start).DateAdd('m',interval).FormatSimple(true);
	}
	return dateStr;
};