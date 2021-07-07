import React, { Component } from 'react';

import UserMenu from './UserMenuComponent.js';
import UserDetail from './UserDetailComponent';



import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent.js';
import About from './AboutComponent.js';


import {  fetchUsers,addVital,addBlog } from '../redux/ActionCreators';

import { connect } from 'react-redux';
import { actions } from 'react-redux-form';







import Home from './HomeComponent';
import { Switch, Route, Redirect,withRouter} from 'react-router-dom';

const HomePage = () => {                    //home component
  return(
      <Home 
      item={this.props.homes}
      />
  );
}  

const mapStateToProps = state => {
  return {
    
     homes: state.homes,
    users:state.users,
    vitals:state.vitals,
    blogs:state.blogs
  }
}

const mapDispatchToProps = dispatch => ({
  

  addVital: (journalId, oxygenLevel, temp, status) => dispatch(addVital(journalId, oxygenLevel, temp, status)),
  addBlog: (journalId,article,tags ) => dispatch(addBlog(journalId, article,tags)),
  
  fetchUsers: () => { dispatch(fetchUsers())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}

});

class Main extends Component {

  constructor(props) {
    super(props);
   
  }
 
  componentDidMount() {
    
    this.props.fetchUsers();
  }

  render() {
    const HomePage = () => {
      return(
          <Home 
               item={this.props.homes}
             
          />
      );
    }
   

    const UserWithId = ({match}) => {
      return(
        <UserDetail user={this.props.users.users.filter((user) => user.id === parseInt(match.params.userId,10))[0]}
            isLoading={this.props.users.isLoading}
            errMess={this.props.users.errMess}
            
            vitals={this.props.vitals.filter((vital) => vital.journalId === parseInt(match.params.userId,10))}
            addVital={this.props.addVital}
            addBlog={this.props.addBlog}
            blogs={this.props.blogs.filter((blog) => blog.journalId === parseInt(match.params.userId,10))}
      />
      );
    };



    return (
      <div>
         <Header></Header>
         <Switch>
              <Route path='/home' component={HomePage} />
          
              <Route exact path='/usermenu' component={() => <UserMenu users={this.props.users} />} />
              <Route path='/usermenu/:userId' component={UserWithId} />
              
              <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
              <Route path="/aboutus" component={() => <About  />} />
              <Redirect to="/home" />
          </Switch>
        
        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));