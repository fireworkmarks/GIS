package com.smu.service;

import com.smu.entity.DocRadiourl;

/**
 * @author LeagueRT
 * @create 2019/5/5-12:19
 */
public interface DocVideoService {
    DocRadiourl getVideoAPI(String docID, String floor);
}
