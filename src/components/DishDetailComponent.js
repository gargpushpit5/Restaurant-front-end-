import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishdetailComponent extends Component {

    renderDish(dish) {
        if (dish != null)
        {const menu = dish.comments.map((comment) => {
            return (
                    <div>
                        <li>--{comment.comment}</li>
                    <li>{comment.author} {comment.date}</li>
                    <br />
                    </div>
                    
            );
        });
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
    
     
    render() {
        return (
                   <div>
                    {this.renderDish(this.props.dish)}
                   </div>
                  
       
           
        );
    }
}

export default DishdetailComponent;