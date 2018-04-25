package com.wwtx.util.sr.bean;

import java.util.ArrayList;

public class SRBean {
	public static final String SR_ROLE_FLAG_SADMIN = "1";	//角色标记（1:系统管理；）
	public static final String SR_ROLE_FLAG_ZADMIN = "2";	//角色标记（2:平台管理；）	
	public static final String SR_ROLE_FLAG_CENTER = "3";	//角色标记（3:店铺；）
	public static final String SR_ROLE_FLAG_USER = "4";		//角色标记（4:普通用户；）
	public static final String SR_ROLE_FLAG_COMMON = "9";	//角色标记（9:通用；）
	
	public static final String SR_ROLE_SADMIN = "SR_ROLE_SADMIN";	//角色标识（系统管理；）
	public static final String SR_ROLE_ZADMIN = "SR_ROLE_ZADMIN";	//角色标识（平台管理；）	
	public static final String SR_ROLE_CENTER = "SR_ROLE_CENTER";	//角色标识（报单中心；）
	public static final String SR_ROLE_USER = "SR_ROLE_USER";		//角色标识（普通用户；）
	
	public static final String SR_TYPE_NO = "0";		//安全加固方式（0:无效；）
	public static final String SR_TYPE_WECHAT = "1";	//安全加固方式（1:微信；）
	public static final String SR_TYPE_SMS = "2";		//安全加固方式（2:可sms加固；）
	public static final String SR_TYPE_KEY = "3";		//安全加固方式（3:可U盾加固；）
	public static final String SR_TYPE_KEYSMS = "8";	//安全加固方式（8:2、3均可；）
	public static final String SR_TYPE_ALL = "9";		//安全加固方式（9:均可）

	
	private String roleid;
	private String userid;
	
	private ArrayList<SROpt> opts;	//操作列表

	public String getRoleid() {
		return roleid;
	}

	public void setRoleid(String roleid) {
		this.roleid = roleid;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public ArrayList<SROpt> getOpts() {
		return opts;
	}

	public void setOpts(ArrayList<SROpt> opts) {
		this.opts = opts;
	}
}
