package com.wwtx.model.dto;

import java.math.BigDecimal;

import com.wwtx.model.SysUser;

public class SysUserDto  extends SysUser {
	
	private static final long serialVersionUID = 1L;

	private String userroleRoleid;
	 
	 private String roleUid;
		 
	 private String funcUid;
	 
	 private String rolefuncFuncid;
	 
	 private BigDecimal funcLevel;
	 
	 private String funcParent;
	 
	 private String funcIserial;
	 
	 private String userroleUserid;
	 
	 private String userroleUid;
	 
	 private Integer roleid;
	 
	 private Integer uid;

	public Integer getUid() {
		return uid;
	}

	public void setUid(Integer uid) {
		this.uid = uid;
	}

	public Integer getRoleid() {
		return roleid;
	}

	public void setRoleid(Integer roleid) {
		this.roleid = roleid;
	}

	public String getUserroleRoleid() {
		return userroleRoleid;
	}

	public void setUserroleRoleid(String userroleRoleid) {
		this.userroleRoleid = userroleRoleid;
	}

	public String getRoleUid() {
		return roleUid;
	}

	public void setRoleUid(String roleUid) {
		this.roleUid = roleUid;
	}

	public String getFuncUid() {
		return funcUid;
	}

	public void setFuncUid(String funcUid) {
		this.funcUid = funcUid;
	}

	public String getRolefuncFuncid() {
		return rolefuncFuncid;
	}

	public void setRolefuncFuncid(String rolefuncFuncid) {
		this.rolefuncFuncid = rolefuncFuncid;
	}

	public BigDecimal getFuncLevel() {
		return funcLevel;
	}

	public void setFuncLevel(BigDecimal funcLevel) {
		this.funcLevel = funcLevel;
	}

	public String getFuncParent() {
		return funcParent;
	}

	public void setFuncParent(String funcParent) {
		this.funcParent = funcParent;
	}

	public String getFuncIserial() {
		return funcIserial;
	}

	public void setFuncIserial(String funcIserial) {
		this.funcIserial = funcIserial;
	}

	public String getUserroleUserid() {
		return userroleUserid;
	}

	public void setUserroleUserid(String userroleUserid) {
		this.userroleUserid = userroleUserid;
	}

	public String getUserroleUid() {
		return userroleUid;
	}

	public void setUserroleUid(String userroleUid) {
		this.userroleUid = userroleUid;
	}

	
	 
}