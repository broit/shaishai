package com.wwtx.dao.sys;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.wwtx.dao.AbstractCurdDao;
import com.wwtx.mapper.SysRoleOperMapper;
import com.wwtx.model.SysRoleOper;
import com.wwtx.model.dto.RoleFuncOperListDto;

@Repository
public class SysRoleOperDao extends AbstractCurdDao<SysRoleOperMapper<SysRoleOper>,SysRoleOper>{
	
	@Autowired
	private SysRoleOperMapper roleoperMapper;

	public void saveFuncOper(RoleFuncOperListDto rfo){
		roleoperMapper.deleteByRoleId(rfo.getRoleUid());
		if(rfo.getRoList()!=null
				&&!rfo.getRoList().isEmpty()){
			roleoperMapper.batchInsertRoleOper(rfo.getRoList());
		}
	}

	
}
