package com.wwtx.model;

import java.io.Serializable;

public class SysRoleOper implements Serializable,IBaseModel {
    private Integer roleoperUid;

    private Integer roleoperRoleid;

    private Integer roleoperOperid;

    



	public Integer getRoleoperUid() {
		return roleoperUid;
	}





	public void setRoleoperUid(Integer roleoperUid) {
		this.roleoperUid = roleoperUid;
	}





	public Integer getRoleoperRoleid() {
		return roleoperRoleid;
	}





	public void setRoleoperRoleid(Integer roleoperRoleid) {
		this.roleoperRoleid = roleoperRoleid;
	}





	public Integer getRoleoperOperid() {
		return roleoperOperid;
	}





	public void setRoleoperOperid(Integer roleoperOperid) {
		this.roleoperOperid = roleoperOperid;
	}





	@Override
	public Integer getId() {
		// TODO Auto-generated method stub
		return null;
	}
}