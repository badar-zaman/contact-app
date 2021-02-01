import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListContactComponent from "./component/contact/ListContactComponent";
import AddContactComponent from "./component/contact/AddContactComponent";
import EditContactComponent from "./component/contact/EditContactComponent";
import ListActivityComponent from "./component/activity/ListActivityComponent";
import AddActivityComponent from "./component/activity/AddActivityComponent";
import EditActivityComponent from "./component/activity/EditActivityComponent";

function App() {
  return (
      <div className="container">
          <Router>
              <div className="col-md-6">
                  <h1 className="text-center"  style={{marginLeft:'40%'}}>Contact Demo App</h1>
                  <Switch>
                      <Route path="/add-contact" component={AddContactComponent} />
                      <Route path="/contacts" component={ListContactComponent} />
                      <Route path="/edit-contact" component={EditContactComponent} />
                      <Route path="/activities" component={ListActivityComponent} />
                      <Route path="/add-activity" component={AddActivityComponent} />
                      <Route path="/edit-activity" component={EditActivityComponent} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
