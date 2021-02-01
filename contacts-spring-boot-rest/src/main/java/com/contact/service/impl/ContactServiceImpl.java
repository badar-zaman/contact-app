package com.contact.service.impl;

import com.contact.model.Contact;
import com.contact.model.ContactDto;
import com.contact.repository.ContactRepository;
import com.contact.service.ContactService;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Transactional
@Service(value = "contactService")
public class ContactServiceImpl implements ContactService {
	
	@Autowired
	private ContactRepository contactDao;

	public List<Contact> findAll() {
		List<Contact> list = new ArrayList<>();
		contactDao.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	@Override
	public void delete(int id) {
		contactDao.deleteById(id);
	}

	@Override
	public Contact findById(int id) {
		Optional<Contact> optionalContact = contactDao.findById(id);
		return optionalContact.isPresent() ? optionalContact.get() : null;
	}

    @Override
    public ContactDto update(ContactDto contactDto) {
        Contact contact = findById(contactDto.getId());
        if(contact != null) {
            BeanUtils.copyProperties(contactDto, contact);
            contactDao.save(contact);
        }
        return contactDto;
    }
    
	@Override
    public Contact save(ContactDto contact) {
		Contact newContact = new Contact();
		newContact.setFirstName(contact.getFirstName());
		newContact.setLastName(contact.getLastName());
		newContact.setEmailAddress(contact.getEmailAddress());
		newContact.setTelephoneNumber(contact.getTelephoneNumber());
		newContact.setAddress1(contact.getAddress1());
		newContact.setAddress2(contact.getAddress2());
		newContact.setCity(contact.getCity());
		newContact.setPostCode(contact.getPostCode());
        return contactDao.save(newContact);
    }

	@Override
	public Contact findOne(String name) {
		// TODO Auto-generated method stub
		return null;
	}
	
}
