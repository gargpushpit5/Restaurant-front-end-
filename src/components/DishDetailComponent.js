import React, { Component } from 'react';
import { Card, CardImg,  CardText, CardBody,CardTitle, Breadcrumb,BreadcrumbItem 
    ,Button, Modal, ModalHeader, ModalBody,Col,Row,
     Label} from 'reactstrap';
import { Link }from "react-router-dom";
import { Control, LocalForm, Errors } from 'react-redux-form';

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
          
               <div>
               {menu}
               </div>
                   
               
                
        

        );
  

}


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));



class DishDetail extends Component{
    
    constructor(props) {
        super(props);   
        this.state = {
          isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
      }
      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
      handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }
    render(){
        return (
            <div class="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>                
                 </div>
                 <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={this.props.dish} />
                    </div>
                    <div className="col-12 col-md-5 ">
                    <Card>
                 <CardTitle><h4 style={{textAlign:"center"}}>comments</h4></CardTitle>
                      <CardText>
                        <ul style={{listStyle: "none"}}>
                            <RenderComments comments={this.props.comments} />
                            <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Add Comment</Button>
                        </ul>
                     </CardText>
                  </Card>
                        
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Add Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating:</Label>
                                <Col md={{size: 3}}>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                                    
                                  
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={2}>Name:</Label>
                                <Col md={10}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="enter your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                      <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comment:</Label>
                            
                                <Col md={10}>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Submit Comment
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
        
}

export default DishDetail;