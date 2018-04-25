package com.wwtx.mapper;

import com.wwtx.model.WwtxArticle;

public interface WwtxArticleMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(WwtxArticle record);

    int insertSelective(WwtxArticle record);

    WwtxArticle selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(WwtxArticle record);

    int updateByPrimaryKey(WwtxArticle record);
}