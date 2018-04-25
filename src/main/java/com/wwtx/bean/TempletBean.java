package com.wwtx.bean;

import java.util.HashMap;
import java.util.Map;

public class TempletBean {
    public static final String TEMPLET_TYPE_DOC = "doc";
    public static final String TEMPLET_TYPE_XLS = "xls";

    private String sourceFileName;
    private String sourceBasePath;
    private String sourceFileFullName;

    private String targetFileName;
        private String targetBasePath;
    private String targetFileFullName;

    private Map<String,Object> replacements = new HashMap<String,Object>();
    private String templetType;
    private String templetSubType;

    public String getSourceFileName() {
        return sourceFileName;
    }

    public void setSourceFileName(String sourceFileName) {
        this.sourceFileName = sourceFileName;
    }

    public String getSourceBasePath() {
        return sourceBasePath;
    }

    public void setSourceBasePath(String sourceBasePath) {
        this.sourceBasePath = sourceBasePath;
    }

    public String getSourceFileFullName() {
        return sourceFileFullName;
    }

    public void setSourceFileFullName(String sourceFileFullName) {
        this.sourceFileFullName = sourceFileFullName;
    }

    public String getTargetFileName() {
        return targetFileName;
    }

    public void setTargetFileName(String targetFileName) {
        this.targetFileName = targetFileName;
    }

    public String getTargetBasePath() {
        return targetBasePath;
    }

    public void setTargetBasePath(String targetBasePath) {
        this.targetBasePath = targetBasePath;
    }

    public String getTargetFileFullName() {
        return targetFileFullName;
    }

    public void setTargetFileFullName(String targetFileFullName) {
        this.targetFileFullName = targetFileFullName;
    }

    public Map<String, Object> getReplacements() {
        return replacements;
    }

    public void setReplacements(Map<String, Object> replacements) {
        this.replacements = replacements;
    }

    public String getTempletType() {
        return templetType;
    }

    public void setTempletType(String templetType) {
        this.templetType = templetType;
    }

    public String getTempletSubType() {
        return templetSubType;
    }

    public void setTempletSubType(String templetSubType) {
        this.templetSubType = templetSubType;
    }
}
