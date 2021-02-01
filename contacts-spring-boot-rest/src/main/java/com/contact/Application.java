package com.contact;

import com.contact.model.Activity;
import com.contact.model.Contact;
import com.contact.repository.ActivityRepository;
import com.contact.repository.ContactRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.HashSet;
import java.util.Set;


@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public CommandLineRunner init(ContactRepository contactrepo, ActivityRepository activityrepo){
        return args -> {
           

            Contact contact = new Contact();         
            Set<Activity> asets = new HashSet<Activity>();
            Activity activity = new Activity();
            contact.setFirstName("Ted");
            contact.setLastName("flintstone");
            contact.setAddress1("12 any street");
            contact.setAddress2("Moseley");
            contact.setCity("Birmingham");
            contact.setTelephoneNumber("01212322122");
            contact.setPostCode("B11TW");


            activity.setId(12);
            activity.setNotes("Solictor called regarding mortgage offer");
            activity.setTitle("Phone");
            activity.setContact(contact);
            asets.add(activity);
            contact.setActivities(asets);
            contactrepo.save(contact);
            activityrepo.save(activity);
            
            
           
            
                
            
            
        };
    }

}
