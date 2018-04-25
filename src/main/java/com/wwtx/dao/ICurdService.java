package com.wwtx.dao;

import com.wwtx.bean.PageBean;
import com.wwtx.model.IBaseModel;

/**基础增删改查DAO接口*/
public interface ICurdService<E extends IBaseModel> {

	/**列表方法*/
	PageBean<E> listPage(PageBean<E> page);
	
	/**保存方法
	 * @throws Exception */
	void saveOrUpdate(E entity) throws Exception;
	
	/**根据主键查询*/
	E selectByPrimaryKey(Integer id);
	
	/**删除方法*/
	void deleteByPrimaryKey(Integer id);
}
