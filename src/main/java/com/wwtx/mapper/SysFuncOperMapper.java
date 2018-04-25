package com.wwtx.mapper;

import com.wwtx.model.SysFuncOper;
import com.wwtx.model.dto.SysFuncOperDto;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface SysFuncOperMapper <E> extends IBaseMapper<SysFuncOperDto> {

	   /**查询功能操作列表*/
    List<SysFuncOperDto> funcOperList(@Param("funcUid") Integer funcUid);

    /**保存功能操作*/
    void batchInsertFuncOper(List<SysFuncOper> funcOperList);

    /**根据功能ID删除功能操作*/
    int deleteByFuncId(@Param("funcUid") Integer funcUid);
}