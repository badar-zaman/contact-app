package com.contact.controller;

import com.contact.model.ApiResponse;
import com.contact.model.Contact;
import com.contact.model.ContactDto;
import com.contact.service.ContactService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/contacts")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @GetMapping
    public ApiResponse<List<Contact>> listContact(){
        return new ApiResponse<>(HttpStatus.OK.value(), "User list fetched successfully.",contactService.findAll());
    }

    @GetMapping("/{id}")
    public ApiResponse<Contact> getOne(@PathVariable int id){
        return new ApiResponse<>(HttpStatus.OK.value(), "User fetched successfully.",contactService.findById(id));
    }

    
    @PostMapping
    public ApiResponse<Contact> saveContact(@RequestBody ContactDto contact){
        return new ApiResponse<>(HttpStatus.OK.value(), "User saved successfully.",contactService.save(contact));
    }
    
    @PutMapping("/{id}")
    public ApiResponse<ContactDto> update(@RequestBody ContactDto contactDto) {
        return new ApiResponse<>(HttpStatus.OK.value(), "User updated successfully.",contactService.update(contactDto));
    }

    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable int id) {
        contactService.delete(id);
        return new ApiResponse<>(HttpStatus.OK.value(), "User deleted successfully.", null);
    }
   



}
