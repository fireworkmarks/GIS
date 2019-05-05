package com.smu.service.impl;

import com.smu.dao.BaseDAO;
import com.smu.entity.DocRadiourl;
import com.smu.service.DocVideoService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * @author LeagueRT
 * @create 2019/5/5-12:29
 */
public class DocVideoServiceImpl implements DocVideoService {
    @Autowired
    private BaseDAO baseDAO;

    @Override
    public DocRadiourl getVideoAPI(String docid, String floor){
        DocRadiourl d = new DocRadiourl();
        d.setDocid(docid);
        d.setDocfloorid(floor);
        List DocRadios = baseDAO.find(d);
        if (DocRadios.size() != 0) return (DocRadiourl) DocRadios.get(0);
        return null;
    }
}
