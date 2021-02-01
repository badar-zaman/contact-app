package com.contact.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "activitytype")
public class ActivityType {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	
	private int activity_id;
	
	private String activitytype;
	

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
	 * @return the activitytype
	 */
	public String getActivitytype() {
		return activitytype;
	}
	/**
	 * @param activitytype the activitytype to set
	 */
	public void setActivitytype(String activitytype) {
		this.activitytype = activitytype;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "ActivityType [id=" + id + ", activity_id=" + activity_id + ", activitytype=" + activitytype + "]";
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + activity_id;
		result = prime * result + ((activitytype == null) ? 0 : activitytype.hashCode());
		result = prime * result + id;
		return result;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ActivityType other = (ActivityType) obj;
		if (activity_id != other.activity_id)
			return false;
		if (activitytype == null) {
			if (other.activitytype != null)
				return false;
		} else if (!activitytype.equals(other.activitytype))
			return false;
		if (id != other.id)
			return false;
		return true;
	}
	

}
