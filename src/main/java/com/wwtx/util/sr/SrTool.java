package com.wwtx.util.sr;

import java.security.MessageDigest;
import java.text.DecimalFormat;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.math.RandomUtils;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Component;

@Component
public class SrTool {
	Logger log = Logger.getLogger(this.getClass());
	
	public static final String LOGIC_YES = "1";
	public static final String LOGIC_NO = "0";
	
	public static final String SMS_RESPCODE_SUCCESS = "000000";
	
	//验证码--登录（session中key）
	public static final String SR_SECURITY_CODE_LOGIN = "pr_security_code_login";
	//加固方式--登录（session中key）
	public static final String SR_OPT_LOGIN = "pr_opt_login";
	//短信模板编码--登录（session中key）
	public static final String SR_SMS_TMPCODE_LOGIN = "12675";
	
	public static final String SR_SECURITY_CODE_PRE = "pr_security_code_";				//安全吗通用前缀
	public static final String SR_SECURITY_CODE_SMS_PRE = "pr_security_code_sms_";		//短信吗通用前缀
	
	/**
	 * 生成4位验证码
	 * @return
	 */
	public String generateSecurityCode(){
		String securityCode = StringUtils.EMPTY;
		
		String STR_FORMAT = "0000";
		DecimalFormat df = new DecimalFormat(STR_FORMAT);
		int random = RandomUtils.nextInt(9999);
		securityCode = df.format(random);
		
		return securityCode;
	}
	
	/**
	 * U盾授权码验证
	 * @param name
	 * @param sqm
	 * @param seed_server
	 * @param seed_client
	 * @return
	 */
	public void validateDigest_key(String aqm_server,String digest_client)throws Exception{
		
		//进行SHA1运算 
		String seed = "FFFFFFFFFFFFFFFFFFFFFFFFFFFbroit";
		char[] HEXCHAR = { '0', '1', '2', '3', '4', '5', '6', '7', 
				'8', '9', 'a', 'b', 'c', 'd', 'e', 'f' };
		String msgtoDigest = aqm_server+seed; 
		MessageDigest md = MessageDigest.getInstance("SHA1"); 
		byte[] digest = md.digest(msgtoDigest.getBytes()); 
		StringBuilder sb = new StringBuilder(digest.length * 2); 
		for (int i = 0; i < digest.length; i++) { 
			sb.append(HEXCHAR[(digest[i] & 0xf0) >>> 4]); 
			sb.append(HEXCHAR[digest[i] & 0x0f]); 
		} 
		String digest_server = sb.toString();
		
//		log.info("digest_server:"+digest_server+",digest_client:"+digest_client);
		if(!digest_client.equals(digest_server)){
			throw new Exception("登录失败！U盾摘要验证失败！");
		}
	}
	
	/**
	 * 短信发送--登录
	 * @param phone
	 * @param param
	 * @return
	 */
//	public boolean sendSMS_login(String phone,String param)throws Exception{
//		return sendSMS(phone,SR_SMS_TMPCODE_LOGIN,param);
//	}
	
//	public boolean sendSMS(String phone,String templCode,String param)throws Exception{
//		boolean success = false;
//		
//		if(StringUtils.isNotEmpty(phone)){
//			String respCode = sms.sendTemplateSMS_json(templCode,phone,param);
//			if(SMS_RESPCODE_SUCCESS.equals(respCode))
//				success = true;
//			else{
//				throw new Exception("短信发送失败！错误码："+respCode);
//			}
//		}else{
//			throw new Exception("短信发送失败！短信发送号码为空！");
//		}
//		
//		
//		return success;
//	}
}
