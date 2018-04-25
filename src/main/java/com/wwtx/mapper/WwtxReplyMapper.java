package com.wwtx.mapper;

import com.wwtx.model.WwtxReply;

public interface WwtxReplyMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(WwtxReply record);

    int insertSelective(WwtxReply record);

    WwtxReply selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(WwtxReply record);

    int updateByPrimaryKey(WwtxReply record);
}