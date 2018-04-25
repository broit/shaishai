package com.wwtx.util.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)

public @interface AnnMS {
	/*
	 * 不登录是否允许
	 */
	boolean NL() default false;
	
	/*
	 * 平台是否允许 -- 默认允许
	 */
	boolean P() default true;
	
	/*
	 * 商城是否允许  -- 默认允许
	 */
	boolean M() default true;
	
	/*
	 * 仓库是否允许  -- 默认允许
	 */
	boolean S() default true;
}
