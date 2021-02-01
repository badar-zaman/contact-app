package com.contact.service.impl;

import com.contact.model.Activity;
import com.contact.model.ActivityDto;
import com.contact.repository.ActivityRepository;
import com.contact.service.ActivityService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Transactional
@Service(value = "activityService")
public class ActivityServiceImpl implements ActivityService {
	
	@Autowired
	private ActivityRepository activityDao;

	public List<Activity> findAll() {
		List<Activity> list = new ArrayList<>();
		activityDao.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	@Override
	public void delete(int id) {
		activityDao.deleteById(id);
	}

	@Override
	public Activity findById(int id) {
		Optional<Activity> optionalActivity = activityDao.findById(id);
		return optionalActivity.isPresent() ? optionalActivity.get() : null;
	}

    @Override
    public ActivityDto update(ActivityDto activityDto) {
    	Activity activity = findById(activityDto.getId());
        if(activity != null) {
            BeanUtils.copyProperties(activityDto, activity);
            activityDao.save(activity);
        }
        return activityDto;
    }
    
	@Override
    public Activity save(ActivityDto activity) {
		Activity newActivity = new Activity();
		newActivity.setNotes(activity.getNotes());
		newActivity.setTitle(activity.getTitle());
	//	newActivity.setContact(activity.getContact());
		
        return activityDao.save(newActivity);
    }
	
}
