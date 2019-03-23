package com.smu.service.impl;

import com.smu.dao.BaseDAO;
import com.smu.entity.DocPic;
import com.smu.service.DocService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author LeagueRT
 * @create 2019/1/12-14:39
 */

@Service
@Transactional
@Scope("prototype")
public class DocServiceImpl implements DocService {
    @Autowired
    private BaseDAO baseDAO;

    @Override
    public DocPic findDocPic(String docid){
        DocPic dp = new DocPic();
        dp.setDocid(docid);
        List DocPics = baseDAO.find(dp);
        return (DocPic) DocPics.get(0);
    }
}
