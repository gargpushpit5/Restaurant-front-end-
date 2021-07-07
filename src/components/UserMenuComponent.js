import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

  import { Loading } from './LoadingComponent';

  import { Link } from 'react-router-dom';

function RenderUserMenuItem({user}){
  return (
    <Card>
    <Link to={`/usermenu/${user.id}`} >
        <CardImg width="100%" src={user.image} alt={user.name} />
        <CardImgOverlay>
            <CardTitle>{user.name}</CardTitle>
        </CardImgOverlay>
    </Link>
</Card>
  );
}
const UserMenu = (props) => {
    
      const usermenu = props.users.users.map((user) => {
        return (
          <div  className="col-12 col-md-5 m-1">
            <RenderUserMenuItem user={user} ></RenderUserMenuItem>
          </div>
        );
    });
    if (props.users.isLoading) {
      return(
          <div className="container">
              <div className="row">            
                  <Loading />
              </div>
          </div>
      );
  }
  else if (props.users.errMess) {
      return(
          <div className="container">
              <div className="row"> 
                  <div className="col-12">
                      <h4>{props.users.errMess}</h4>
                  </div>
              </div>
          </div>
      );
  }
  else
    return (
      <div className="container">
              <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>UserMenu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>UserMenu</h3>
                        <hr />
                    </div>                
                </div>
                
                 <div className="row">
                     {usermenu}
                 </div>
      </div>
  );
    
}

export default UserMenu;