package com.wwtx.util.sr.bean;

public class SROpt {
	public static  String BM_LOGIN = "login";							//登录
	public static  String BM_USERINFO_UPDATE = "userinfo_update";      	//个人资料修改
	public static  String BM_USERINFO_PW = "userinfo_pw";      			//修改密码
	public static  String BM_TOPUP = "topup";      						//充值
	public static  String BM_CONVEY_INTEGRAL = "convey_integral";      	//积分自转
	public static  String BM_CONVEY_GOLD = "convey_gold";      			//金币互转
	public static  String BM_APP_TAKE = "app_take";      				//提现申请
	public static  String BM_PAY_EC = "pay_ec";      					//商城付款
	public static  String BM_INF_SHIP = "inf_ship";      				//发货通知
	public static  String BM_INF_BONUSLIST = "inf_bonuslist";      		//每天奖金明细
	public static  String BM_VERIFY_TOPUP = "verify_topup";      		//充值审核
	public static  String BM_VERIFY_TAKE = "verify_take";      			//提现审核
	public static  String BM_INF_USERACTIVE = "inf_useractive";      	//会员通用设置：用户激活通知
	public static  String BM_INF_REPORT = "inf_report";      			//会员通用设置：报单通知
	
	private String id;
	private String bm;
	private String mc;
	private String flag;
	private String type;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getBm() {
		return bm;
	}
	public void setBm(String bm) {
		this.bm = bm;
	}
	public String getMc() {
		return mc;
	}
	public void setMc(String mc) {
		this.mc = mc;
	}
	public String getFlag() {
		return flag;
	}
	public void setFlag(String flag) {
		this.flag = flag;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
}
