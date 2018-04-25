package com.wwtx.bean;


import com.wwtx.model.dto.SysUserroleDto;

import java.util.List;

public class LoginUserBean{

	private Integer userId;

	private String userName;

	private String  job;

	private String code;//登录名

	private AuthBean auth;

	public AuthBean getAuth() {
		return auth;
	}

	public void setAuth(AuthBean auth) {
		this.auth = auth;
	}

	private List<SysUserroleDto> role_uid;//角色ID

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public List<SysUserroleDto> getRole_uid() {
		return role_uid;
	}

	public void setRole_uid(List<SysUserroleDto> role_uid) {
		this.role_uid = role_uid;
	}
}
