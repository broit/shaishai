package com.wwtx.dao.sys;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.wwtx.dao.AbstractCurdDao;
import com.wwtx.mapper.SysRoleMapper;
import com.wwtx.mapper.SysRolefuncMapper;
import com.wwtx.mapper.SysUserroleMapper;
import com.wwtx.model.SysRole;

@Repository
public class SysRoleDao extends
		AbstractCurdDao<SysRoleMapper<SysRole>, SysRole> {

	@Autowired
	private SysRolefuncMapper rolefuncMapper;

	@Autowired
	private SysUserroleMapper userroleMapper;

	Log log = LogFactory.getLog(this.getClass());

	@Override
	protected String validateSave(SysRole role) {
		if (this.getMapper().countByName(role) > 0) {
			return "角色名称重复";
		}
		return null;
	}

	protected void saveMethod(SysRole record) {
		if (record.getId() == null) {
			this.getMapper().insert(record);

		} else {
			this.getMapper().updateByPrimaryKey(record);
		}
	}

	/**
	 * 根据用户ID 关联查训用户角色ID
	 * 
	 * @param id
	 * @return
	 */
	public SysRole roleUser(Integer id) {
		SysRole roleUser = this.getMapper().roleUser(id);
		return roleUser;

	}

	@Override
	protected void deleteMethod(Integer id) {
		this.getMapper().deleteByPrimaryKey(id);

		// 删除关联记录

		rolefuncMapper.deleteByRoleId(id);

		userroleMapper.deleteByRoleId(id);

	}
}
