package com.wwtx.util;

import java.security.MessageDigest;

public class MD5 {
	/**
	 * 
	 *
	 */
	private MD5() {
	}

	public final static String randomMd5(){
		String text = UUIDGenerator.generate()+"|"+DateUtil.getDate();
		return MD5.encoding(text);
	}
	
	
	/**
	 * 加密算法MD5
	 * 
	 * @param text 明文
	 * @return String 密文
	 * 
	 * 此方法经过修改，如果用户传入的是 空或null 那么就返回空
	 */
	public final static String encoding(String text) {
		//自己的加入的
		if(text==null||text.equals("")){
			return "";
		}
		
		char hexDigits[] = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
				'a', 'b', 'c', 'd', 'e', 'f' };
		String encodingStr = null;

		try {
			byte[] strTemp = text.getBytes();
			MessageDigest mdTemp = MessageDigest.getInstance("MD5");
			mdTemp.update(strTemp);
			byte[] md = mdTemp.digest();
			int j = md.length;
			char str[] = new char[j * 2];
			int k = 0;
			for (int i = 0; i < j; i++) {
				byte byte0 = md[i];
				str[k++] = hexDigits[byte0 >>> 4 & 0xf];
				str[k++] = hexDigits[byte0 & 0xf];
			}

			encodingStr = new String(str);
		} catch (Exception e) {
		}

		return encodingStr;
	}

	public static void main(String[] areg) {
//		String a = MD5.encoding("tangyifei558888");
//		String b = MD5.encoding("111111");
//		System.out.println("A:" + a);
//		System.out.println("111111:" + b);

//		MD5 mm = new MD5();
//		System.out.println("A:" + mm.getMD5ofStr(""));

		//	   long i1 = new Date().getTime();
		//	   for(int n=0;n<100000;n++){
		//		   MD5Encoding.encoding("admin");
		//	   }
		//	   long i2=new Date().getTime();
		//	   for(int n=0;n<100000;n++){
		//		   new MD5().getMD5ofStr("admin");
		//	   }
		//	   long i3=new Date().getTime();
		//	   
		//	   System.out.println((i2-i1)+":"+(i3-i2));
			String expressNo = "HW3681114567890123451";
			expressNo = expressNo.substring(0, 5)+"_"+expressNo.substring(5, 8)+"_"+expressNo.substring(8, 21);
			System.out.println("expressNo::::::"+expressNo);
		
	}

}
