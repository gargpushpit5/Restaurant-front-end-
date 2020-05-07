import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
        if (dish != null)
        {
            var menu=null;
            if(dish.comments)
            {
                menu = dish.comments.map((comment) => {
                    return (
                            <div>
                                <li>--{comment.comment}</li>
                            <li>{comment.author} {comment.date}</li>
                            <br />
                            </div>
                            
                    );
                });
            }
            return(
                <div class="container">
                <div className="row">
            <div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
        
            <div  className="col-12 col-md-5 m-1">
                    <Card>
                        <CardTitle><h4>comments</h4></CardTitle>
                        <CardText><ul style={{listStyle: "none"}}>
                                {menu}
                            </ul></CardText>
                    </Card>
            </div>
            </div> 
        </div>
            );}
        else
            return(
                <div></div>
            );
    }

const DishdetailComponent = (props) =>{ 
        return (
                   <div>
                    <RenderDish dish={props.dish}></RenderDish>
                   </div>
        );
}

export default DishdetailComponent;