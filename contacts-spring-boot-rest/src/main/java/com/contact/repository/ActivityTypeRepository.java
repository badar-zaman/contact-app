package com.contact.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.contact.model.ActivityType;

@Repository
public interface ActivityTypeRepository extends CrudRepository<ActivityType, Integer> 
{

}
