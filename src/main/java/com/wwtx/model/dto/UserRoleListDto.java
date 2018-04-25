package com.wwtx.model.dto;

import java.util.List;

import com.wwtx.model.SysUserrole;

public class UserRoleListDto {

	private Integer userId;
	
	private List<SysUserrole> list;

	
	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public List<SysUserrole> getList() {
		return list;
	}

	public void setList(List<SysUserrole> list) {
		this.list = list;
	}
}
