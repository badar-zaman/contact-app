import axios from 'axios';

const CONTACT_API_BASE_URL = 'http://localhost:8080/contacts';
const ACTIVITY_API_BASE_URL = 'http://localhost:8080/activities';

class ApiService {
   
    fetchContacts() {
        return axios.get(CONTACT_API_BASE_URL);
    }

    fetchContactById(contactId) {
        return axios.get(CONTACT_API_BASE_URL + '/' + contactId);
    }

    deleteContact(contactId) {
        return axios.delete(CONTACT_API_BASE_URL + '/' + contactId);
    }

    addContact(contact) {
        return axios.post(""+CONTACT_API_BASE_URL, contact);
    }

    editContact(contact) {
        return axios.put(CONTACT_API_BASE_URL + '/' + contact.id, contact);
    }


    //activities
    fetchActivities() {
        return axios.get(ACTIVITY_API_BASE_URL);
    }

    fetchActivityById(activityId) {
        return axios.get(ACTIVITY_API_BASE_URL + '/' + activityId);
    }

    deleteActivity(activityId) {
        return axios.delete(ACTIVITY_API_BASE_URL + '/' + activityId);
    }

    addActivity(activity) {
        return axios.post(""+ACTIVITY_API_BASE_URL + '/save' , activity);
    }

    editActivity(activity) {
        return axios.put(ACTIVITY_API_BASE_URL + '/' + activity.id, activity);
    }

}

export default new ApiService();