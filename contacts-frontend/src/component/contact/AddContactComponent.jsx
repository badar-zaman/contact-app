import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddContactComponent extends Component{


    constructor(props){
        super(props);
        this.state ={
            id: '',
            firstName: '',
            lastName: '',
            emailAddress: '',
            telephoneNumber: '',
            address1: '',
            address2:'',
            city: '',
            postCode:'',
            message: null
        }
        this.saveContact = this.saveContact.bind(this);
    }

    saveContact = (e) => {
        e.preventDefault();
        let contact = {
                id: this.state.id,
                firstName: this.state.firstName, 
                lastName: this.state.lastName, 
                emailAddress: this.state.emailAddress, 
                telephoneNumber: this.state.telephoneNumber,
                address1: this.state.address1, 
                address2: this.state.address2,
                city:this.state.city,
                postCode: this.state.postCode
            };
        ApiService.addContact(contact)
            .then(res => {
                this.setState({message : 'contact added successfully.'});
                this.props.history.push('/contacts');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add Contact</h2>
                <form>
                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" placeholder="firstname" name="firstName" className="form-control" 
                                                value={this.state.firstname} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Last Name:</label>
                    <input type="text" placeholder="lastname" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.onChange}/>
                </div>

   
                <div className="form-group">
                    <label>Address1:</label>
                    <input placeholder="address1" name="address1" className="form-control" value={this.state.address1} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Address2:</label>
                    <input placeholder="address2" name="address2" className="form-control" value={this.state.address2} onChange={this.onChange}/>
                </div>
                 <div className="form-group">
                    <label>City:</label>
                    <input placeholder="city" name="city" className="form-control" value={this.state.city} onChange={this.onChange}/>
                </div>
                 <div className="form-group">
                    <label>PostCode:</label>
                    <input placeholder="postcode" name="postcode" className="form-control" value={this.state.postcode} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>email Address:</label>
                    <input placeholder="emailAddress" name="emailAddress" className="form-control" value={this.state.emailAddress} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Telephone Number:</label>
                    <input type="number" placeholder="telephoneNumber" name="telephoneNumber" className="form-control" value={this.state.telephoneNumber} onChange={this.onChange}/>
                </div>

                <button className="btn btn-success" onClick={this.saveContact}>Save</button>
            </form>
    </div>
        );
    }
}

export default AddContactComponent;