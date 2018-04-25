package com.wwtx.model.dto;


import com.wwtx.model.SysUserrole;

public class SysUserroleDto  extends SysUserrole {

	private static final long serialVersionUID = 1L;

    
    private Integer roleUid;
    
    private String roleName;


	public String getRoleName() {
		return roleName;
	}


	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}


	public Integer getRoleUid() {
		return roleUid;
	}


	public void setRoleUid(Integer roleUid) {
		this.roleUid = roleUid;
	}


	

}