import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle, Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Link }from "react-router-dom";

    function RenderDish({dish}) {
      return (
        
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
      );
                    
       
    }
function RenderComments({comments}){
    var menu = comments.map((comment) => {
        return (
                <div>
                    <li>--{comment.comment}</li>
                    <li>  {comment.author} {comment.date}  </li>
                <br />
                </div>
                
    );   });
        return (
            <Card>
            <CardTitle><h4 style={{textAlign:"center"}}>comments</h4></CardTitle>
            <CardText><ul style={{listStyle: "none"}}>
                    {menu}
                </ul></CardText>
           </Card>

        );
  

}

const DishDetail = (props) =>{ 
        return (
            <div class="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                 </div>
                 <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 ">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
}

export default DishDetail;