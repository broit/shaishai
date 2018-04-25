package com.wwtx.mapper;


import com.wwtx.model.SysOper;

public interface SysOperMapper<E> extends IBaseMapper<SysOper>{
    int countByCode(E entity);
}