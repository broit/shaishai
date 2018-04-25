package com.wwtx.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import com.wwtx.model.SysRoleOper;

public interface SysRoleOperMapper<E> extends IBaseMapper<SysRoleOper> {

    void batchInsertRoleOper(List<SysRoleOper> roleOperList);
    
    int deleteByRoleId(@Param("roleoperRoleid") Integer roleoperRoleid);
}