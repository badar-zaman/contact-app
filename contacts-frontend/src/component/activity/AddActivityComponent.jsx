import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddActivityComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            id: '',
            title: '',
            type: '',
            notes:'',
            message: null
        }
        this.saveActivity = this.saveActivity.bind(this);
    }

    saveActivity = (e) => {
        e.preventDefault();
        let activity = {
                id: this.state.id,
                title: this.state.title,
                notes:this.state.notes, 
                type: this.state.type,
           //     contact:   window.localStorage.getItem("contact")

            };     
        ApiService.addActivity(activity)
            .then(res => {
                this.setState({message : 'activity added successfully.'});
                this.props.history.push('/activities');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                    <h2 className="text-center">Add Activity</h2>
                    <form>
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" placeholder="title" name="title" className="form-control" 
                                                    value={this.state.title} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>type:</label>
                        <input type="text" placeholder="type" name="type" className="form-control" 
                                                    value={this.state.type} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Notes:</label>
                        <input type="text" placeholder="notes" name="notes" className="form-control" 
                                                    value={this.state.notes} onChange={this.onChange}/>
                    </div>
    
                    <button className="btn btn-success" onClick={this.saveActivity}>Save</button>
                </form>
            </div>
        );
    }
}

export default AddActivityComponent;
               