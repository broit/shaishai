package com.wwtx.util;

import java.beans.PropertyEditorSupport;
import org.springframework.util.StringUtils;

public class SessionUserIdEditor extends PropertyEditorSupport{

	private String userid;
	
	public SessionUserIdEditor(String userid){
		this.userid = userid;
	}

	public void setAsText(String text) throws IllegalArgumentException {
		if(StringUtils.isEmpty(text)){//当用户ID为空时,设置ID为当前登录用户ID
			setValue(userid);
		}else{
			setValue(text);
		}
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}
}
