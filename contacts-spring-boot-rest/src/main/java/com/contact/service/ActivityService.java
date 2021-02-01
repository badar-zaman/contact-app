package com.contact.service;

import java.util.List;

import com.contact.model.Activity;
import com.contact.model.ActivityDto;

public interface ActivityService {

    List<Activity> findAll();
    void delete(int id);
    Activity findById(int id);
    Activity save(ActivityDto activity);
    ActivityDto update(ActivityDto activityDto);
    
}
