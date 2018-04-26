package com.wwtx.model.dto;

import com.wwtx.model.WwtxArticle;
import com.wwtx.model.WwtxArticleImg;
import com.wwtx.model.WwtxReply;

import java.util.Date;
import java.util.List;

public class WwtxArticleDto extends WwtxArticle {

    private String timg;

    private List<WwtxArticleImg> imgList;

    private List<WwtxReply> replyList;

    public String getTimg() {
        return timg;
    }

    public void setTimg(String timg) {
        this.timg = timg;
    }

    public List<WwtxArticleImg> getImgList() {
        return imgList;
    }

    public void setImgList(List<WwtxArticleImg> imgList) {
        this.imgList = imgList;
    }

    public List<WwtxReply> getReplyList() {
        return replyList;
    }

    public void setReplyList(List<WwtxReply> replyList) {
        this.replyList = replyList;
    }
}