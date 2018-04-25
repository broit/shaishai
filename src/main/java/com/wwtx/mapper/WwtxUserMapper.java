package com.wwtx.mapper;

import com.wwtx.model.WwtxUser;

public interface WwtxUserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(WwtxUser record);

    int insertSelective(WwtxUser record);

    WwtxUser selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(WwtxUser record);

    int updateByPrimaryKey(WwtxUser record);
}