package com.wwtx.controller.sys;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.wwtx.controller.BaseController;
import com.wwtx.dao.sys.SysOperDao;
import com.wwtx.model.SysOper;

@Controller
@Scope("prototype")
@RequestMapping(value="/oper")
public class OperController extends BaseController<SysOperDao, SysOper>{

}
