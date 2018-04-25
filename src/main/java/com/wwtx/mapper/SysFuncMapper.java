package com.wwtx.mapper;


import com.wwtx.model.SysFunc;
import com.wwtx.model.dto.SysFuncDto;

import java.util.List;

public interface SysFuncMapper<E> extends IBaseMapper<SysFuncDto> {
    
    /**查询表单数据*/
	SysFuncDto loadForm(Integer id);
    
    /**
     * 父功能列表
     * */
    List<SysFunc> parentList(Integer id);
    
    /**
     * 根据编码计数
     * */
    int countByCode(SysFunc entity);
}