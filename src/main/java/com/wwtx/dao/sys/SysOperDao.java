package com.wwtx.dao.sys;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;

import com.wwtx.dao.AbstractCurdDao;
import com.wwtx.mapper.SysOperMapper;
import com.wwtx.model.SysOper;

@Repository
public class SysOperDao extends AbstractCurdDao<SysOperMapper<SysOper>,SysOper>{
	
	Log log = LogFactory.getLog(SysOperDao.class);
	
	@Override
	protected String validateSave(SysOper entity){
		if(this.getMapper().countByCode(entity)>0){
			return "鎿嶄綔缂栫爜閲嶅";
		}
		return null;
	}
	
}
