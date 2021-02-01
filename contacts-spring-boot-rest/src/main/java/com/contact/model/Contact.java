package com.contact.model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.FetchMode;
import org.hibernate.annotations.Fetch;

import com.fasterxml.jackson.annotation.JsonManagedReference;



@Entity
@Table(name = "contact")
public class Contact {
	
	 @Id
	 @GeneratedValue(strategy= GenerationType.IDENTITY)
	// @Column(name="contactId")
	 private int id;

	 @Column
	 private String  firstName;
	 @Column
	 private String  lastName;
	 @Column
	 private String emailAddress;
	 @Column
	 private String telephoneNumber;
	 @Column
	 private String address1;
	 @Column
	 private String address2;
	 @Column
	 private String city;
	 @Column
	 private String postCode;
	
	 @JsonManagedReference
	// @OneToMany(targetEntity=Activity.class, cascade=CascadeType.ALL, fetch = FetchType.LAZY , mappedBy = "contact")	
	 @OneToMany(fetch = FetchType.EAGER, mappedBy = "contact")
	 private Set<Activity> activities = new HashSet<Activity>();
	 
	 
	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}
	/**
	 * @return the firstName
	 */
	public String getFirstName() {
		return firstName;
	}
	/**
	 * @param firstName the firstName to set
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	/**
	 * @return the lastName
	 */
	public String getLastName() {
		return lastName;
	}
	/**
	 * @param lastName the lastName to set
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	/**
	 * @return the emailAddress
	 */
	public String getEmailAddress() {
		return emailAddress;
	}
	/**
	 * @param emailAddress the emailAddress to set
	 */
	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}
	/**
	 * @return the telephoneNumber
	 */
	public String getTelephoneNumber() {
		return telephoneNumber;
	}
	/**
	 * @param telephoneNumber the telephoneNumber to set
	 */
	public void setTelephoneNumber(String telephoneNumber) {
		this.telephoneNumber = telephoneNumber;
	}
	/**
	 * @return the address1
	 */
	public String getAddress1() {
		return address1;
	}
	/**
	 * @param address1 the address1 to set
	 */
	public void setAddress1(String address1) {
		this.address1 = address1;
	}
	/**
	 * @return the address2
	 */
	public String getAddress2() {
		return address2;
	}
	/**
	 * @param address2 the address2 to set
	 */
	public void setAddress2(String address2) {
		this.address2 = address2;
	}
	/**
	 * @return the city
	 */
	public String getCity() {
		return city;
	}
	/**
	 * @param city the city to set
	 */
	public void setCity(String city) {
		this.city = city;
	}
	/**
	 * @return the postCode
	 */
	public String getPostCode() {
		return postCode;
	}
	/**
	 * @param postCode the postCode to set
	 */
	public void setPostCode(String postCode) {
		this.postCode = postCode;
	}
	
	
	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((activities == null) ? 0 : activities.hashCode());
		result = prime * result + ((address1 == null) ? 0 : address1.hashCode());
		result = prime * result + ((address2 == null) ? 0 : address2.hashCode());
		result = prime * result + ((city == null) ? 0 : city.hashCode());
		result = prime * result + ((emailAddress == null) ? 0 : emailAddress.hashCode());
		result = prime * result + ((firstName == null) ? 0 : firstName.hashCode());
		result = prime * result + id;
		result = prime * result + ((lastName == null) ? 0 : lastName.hashCode());
		result = prime * result + ((postCode == null) ? 0 : postCode.hashCode());
		result = prime * result + ((telephoneNumber == null) ? 0 : telephoneNumber.hashCode());
		return result;
	}
	
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "Contact [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", emailAddress="
				+ emailAddress + ", telephoneNumber=" + telephoneNumber + ", address1=" + address1 + ", address2="
				+ address2 + ", city=" + city + ", postCode=" + postCode 
					+ ", "
						+ "activities=" + activities 
					+ "]";
	}
	/**
	 * @return the activities
	 */
	public Set<Activity> getActivities() {
		return activities;
	}
	/**
	 * @param activities the activities to set
	 */
	public void setActivities(Set<Activity> activities) {
		this.activities = activities;
	}
	
	
}
