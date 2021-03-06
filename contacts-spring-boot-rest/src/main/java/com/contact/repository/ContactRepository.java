package com.contact.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.contact.model.Contact;

@Repository
public interface ContactRepository extends CrudRepository<Contact, Integer> 
{

}
