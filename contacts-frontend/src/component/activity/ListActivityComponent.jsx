import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListActivityComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contacts: [],
            activities:[],
            selectedActivity: '',
            message: null
        }
       
        this.editActivity = this.editActivity.bind(this);
        this.addActivity = this.addActivity.bind(this);
        this.reloadActivityList = this.reloadActivityList.bind(this);
        this.deleteActivity = this.deleteActivity.bind(this);
        this.gotoContacts = this.gotoContacts.bind(this);
        
    }

    componentDidMount() {
        this.reloadActivityList();
     }

    reloadActivityList() {
        ApiService.fetchActivities()
            .then((res) => {
                this.setState({activities: res.data.result})
            });
            
    }

    deleteActivity(activityId) {
        ApiService.deleteActivity(activityId)
           .then(res => {
               this.setState({message : 'Contact deleted successfully.'});
               this.setState({activities: this.state.activities.filter(activity => activity.id !== activityId)});
           })

    }

    editActivity(id) {
        window.localStorage.setItem("activityId", id);
        this.props.history.push('/edit-activity');
    }

    addActivity() {
        window.localStorage.removeItem("activityId");
        this.props.history.push('/add-activity');
    }

    fetchActivityDetails = (e) => {
        const activity = e.target.getAttribute('data-item');
        alert(activity.Name);
    }

    handleClick = id => {
         const cdata= this.state.activities.find(activity => activity.id === id);
         this.setState({selectedActivity: cdata});  

    };

    gotoContacts() 
    {
             this.props.history.push('/contacts');
    }

    render() {
        
        return (
           
                
            <div style={{float:"center", width:"100%", borderWidth:"10px"}}>
                <h4 className="text-left ">
                    <button onClick={() => this.gotoContacts()}>Contacts</button>
                    <button > Activities</button>
                </h4>
               
                <div style={{width:'25%', float:"left"}}>
                 <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.activities.map(
                        activity =>
                                    <tr key={activity.id} onClick={e => this.handleClick(activity.id)}>
                                        <td>{activity.title }</td>
                                        <td>{activity.notes} </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                    <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addActivity()}> Add Activity</button>
                </div>
                
                {(this.state.selectedActivity && 
                <div style={{marginLeft:'30%',width:"100%", border:'1px solid'}}>
                   
                <table className="table table-striped table-bordered " >

                    <tbody>                     
                    {
                      
                        <div>
                            <tr key={this.state.selectedActivity.id}>
                                    <td><label>Contact:</label></td>
                                    <td><input type="text" size="10%" value={this.state.selectedActivity.title}></input>
                                    </td>
                             </tr>        
                             <tr>      
                                       <td><label> Subject: </label></td>
                                       <td><input type="text" style={{ width: "330px" }} value={this.state.selectedActivity.subject}></input>
                                       </td>                                
                             </tr>
                              <tr>      
                                       <td><label> Notes: </label></td>
                                       <td>
                                           <textarea rows={15} cols={50} value={this.state.selectedActivity.notes}>
                                           </textarea>
                                        </td>   
                                                             
                             </tr>

                              <tr>                                    
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteActivity(this.state.selectedActivity.id)} > Delete Activity</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.editActivity(this.state.selectedActivity.id)} style={{marginLeft: '20px'}} > Edit / Save Activity</button>
                                        </td>
                                    </tr>    
                        </div> 
                                                           
                    }
                    </tbody>
                </table>
                </div>)}
                
            </div>
        );
    }

}

export default ListActivityComponent;