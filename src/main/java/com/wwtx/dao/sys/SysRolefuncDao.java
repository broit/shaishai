package com.wwtx.dao.sys;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.wwtx.bean.FormResultBean;
import com.wwtx.bean.TreeNodeBean;
import com.wwtx.mapper.SysRolefuncMapper;
import com.wwtx.model.dto.RoleFuncOperListDto;
import com.wwtx.model.dto.SysRolefuncDto;
import org.springframework.transaction.annotation.Transactional;


@Repository
public class SysRolefuncDao {
	
	@Autowired
	private SysRolefuncMapper roleMapper;
	
	@Resource
	private SysRoleOperDao roleOperDao;
	
	
	/**查询角色功能*/
	public FormResultBean<List<TreeNodeBean>> roleFuncList(Integer roleUid){
		FormResultBean<List<TreeNodeBean>> result = new FormResultBean<List<TreeNodeBean>>();
		try{
			List<SysRolefuncDto> list = roleMapper.roleFuncList(roleUid);
			TreeNodeBean root = new TreeNodeBean();
			root.setText("根节点");
			Map<String,TreeNodeBean> treeMap = new HashMap<String,TreeNodeBean>();
			treeMap.put("root", root);
			//构建功能树
			for(SysRolefuncDto rf : list){
				String parent = rf.getFuncParent();
				TreeNodeBean parentNode = treeMap.get(parent);
				TreeNodeBean node = new TreeNodeBean();
				node.setText(rf.getFuncName());
				node.setValue(rf.getFuncUid().toString());
				node.setChecked(rf.getRolefuncFuncid()!=null);
				node.setIconCls("no-icon");
				node.setType(rf.getFuncType());
				parentNode.addChildren(node);
				treeMap.put(rf.getFuncUid().toString(), node);
			}
			result.setData(root.getChildren());
			result.setSuccess(true);
		}catch(Exception e){
			result.setErrorMessage(e.getMessage());
		}
		return result;
	}
	
	@Transactional
	public void saveRoleFuncOper(RoleFuncOperListDto rfo){
		roleMapper.deleteByRoleId(rfo.getRoleUid());
		if(rfo.getRfList()!=null
				&&!rfo.getRfList().isEmpty()){
			roleMapper.batchInsertRoleFunc(rfo.getRfList());
		}
		roleOperDao.saveFuncOper(rfo);
	}
	
	
	
}
