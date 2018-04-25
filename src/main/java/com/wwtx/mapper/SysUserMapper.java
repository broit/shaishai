package com.wwtx.mapper;

import java.util.List;

import com.wwtx.model.SysUser;
import com.wwtx.model.dto.SysRolefuncDto;
import com.wwtx.model.dto.SysUserDto;
import org.apache.ibatis.annotations.Param;

public interface SysUserMapper extends IBaseMapper<SysUserDto>{

    int validateUserCode(SysUser bean);//用户登录名不能重复添加验证
     
    Integer isSysManager(@Param("id") Integer id);//查询是不是系统管理员

    /**查询角色的所有功能操作*/
    List<SysRolefuncDto> selectFuncOper(List<String> roleIdList);

    /**加载表单数据*/
    SysUser loadForm(@Param("id") Integer id);
    
    /**启用或者禁用用户*/
    void beOrdisAble(SysUser user);
    
   
    
    /**按照用户名查询密码*/
    SysUser userPassword(@Param("code") String code);
    
    /**修改密码*/
    int modify(@Param("id") Integer id, @Param("password") String genPass);
}