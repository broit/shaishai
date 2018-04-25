package com.wwtx.mapper;

import com.wwtx.model.WwtxArticleImg;

public interface WwtxArticleImgMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(WwtxArticleImg record);

    int insertSelective(WwtxArticleImg record);

    WwtxArticleImg selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(WwtxArticleImg record);

    int updateByPrimaryKey(WwtxArticleImg record);
}