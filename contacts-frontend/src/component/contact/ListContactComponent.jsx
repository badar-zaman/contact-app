import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListContactComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contacts: [],
            activities: [],
            selectedActivity: '',
            selectedContact: '',
            message: null
        }
       
        this.editContact = this.editContact.bind(this);
        this.addContact = this.addContact.bind(this);
        this.reloadContactList = this.reloadContactList.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.gotoActivities = this.gotoActivities.bind(this);
        
    }

    componentDidMount() {
        this.reloadContactList();
    }

    reloadContactList() {
        ApiService.fetchContacts()
            .then((res) => {
                this.setState({contacts: res.data.result})
               
            });         
    }

    deleteContact(contactId) {
        ApiService.deleteContact(contactId)
           .then(res => {
               this.setState({message : 'Contact deleted successfully.'});
               this.setState({contacts: this.state.contacts.filter(contact => contact.id !== contactId)});
           })

    }

    editContact(id) {
        window.localStorage.setItem("contactId", id);
        this.props.history.push('/edit-contact');
    }

    addContact() {
        window.localStorage.removeItem("contactId");
        this.props.history.push('/add-contact');
    }

    fetchContactDetails = (e) => {
        const contact = e.target.getAttribute('data-item');
        
    }

    handleClick = id => {
         const cdata= this.state.contacts.find(contact => contact.id === id);
         this.setState({selectedContact: cdata});  
         this.setState({ activities:cdata.activities});
    };

    gotoActivities() {
             this.props.history.push('/activities');
    }
     addActivity() {
       // window.localStorage.removeItem("contactId");
       window.localStorage.setItem("contact", this.state.selectedContact);
        this.props.history.push('/add-activity');
    }

    render() {
        return (
          
            <div style={{float:"center",marginTop:"20%", marginLeft:"30%", width:"100%"}}>
                <h4 className="text-left ">
                    <button>Contacts</button>
                    <button onClick={() => this.gotoActivities()}> Activities</button>
                </h4>
                <br></br><br></br>
                <div style={{width:'25%', float:"left"}}>
                 <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.contacts.map(
                                contact =>
                                       <tr key={contact.id} onClick={e => this.handleClick(contact.id)}>
                                        <td>{contact.firstName + ' ' + contact.lastName} </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                    <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addContact()}> Add Contact</button>
                </div>
                
                <div style={{marginLeft:'30%',marginTop:'-5%',padding:'5%',width:"100%", height:'100%'}}>
                <table className="table table-striped table-bordered " >
                <tbody>                     
                {
                    
                    (this.state.selectedContact &&
                            <tr key={this.state.selectedContact.id}>
                                   <br></br>
                                    <tr>
                                       <td style={{paddingLeft:'0.5%'}}>First Name*</td>
                                       <td>
                                            <input type="text" value={this.state.selectedContact.firstName}></input>
                                        </td>
                                        <td> Last Name* </td>
                                        <td>
                                         <input type="text" value= {this.state.selectedContact.lastName}></input>
                                       </td>                                
                                    </tr>
                                   
                                    <tr>
                                         <td>Email*</td>
                                        <td>
                                         <input type="text" value={this.state.selectedContact.emailaddress}></input>
                                         </td>
                                        
                                        <td>Telephone</td>
                                        <td>
                                             <input type="text" value={this.state.selectedContact.telephoneNumber}></input>
                                        </td>
                                    </tr>
                                     <tr>
                                         <td>Address1</td>
                                        <td>
                                         <input type="text" value={this.state.selectedContact.address1}></input>
                                         </td>
                                    </tr>
                                    <tr>
                                         <td>Address2</td>
                                        <td>
                                         <input type="text" value={this.state.selectedContact.address2}></input>
                                         </td>
                                    </tr>
                                    <tr>
                                         <td>City</td>
                                        <td>
                                         <input type="text" value={this.state.selectedContact.city}></input>
                                         </td>
                                    </tr>
                                     <tr>
                                        <td>PostCode</td>
                                        <td>
                                         <input type="text" value={this.state.selectedContact.postCode}></input></td>
                                    </tr>
                                   <br></br>
                                    <tr>                                    
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteContact(this.state.selectedContact.id)} > Delete Contact</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.editContact(this.state.selectedContact.id)} style={{marginLeft: '20px'}} > Edit / Save Contact</button>
                                        </td>
                                    </tr>    
                                        
                            </tr>
                    ) 
                        }
                    </tbody>
                </table>


                {(this.state.selectedContact &&
                <div style={{margin:'5%',padding:'5%',width:"100%", height:'100%'}}>
                    <label align='left'>Activities</label>
                    <button className="btn btn-danger" style={{width:'100px', marginLeft:'50%'}} onClick={() => this.addActivity()}> 
                                            Add Activity</button>    
                 <table className="table table-striped table-bordered">                    
                    <thead>
                        <tr>
                            <th >Title</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.activities.map(
                                activity =>
                                       <tr key={activity.id} onClick={e => this.handleClick(activity.id)}>
                                        <td>{activity.title} </td>
                                        <td>{activity.notes} </td> 
                                    </tr>
                            )
                        }
                    </tbody>                   
                </table>                    
                </div>
                )}   

                </div>

                <br></br><br></br>

                           
            </div>         
        );
    }

}

export default ListContactComponent;