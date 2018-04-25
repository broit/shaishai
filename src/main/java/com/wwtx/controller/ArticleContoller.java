package com.wwtx.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping(value="/article")
public class ArticleContoller {

    /**
     *查询所有文章列表
     *
     * @return
     * @throws
     */
    @RequestMapping(value="/list.action",method= RequestMethod.GET)
    @ResponseBody
    public Map<String,Object> createWeixinSDK(HttpServletRequest request)  {
        Map<String,Object> resultMap=new HashMap<>();


        return resultMap;
    }

}
