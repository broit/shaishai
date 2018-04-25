package com.wwtx.model;

import java.io.Serializable;

public class SysRolefunc implements Serializable,IBaseModel {
    private Integer id;

    private Integer rolefuncRoleid;

    private Integer rolefuncFuncid;
    
	private static final long serialVersionUID = 1L;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getRolefuncRoleid() {
		return rolefuncRoleid;
	}

	public void setRolefuncRoleid(Integer rolefuncRoleid) {
		this.rolefuncRoleid = rolefuncRoleid;
	}

	public Integer getRolefuncFuncid() {
		return rolefuncFuncid;
	}

	public void setRolefuncFuncid(Integer rolefuncFuncid) {
		this.rolefuncFuncid = rolefuncFuncid;
	}

   
}