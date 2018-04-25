package com.wwtx.mapper;

import com.wwtx.model.SysRole;

public interface SysRoleMapper<E> extends IBaseMapper<SysRole> {
    /**
     * 根据角色名称计数
     * */
    int countByName(SysRole sysRole);
    
    SysRole roleUser(Integer id);
    
}
