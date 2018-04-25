package com.wwtx.controller;


import com.foxinmy.weixin4j.exception.WeixinException;
import com.foxinmy.weixin4j.jssdk.JSSDKAPI;
import com.foxinmy.weixin4j.jssdk.JSSDKConfigurator;
import com.foxinmy.weixin4j.mp.WeixinProxy;
import com.foxinmy.weixin4j.mp.api.OauthApi;
import com.foxinmy.weixin4j.mp.model.OauthToken;
import com.foxinmy.weixin4j.mp.model.User;
import com.foxinmy.weixin4j.type.TicketType;
import com.foxinmy.weixin4j.util.StringUtil;
import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;
import java.util.*;

@Controller
@RequestMapping(value="/auth")
public class AuthController {

	Logger log = Logger.getLogger(this.getClass());

	String url="http://ss.wwtx.cn";
	@Autowired
	private WeixinProxy weixinProxy;


    private static final List<String> openidlist = new ArrayList();
	/**
	 * 授权
	 */
	 @RequestMapping(value="/sendToPage.action",method= RequestMethod.GET)
	public String sendToPage(HttpServletRequest request,String refurl){
	 	if(refurl==null){
			refurl = "/index.html";
		}

		String redirectUri = url+"/auth/authToPage.action?refurl="+refurl;
		 OauthApi auth = weixinProxy.getOauthApi();
		 String url=auth.getUserAuthorizationURL(redirectUri, "state", "snsapi_base");
		
		 return "redirect:"+url;
	}
	 
	 /**
	  * 授权后进入到页面
	  * @param code
	  * @return
	  */
	 @RequestMapping(value="/authToPage.action",method= RequestMethod.GET)
	 public void  authToPage(HttpServletResponse response, String code,String refurl){
			 try {
			 OauthApi auth = weixinProxy.getOauthApi();
			 OauthToken token = auth.getAuthorizationToken(code);
			 if(token!=null) {    //完成授权
				 String openid = token.getOpenId();

			 }
			 response.setContentType("text/html");
			 response.setCharacterEncoding("UTF-8");
			 PrintWriter writer = response.getWriter();
			 if(refurl.contains("?")){
				 refurl+="&t="+Math.random();
			 }else{
			 	refurl+="?t="+Math.random();
			 }
			 String html = "<html>"
					 	  +"<script>"
						  +" window.location.href='"+refurl+"';"
						  +"</script>"
						  +"</html>";
		 log.info(html);
			 writer.write(html);
			}catch (com.foxinmy.weixin4j.exception.WeixinException e){
		 		if("40029".equals(e.getErrorCode())){
		 			log.warn("重复的授权回调");
				}else{
		 			e.printStackTrace();
		 			log.error(e);
				}
		 	}catch (Exception e) {
				e.printStackTrace();
				log.error(e);
			}
	 }

	/**
	 *获取微信SDK配置
	 *
	 * @return
	 * @throws WeixinException
	 */
	@RequestMapping(value="/createWeixinSDK.action",method= RequestMethod.GET)
	@ResponseBody
	public Map<String,Object> createWeixinSDK(HttpServletRequest request) throws WeixinException {
		Map<String,Object> resultMap=new HashMap<>();
		JSSDKConfigurator jSSDKConfigurator=new JSSDKConfigurator(weixinProxy.getTicketManager(TicketType.jsapi));
		jSSDKConfigurator.apis(JSSDKAPI.SHARE_APIS, JSSDKAPI.UI_APIS, JSSDKAPI.PAY_APIS);
		//jssdk.apis(JSSDKAPI.MP_ALL_APIS); // 或者使用全部功能
		//jssdk.debugMode(); //打开调试模式
		String obj = jSSDKConfigurator.toJSONConfig(getFullLoction(request)); // 生成json串

	//	String obj = jSSDKConfigurator.toJSONConfig(url); // 生成json串
		resultMap.put("success", true);
		resultMap.put("data", obj);
		resultMap.put("domain", this.url);
		resultMap.put("shorturl", weixinProxy.getShorturl(url));

		return resultMap;
	}


	/**
	 * 测试

	 * @return
	 */
	@RequestMapping(value="/test.action",method= RequestMethod.GET)
	public void  test(HttpServletResponse responsel){
		try {

				String openid = "okY_7s8efZxf2TuIolylYo93BsvE";


		}catch (Exception e) {
			e.printStackTrace();
			log.error(e);
		}
	}

	protected String getRootLocation(HttpServletRequest request) {
		int port = request.getServerPort();
		if (port == 80) {
			return String.format("%s://%s", request.getScheme(),
					request.getServerName());
		} else {
			return String.format("%s://%s:%s", request.getScheme(),
					request.getServerName(), port);
		}
	}

	protected String getFullLoction(HttpServletRequest request) {
		String root = getRootLocation(request);
		String queryString = request.getQueryString();
		return String.format("%s%s%s", root, request.getRequestURI(),
				StringUtil.isNotBlank(queryString) ? "?" + queryString : "");
	}

}
