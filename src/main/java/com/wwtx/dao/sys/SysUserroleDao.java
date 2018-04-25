package com.wwtx.dao.sys;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.wwtx.mapper.SysUserroleMapper;
import com.wwtx.model.dto.SysUserroleDto;
import com.wwtx.model.dto.UserRoleListDto;


@Repository
public class SysUserroleDao {
	
	@Autowired
	private SysUserroleMapper userroleMapper;
	
	/**查询角色*/
	public List<SysUserroleDto> userRoleList(){
			List<SysUserroleDto> foList = userroleMapper.roleList();
		 return foList;
	}
	
	/**保存功能操作*/
	@Transactional(propagation=Propagation.REQUIRED,rollbackFor={Exception.class,RuntimeException.class})
	public void saveUserRole(UserRoleListDto ur){
		userroleMapper.deleteByUserId(ur.getUserId());
		if(ur.getList()!=null
				&&!ur.getList().isEmpty()){
			userroleMapper.batchInsertUserRole(ur.getList());
		}
	}
}
