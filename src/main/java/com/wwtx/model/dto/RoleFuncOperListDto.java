package com.wwtx.model.dto;

import java.util.List;

import com.wwtx.model.SysRoleOper;
import com.wwtx.model.SysRolefunc;

public class RoleFuncOperListDto {

	private Integer roleUid;
	
	private List<SysRolefunc> rfList;
	
	private List<SysRoleOper> roList;

	public Integer getRoleUid() {
		return roleUid;
	}

	public void setRoleUid(Integer roleUid) {
		this.roleUid = roleUid;
	}

	public List<SysRolefunc> getRfList() {
		return rfList;
	}

	public void setRfList(List<SysRolefunc> rfList) {
		this.rfList = rfList;
	}

	public List<SysRoleOper> getRoList() {
		return roList;
	}

	public void setRoList(List<SysRoleOper> roList) {
		this.roList = roList;
	}

	
}
