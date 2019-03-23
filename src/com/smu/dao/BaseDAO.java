package com.smu.dao;

/**
 * @author LeagueRT
 * @create 2018/12/7-14:50
 */
import java.util.List;

public interface BaseDAO {

    boolean add(Object o);

    boolean delete(Object o);

    boolean update(Object o);

    List find(Object o);
}

