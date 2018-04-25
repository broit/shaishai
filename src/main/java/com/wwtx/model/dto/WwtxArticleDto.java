package com.wwtx.model.dto;

import com.wwtx.model.WwtxArticle;
import com.wwtx.model.WwtxArticleImg;
import com.wwtx.model.WwtxReply;

import java.util.Date;
import java.util.List;

public class WwtxArticleDto extends WwtxArticle {

    private List<WwtxArticleImg> imgList;

    private List<WwtxReply> replyList;

}