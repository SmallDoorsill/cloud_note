package com.oracle.hrb.cloudnote.test;

import com.oracle.hrb.cloudnote.utils.SHa256Util;
import org.junit.Test;

import java.util.UUID;

public class testBasic {
    @Test
    public void testSHA256(){
        String password = "123456";
        password = SHa256Util.sha256(password);
        System.out.println(password);
        String s = "b2d5216607921faccd81b6d8fd13c59882eee810e5ecfcade77e3d68285e78dd";
        System.out.println(s.length());
    }

    @Test
    public void testUUID(){
        String id = UUID.randomUUID().toString();
        id = id.replace("-", "");
        System.out.println(id);
    }
}
