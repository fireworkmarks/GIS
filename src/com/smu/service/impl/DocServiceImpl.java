package com.smu.service.impl;

import com.smu.dao.BaseDAO;
import com.smu.entity.Doc;
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
    public Doc getDocInfo(String docid){
        Doc d = new Doc();
        d.setDocid(docid);
        List Docs = baseDAO.find(d);
        if (Docs.size() != 0) return (Doc) Docs.get(0);
        return null;
    }
}
