package com.wwtx.model;

import java.io.Serializable;

public class SysUserrole implements Serializable,IBaseModel {
    private Integer id;

    private Integer userroleUserid;

    private Integer userroleRoleid;


	private static final long serialVersionUID = 1L;

	@Override
	public Integer getId() {
		// TODO Auto-generated method stub
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public Integer getUserroleUserid() {
		return userroleUserid;
	}


	public void setUserroleUserid(Integer userroleUserid) {
		this.userroleUserid = userroleUserid;
	}


	public Integer getUserroleRoleid() {
		return userroleRoleid;
	}


	public void setUserroleRoleid(Integer userroleRoleid) {
		this.userroleRoleid = userroleRoleid;
	}

   

}