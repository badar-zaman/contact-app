package com.contact.controller;

import com.contact.model.Activity;
import com.contact.model.ActivityDto;
import com.contact.model.ApiResponse;
import com.contact.service.ActivityService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/activities")
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    @GetMapping
    public ApiResponse<List<Activity>> listActivities(){
        return new ApiResponse<>(HttpStatus.OK.value(), "activity list fetched successfully.",activityService.findAll());
    }

    @GetMapping("/{id}")
    public ApiResponse<Activity> getOne(@PathVariable int id){
        return new ApiResponse<>(HttpStatus.OK.value(), "activity fetched successfully.",activityService.findById(id));
    }

    
    @PostMapping("/save")
    public ApiResponse<Activity> saveActivity(@RequestBody ActivityDto activity){
    	System.out.println("------------------------------------" + activity.toString());
        return new ApiResponse<>(HttpStatus.OK.value(), "activity saved successfully.",activityService.save(activity));
    }
    
    @PutMapping("/{id}")
    public ApiResponse<ActivityDto> update(@RequestBody ActivityDto activityDto) {
        return new ApiResponse<>(HttpStatus.OK.value(), "activity updated successfully.",activityService.update(activityDto));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable int id) {
    	activityService.delete(id);
        return new ApiResponse<>(HttpStatus.OK.value(), "activity deleted successfully.", null);
    }

}
