package com.wwtx.dao.sys;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;

import com.wwtx.bean.PageBean;
import com.wwtx.dao.AbstractCurdDao;
import com.wwtx.mapper.SysFuncMapper;
import com.wwtx.model.SysFunc;
import com.wwtx.model.dto.SysFuncDto;


@Repository
public class SysFuncDao extends AbstractCurdDao<SysFuncMapper<SysFuncDto>,SysFuncDto>{
	   
	Log log = LogFactory.getLog(this.getClass());
	
	/**
	 * 查询所属功能
	 * */
	public PageBean<SysFunc> parentList(PageBean<SysFunc> page) {
		List<SysFunc> list = this.getMapper().parentList(page.getParam().getId());
		SysFunc root = new SysFunc();
		root.setFuncName("根节点");
		root.setId(0);
		list.add(0, root);
		page.setRows(list);
		page.setCount(list.size());
		return page;
	}

	@Override
	public SysFuncDto selectByPrimaryKey(Integer id) {
		SysFuncDto func = this.getMapper().loadForm(id);
		SysFuncDto root = new SysFuncDto();
		root.setFuncName("根节点");
		root.setId(0);
		func.getOtherFuncs().add(0, root);
		return func;
	}
	
	/**唯一验证*/
	@Override
	protected String validateSave(SysFuncDto entity){
		if(this.getMapper().countByCode(entity)>0){
			return "功能编码重复";
		}
		return null;
	}
}
