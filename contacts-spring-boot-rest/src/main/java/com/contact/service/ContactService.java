package com.contact.service;

import java.util.List;

import com.contact.model.Contact;
import com.contact.model.ContactDto;

public interface ContactService {

    List<Contact> findAll();
    void delete(int id);
    Contact findById(int id);
    Contact save(ContactDto contact);
    Contact findOne(String name);
    ContactDto update(ContactDto contactDto);
    
}
