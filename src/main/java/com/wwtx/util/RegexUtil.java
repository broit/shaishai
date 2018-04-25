package com.wwtx.util;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


/**
 * 正则表达式 的工具
 * @author ff
 *
 */
public class RegexUtil {

	/**
	 * 待后缀的判断
	 * 判断字符串是否符合这个正则表达式
	 * @param str		查询的字符串
	 * @param regex		表达式
	 * @param flags		参数
	 * @return
	 */
	public static boolean test_flags(String text,String regex,int flags){
		Matcher m =  Pattern.compile(regex,flags).matcher(StringUtil.filterNull_String(text));
		//如果找寻到了 这个表达式
		if(m.find()){
//			String str = m.group();
//			System.out.println(str);
			return true;
		}
		return false;
	}
	
	/**
	 * 根据正则表达式 匹配出需要的内容(返回第一个匹配的结果，一般用于匹配单一结果)
	 * @param text		待匹配的字符串
	 * @param regex		正则
	 * @return
	 */
	public static String matchingFirst(String text,String regex){
		
		return matchingGroup(text,regex,0);
	}
	
	/**
	 * 找出符合条件的 所有的值
	 * @param text
	 * @param regex
	 * @return
	 */
	public static String[] matchingAll(String text,String regex){
//		Pattern p = Pattern.compile(regex);
//		Matcher m = p.matcher(text);
//		
//		List<String> list = new ArrayList<String>();
//		while(m.find()){	
//			list.add( m.group(0));
//		}
//		
//		if(list!=null){
//			String[] array = new String[list.size()];
//			for(int i=0;i<list.size();i++){
//				array[i] = list.get(i);
//			}
//			return array;
//		}
		
		return matchingAll(text,0,regex);
	}
	
	/**
	 * 找出符合条件的 所有的值
	 * @param text
	 * @param regex
	 * @return
	 */
	public static String[] matchingAll(String text,int group,String regex){
		Pattern p = Pattern.compile(regex);
		Matcher m = p.matcher(text);
		
		List<String> list = new ArrayList<String>();
		while(m.find()){	
			list.add( m.group(group));
		}
		
		if(list!=null){
			String[] array = new String[list.size()];
			for(int i=0;i<list.size();i++){
				array[i] = list.get(i);
			}
			return array;
		}
		
		return null;
	}
	
	
	/**
	 * 根据分组的信息，返回符合的字符串
	 * @param text
	 * @param regex
	 * @param index
	 * @return
	 */
	public static String matchingGroup(String text,String regex,int index){
		if(!StringUtil.isEmpty(text)){
			Pattern p = Pattern.compile(regex);
			Matcher m = p.matcher(text);
	
			while(m.find()){	
				String matchText = m.group(index);
				return matchText;
			}
		}
		return "";
	}
	
	
	
	public static void main(String[] args){
		String text = "789798798sdd1232112321啊说的23123123 1321321333"; //"{Z1:0.17,Z2:0.32,Z3:6.65,Tz1:0,Tz2:0,Tz3:0}";
		String reg = "\\d{5,20}";//"Z1:([^,]+),";
		
		String[] aa = RegexUtil.matchingAll(text,0, reg);
		
		System.out.println();
	}
}
