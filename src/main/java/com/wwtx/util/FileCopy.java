package com.wwtx.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
import java.util.Date;

public class FileCopy {
	
	/**
	 * "http://img.hongwangyj.net","d:\\afds");
	 * @param content
	 * @param urlPrefix
	 * @param newFilePath
	 */
	public static void copyFile(String content,String urlPrefix,String newFilePath){
		
	}
	
	

    public static boolean createFile(String destFileName) {  
    	System.out.println(destFileName);
        File file = new File(destFileName);  
        if(file.exists()) {  
            System.out.println("创建单个文件" + destFileName + "失败，目标文件已存在！");  
            return false;  
        }  
        if (destFileName.endsWith(File.separator)) {  
            System.out.println("创建单个文件" + destFileName + "失败，目标文件不能为目录！");  
            return false;  
        }  
        //判断目标文件所在的目录是否存在  
        if(!file.getParentFile().exists()) {  
            //如果目标文件所在的目录不存在，则创建父目录  
            System.out.println("目标文件所在目录不存在，准备创建它！");  
            if(!file.getParentFile().mkdirs()) {  
                System.out.println("创建目标文件所在目录失败！");  
                return false;  
            }  
        }  
        //创建目标文件  
        try {  
            if (file.createNewFile()) {  
                System.out.println("创建单个文件" + destFileName + "成功！");  
                return true;  
            } else {  
                System.out.println("创建单个文件" + destFileName + "失败！");  
                return false;  
            }  
        } catch (IOException e) {  
            e.printStackTrace();  
            System.out.println("创建单个文件" + destFileName + "失败！" + e.getMessage());  
            return false;  
        }  
    }  
     
     
    public static boolean createDir(String destDirName) {  
        File dir = new File(destDirName);  
        if (dir.exists()) {  
            System.out.println("创建目录" + destDirName + "失败，目标目录已经存在");  
            return false;  
        }  
        if (!destDirName.endsWith(File.separator)) {  
            destDirName = destDirName + File.separator;  
        }  
        //创建目录  
        if (dir.mkdirs()) {  
            System.out.println("创建目录" + destDirName + "成功！");  
            return true;  
        } else {  
            System.out.println("创建目录" + destDirName + "失败！");  
            return false;  
        }  
    } 
    
    
	public static long forChannel(File f1,File f2) throws Exception{
		if(!f2.exists()){
			createFile(f2.getPath());
		}
		
        long time=new Date().getTime();
        int length=2097152;
        FileInputStream in=new FileInputStream(f1);
        FileOutputStream out=new FileOutputStream(f2);
        FileChannel inC=in.getChannel();
        FileChannel outC=out.getChannel();
        ByteBuffer b=null;
        while(true){
            if(inC.position()==inC.size()){
                inC.close();
                outC.close();
                return new Date().getTime()-time;
            }
            if((inC.size()-inC.position())<length){
                length=(int)(inC.size()-inC.position());
            }else
                length=2097152;
            b=ByteBuffer.allocateDirect(length);
            inC.read(b);
            b.flip();
            outC.write(b);
            outC.force(false);
        }
    }
	
	
	public static void main(String[] args){
		File f1 = new File("D:\\551032778606066063.jpg");
		try {
			FileCopy.forChannel(f1, new File("d:\\afds\\sdsd\\wewe\\ssd\\s1.jpg"));
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		FileCopy.copyFile("<p><img alt=\"mmexport1463191164700.jpg\" "
				+ "src=\"http://img.hongwangyj.net/ueditor/jsp/upload/image/20160818/1471484821233019881.jpg\" title=\"1471484821233019881.jpg\"/>"
				+ "<img alt=\"mmexport1463191164700.jpg\" src=\"http://img.hongwangyj.net/ueditor/jsp/upload/image/20160818/1471484821233019881.jpg\" title=\"1471484821233019881.jpg\"/>"
				+ "内容<img alt=\"mmexport1463191162701.jpg\" src=\"http://img.hongwangyj.net/ueditor/jsp/upload/image/20160818/1471483761198016655.jpg\" title=\"1471483761198016655.jpg\"/>"
				+ "</p>\", urlPrefix, newFilePath);","http://img.hongwangyj.net","d:\\afds");
	}
}
