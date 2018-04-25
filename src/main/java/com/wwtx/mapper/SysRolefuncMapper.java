package com.wwtx.mapper;

import java.util.List;

import com.wwtx.model.SysRolefunc;
import com.wwtx.model.dto.SysRolefuncDto;
import org.apache.ibatis.annotations.Param;


public interface SysRolefuncMapper {
    int deleteByPrimaryKey(@Param("rolefuncUid") Integer rolefuncUid);

    int insert(SysRolefunc record);

    int insertSelective(SysRolefunc record);

    SysRolefunc selectByPrimaryKey(@Param("rolefuncUid") Integer rolefuncUid);

    int updateByPrimaryKeySelective(SysRolefunc record);

    int updateByPrimaryKey(SysRolefunc record);
    
    /**角色功能列表*/
    List<SysRolefuncDto> roleFuncList(@Param("roleUid") Integer roleUid);
    
    /**
     * 删除角色功能
     * */
    int deleteByRoleId(@Param("rolefuncRoleid") Integer rolefuncRoleid);
    
    /**
     * 角色功能-批量插入
     * */
    void batchInsertRoleFunc(List<SysRolefunc> roleFuncList);
  
}