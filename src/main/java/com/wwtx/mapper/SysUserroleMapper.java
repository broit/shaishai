package com.wwtx.mapper;

import com.wwtx.model.SysUserrole;
import com.wwtx.model.dto.SysUserDto;
import com.wwtx.model.dto.SysUserroleDto;

import java.util.List;

public interface SysUserroleMapper {
    
	/**查询用户角色列表*/
    List<SysUserroleDto> userRoleList(Integer id);
    
    List<SysUserroleDto> roleList();
    
    /**保存用户角色*/
    void batchInsertUserRole(List<SysUserrole> userRoleList);
    
    /**根据用户ID删除用户角色*/
    int deleteByUserId(Integer id);
    
    /**根据角色ID删除用户角色*/
    int deleteByRoleId(Integer id);
    
    /**查询用户角色*/
    List<String> queryUserRole(Integer id);
    
    int insertUserRole(SysUserDto dto);
    
    int updateUserRole(SysUserDto dto);
    
    SysUserrole role(Integer id);
}