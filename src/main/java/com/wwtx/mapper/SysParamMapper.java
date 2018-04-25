package com.wwtx.mapper;

import com.wwtx.model.SysParam;

import java.util.List;

public interface SysParamMapper<E> extends IBaseMapper<SysParam>{
    /**
     * 根据编码计数
     * */
    int countByCode(E entity);
    /**
     * 根据名称计数
     * */
    int countByName(E entity);
    
    /**根据类型查询字典*/
    List<E> selectByType(E entity);
}