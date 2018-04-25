package com.wwtx.mapper;

import com.wwtx.model.WwtxArcicle;

public interface WwtxArcicleMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(WwtxArcicle record);

    int insertSelective(WwtxArcicle record);

    WwtxArcicle selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(WwtxArcicle record);

    int updateByPrimaryKey(WwtxArcicle record);
}