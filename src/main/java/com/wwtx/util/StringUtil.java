package com.wwtx.util;

import java.io.UnsupportedEncodingException;
import java.lang.reflect.Field;
import java.sql.Clob;
import java.sql.SQLException;
import java.util.Date;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;


public class StringUtil {
	private static Log log = LogFactory.getLog(StringUtil.class);
	
	
	
	public static boolean isNotSame(String param){		
		String[] array = param.split("");
		String a0 = array[0];
		for(int i=0;i<array.length;i++){
			String aTemp = array[i];

			if(!a0.equals(aTemp)){
				return true;
			}

		}
		return false;
	}
	
	/**
	 * 根据输入的文件名，返回文件名的后缀
	 * @param fileName
	 * @return
	 */
	public static String getFileType(String fileName){
		try{
			String regex = "[^.]+$";
			
			return RegexUtil.matchingFirst(fileName, regex);
		}catch(Exception e){
			log.error(e);
			e.printStackTrace();
		}
		return "";
	}
	
	/**
	 * 过滤掉上传文件中 所有可能的非法字符
	 * @param fileName
	 * @return
	 */
	public static String converFileName(String fileName){
//		String str = "[#]|[\\]|[/]|[:]|[*]|[?]|[\"]|[<]|[>]|[|]";
		fileName = fileName.replaceAll("#1", "1号");
		fileName = fileName.replaceAll("#2", "2号");
		fileName = fileName.replaceAll("#3", "3号");
		fileName = fileName.replaceAll("#4", "4号");
		fileName = fileName.replaceAll("#", "");
		return fileName;
	}

	
	
	/**
	 * 转换字符的编码
	 * @param str
	 * @param decode1
	 * @param decode2
	 * @return
	 */
	public static String converDecode(String str,String decode1,String decode2){
		try {
			if(isEmpty(str)){
				return "";
			}
			if(isEmpty(decode1)){
				decode1 = "GBK";
			}
			if(isEmpty(decode2)){
				decode2 = "iso8859-1";
			}
			return new String(str.getBytes(decode1),decode2);
		} catch (UnsupportedEncodingException e) {
			log.error(e);
			e.printStackTrace();
		}
		return str;
	}
	
	
	
	
	/**
	 * 把传入类的全局属性分析出来，作为参数组合出一套字符串
	 * 整合原系统时 或 新的拦截分页公用
	 * @param daoClass
	 * @param objClass
	 * @return
	 */
	public static String converClassAttributeToStr(String prefix,Class daoClass,Object objClass){
		StringBuffer buff = new StringBuffer();
		try{
			Class[] sumClass = new Class[]{};
			Object[] sumObj = new String[]{};
			
			
			Field[] fields = daoClass.getDeclaredFields();
			if(fields!=null){
				for(int i=0;i<fields.length;i++){
					Field field = fields[i];
					//判断出参数的类型，只有字符串、int和long类型才被自动的认为是页面参数
					Class type = field.getType();
					if(type.equals(String.class)||type.equals(int.class)||
							type.equals(Long.class)){
						try{
							String fieldName = field.getName();
							Object fieldValue = daoClass.getMethod(StringUtil.converGetMode(field.getName()),sumClass).invoke(objClass,sumObj);
							String tempFieldValue = "";
							log.info(fieldName+" = "+fieldValue);
							if(fieldValue!=null){
								tempFieldValue = fieldValue.toString();
							}
							buff.append("&"+prefix+fieldName+"="+StringUtil.filterNull_String(tempFieldValue));
//							"&mindPage."+fieldName+"="+StringUtil.filterNull_String(tempFieldValue);
						}catch (NoSuchMethodException e1) {
							log.warn(e1);
						}
					}					
				}
			}
		}catch(Exception e){
			log.error(e);
		}
		log.info("组合出来的参数："+buff);
		return buff.toString();
	}
	
	
	/**
	 * 解析字符串分析出:保持分页状态的返回原页面时需要的参数
	 * @param param
	 * @return
	 */
	public static String getReturnPageStatus(String pageStatus){
		if(pageStatus!=null){
			pageStatus = pageStatus.replaceAll("<~E>","=");
			pageStatus = pageStatus.replaceAll("<~A>", "&");
		}
		return StringUtil.filterNull_String(pageStatus);
	}
	
	
	/**
	 * 返回文件名称 三位随机数 + 当前时间
	 * @return
	 */
	public static String getFileName(String fileName){
		String name = new Date().getTime()+"";
		int randomInt=(int)(Math.random()*1000);
		
		String[] arr = fileName.split("[.]");
		
		return randomInt+"_"+name+"."+arr[arr.length-1];
	}
	
	/**
	 * 返回clob的内容
	 * @param tempClob
	 * @param clob
	 * @return
	 */
	public static String getClobContext(String tempClob,Clob clob){
		if(tempClob==null&&clob!=null){
    		try {
				//xcms=xcmsclob.getSubString(1, new Long(xcmsclob.length()).intValue()-1);
    			tempClob=clob.getSubString(1, new Long(clob.length()).intValue());
			} catch (SQLException e) {
				e.printStackTrace();
			}
    	}
//		return tempMrZlnr;
		
		return tempClob;
	}
	
	
	public static String getClobContext(Clob clob){
		if(clob!=null){
			try {
				return clob.getSubString(1, new Long(clob.length()).intValue());
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}		
		return "";
	}
	
	/**
	 * 把输入的字符串转换成getXxx的字符串方式
	 * @param str
	 * @return
	 */
	public static String converGetMode(String str){
		if(str!=null&&!str.equals("")){
			String firstStr = str.substring(0,1);
			String otherStr = str.substring(1);
		
			return "get"+firstStr.toUpperCase()+otherStr;
		}
		return "";
	}

	
	/**
	 * 过滤掉 传入字符串中的空格 包括前面的空格后面的空格 和中间的空格
	 * @return
	 */
	public static String trimStringAll(String str){
		if(str!=null&&!str.equals("")){
			str = str.replaceAll("\\s", "");
		}
		return str;
	}

	
	
	/**
	 * 过滤字符串中的null  为空
	 * @param str
	 * @return
	 */
	public static String filterNull_String(String str){
		if(str==null){
			str = "";
		}
		return str;
	}
	
	
	/**
	 * 判断输入的字符串是否为空
	 * @param str
	 * @return
	 */
	public static boolean isEmpty(String str){
		if(str!=null&&!str.equals("")){
			return false;
		}else{
			return true;
		}
	}
	
	/**
	 * 替换&quot;为\&quot;
	 * */
	public static String getSafedHTML(String str){
		str = filterNull_String(str);
		str = str.replaceAll("'", "\\\\'");
		str = str.replaceAll("\n", "<br/>");
		str = str.replaceAll("\r", "<br/>");
//		Pattern p=Pattern.compile("<\\s*script*\\s* .*</\\s*script\\s*>",Pattern.CASE_INSENSITIVE);
		str = str.replaceAll("<\\s*script*\\s* .*</\\s*script\\s*>", "");
//		Matcher m=p.matcher(str);
		return str;
	}
	
	
	/**
	 * 转换 字符串
	 * @param str
	 * @return
	 */
	public static String converHtml(String str){
		if(!isEmpty(str)){
			str = str.replaceAll("<", "&lt;");
			str = str.replaceAll(">", "&gt;");
			str = str.replaceAll("&", "	&amp;");
//			str = str.replaceAll("", "&gt;");
			return str;
		}
		return "";
	}
	
	/**
	 * 转换 字符串  用于textarea的显示操作
	 * @param str
	 * @return
	 */
	public static String filtrHtml(String str){
		if(!isEmpty(str)){
			str = str.replaceAll("\"", "\\\\\"");
			str = str.replaceAll("\r\n", "\\\\r\\\\n");
//			str = str.replaceAll(">", "&gt;");
//			str = str.replaceAll("&", "	&amp;");
//			str = str.replaceAll("", "&gt;");
			return str;
		}
		return "";
	}
	
	/**
	 * 验证传入的sql语句，是否是安全的sql（不能包含删除和更新的操作）
	 * @param sql
	 * @return
	 */
	public static boolean valiSql(String sql){
		int flags = Pattern.CASE_INSENSITIVE;
		
		String regex = "delete|update";
		
		return !RegexUtil.test_flags(sql, regex, flags);		
	}
	
	public static void main(String[] args){
		String sql = "seLEct * form 是、山东省  ";
//		StringUtil.valiSql(sql);
		
		System.out.println(StringUtil.isNotSame("222222"));
	}
	
}
