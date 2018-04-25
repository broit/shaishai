package com.wwtx.model.dto;

import com.wwtx.model.SysRole;

public class SysRoleDto extends SysRole {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Integer funcUid;
	
	private String funcName;
	
	private Integer funcParent;
	
	private String funcLevel;
	
	private String funcUrl;
	
	private String funcImg;
	
	private String funcType;
	
	private String funcIserial;
	
	private String funcRemark;
	
	private String rolefuncFuncid;
	
	private String rolefuncRoleid;
	
	private String operName;
	
	private String roleoperOperid;
	
	private String operCode;
	
	private String operFunc;

	

	public Integer getFuncUid() {
		return funcUid;
	}

	public void setFuncUid(Integer funcUid) {
		this.funcUid = funcUid;
	}

	public String getFuncName() {
		return funcName;
	}

	public void setFuncName(String funcName) {
		this.funcName = funcName;
	}



	public Integer getFuncParent() {
		return funcParent;
	}

	public void setFuncParent(Integer funcParent) {
		this.funcParent = funcParent;
	}

	public String getFuncLevel() {
		return funcLevel;
	}

	public void setFuncLevel(String funcLevel) {
		this.funcLevel = funcLevel;
	}

	public String getFuncUrl() {
		return funcUrl;
	}

	public void setFuncUrl(String funcUrl) {
		this.funcUrl = funcUrl;
	}

	public String getFuncImg() {
		return funcImg;
	}

	public void setFuncImg(String funcImg) {
		this.funcImg = funcImg;
	}

	public String getFuncType() {
		return funcType;
	}

	public void setFuncType(String funcType) {
		this.funcType = funcType;
	}

	public String getFuncIserial() {
		return funcIserial;
	}

	public void setFuncIserial(String funcIserial) {
		this.funcIserial = funcIserial;
	}

	public String getFuncRemark() {
		return funcRemark;
	}

	public void setFuncRemark(String funcRemark) {
		this.funcRemark = funcRemark;
	}

	public String getRolefuncFuncid() {
		return rolefuncFuncid;
	}

	public void setRolefuncFuncid(String rolefuncFuncid) {
		this.rolefuncFuncid = rolefuncFuncid;
	}

	public String getRolefuncRoleid() {
		return rolefuncRoleid;
	}

	public void setRolefuncRoleid(String rolefuncRoleid) {
		this.rolefuncRoleid = rolefuncRoleid;
	}

	public String getOperName() {
		return operName;
	}

	public void setOperName(String operName) {
		this.operName = operName;
	}

	public String getRoleoperOperid() {
		return roleoperOperid;
	}

	public void setRoleoperOperid(String roleoperOperid) {
		this.roleoperOperid = roleoperOperid;
	}

	public String getOperCode() {
		return operCode;
	}

	public void setOperCode(String operCode) {
		this.operCode = operCode;
	}

	public String getOperFunc() {
		return operFunc;
	}

	public void setOperFunc(String operFunc) {
		this.operFunc = operFunc;
	}
}