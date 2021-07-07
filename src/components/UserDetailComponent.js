import React, { Component } from 'react';
import { Card, CardImg,  CardText, CardBody,CardTitle, Breadcrumb,BreadcrumbItem 
    ,Button, Modal, ModalHeader, ModalBody,Col,Row,
     Label} from 'reactstrap';
import { Link }from "react-router-dom";
import { Control, LocalForm, Errors } from 'react-redux-form';

import { Loading } from './LoadingComponent';

    function RenderUser(props) {  
        return (
        <Card>
            <CardImg top src={props.user.image} alt={props.user.name} />
            <CardBody>
              <CardTitle>{props.user.name}</CardTitle>
              <CardText>{props.user.description}</CardText>
            </CardBody>
        </Card>
      );  
    }
    
function RenderBlogs({blogs,addBlog, userId}){
    var menu = blogs.map((blog) => {
        return (
                <div>
                    <li>--{blog.article}</li>
                    <li>  {blog.tags} {blog.date}  </li>
                <br />
                </div>
                
    );   });
        return (
          
               <div>
               {menu}
               <BlogsForm userId={userId} addBlog={addBlog} />
               </div>
        
        );
}

function RenderVitals({vitals,addVital, userId}){
    var menu = vitals.map((vital) => {
        return (
                <div>
                    <li>So2--{vital.oxygenLevel}</li>
                    <li> Temperature-- {vital.temp} C   </li>
                    <li> Status-- {vital.status} C   </li>
                    <li> Date -- {vital.date }  </li>
                <br />
                </div>
                
    );   });
        return (
          
               <div>
               {menu}
               <VitalsForm userId={userId} addVital={addVital} />
               </div>
        
        );
}

class BlogsForm extends Component{
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
        this.toggleModal();
        this.props.addBlog(this.props.userId, values.article, values.tags);
        // event.preventDefault();
    }

    render(){
        return (
            <div class="container">
                <div className="row">
                <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Add BlogEntry</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Add BlogEntry</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                           
                         <Row className="form-group">
                                <Label htmlFor="article" md={2}>article</Label>
                                <Col md={10}>
                                    <Control.text model=".article" id="article" name="article"
                                        placeholder="write article"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                         />
                                      <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
    
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="temp" md={2}>tags</Label>
                                <Col md={10}>
                                    <Control.text model=".tags" id="tags" name="tags"
                                        placeholder="enter tags"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                         />
                                      <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
    
                                        }}
                                     />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Submit 
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                </div>
            </div>

        )};
}

class VitalsForm extends Component{
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
        this.toggleModal();
        this.props.addVital(this.props.userId, values.oxygenLevel, values.temp, values.status);
        // event.preventDefault();
    }

    render(){
        return (
            <div class="container">
                <div className="row">
                <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Add VitalEntry</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Add VitalEntry</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                           
                         <Row className="form-group">
                                <Label htmlFor="oxygenLevel" md={2}>oxygenLevel</Label>
                                <Col md={10}>
                                    <Control.text model=".oxygenLevel" id="oxygenLevel" name="oxygenLevel"
                                        placeholder="enter oxygenLevel"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                         />
                                      <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
    
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="temp" md={2}>oxygenLevel</Label>
                                <Col md={10}>
                                    <Control.text model=".temp" id="temp" name="temp"
                                        placeholder="enter temp"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                         />
                                      <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
    
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="status" md={2}>status:</Label>
                            
                                <Col md={10}>
                                <Control.textarea model=".status" id="status" name="status"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Submit 
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                </div>
            </div>

        )};
}


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));



function UserDetail(props){
        
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.user != null) 
        {return (
            <div class="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/usermenu">UserMenu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.user.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.user.name}</h3>
                        <hr />
                    </div>                
                 </div>
                 <div className="row">
                    <div className="col-12 col-md-4 ">
                        <RenderUser user={props.user} />
                    </div>
                    <div className="col-12 col-md-4 ">
                    <Card>
                 <CardTitle><h4 style={{textAlign:"center"}}>Journal Vital Entries</h4></CardTitle>
                      <CardText>
                        <ul style={{listStyle: "none"}}>
                            <RenderVitals vitals={props.vitals}
                             addVital={props.addVital}
                             userId={props.user.id}
                            />
                            
                        </ul>
                     </CardText>
                  </Card>
                  
                        
                    </div>
                    <div className="col-12 col-md-4 ">
                    <Card>
                 <CardTitle><h4 style={{textAlign:"center"}}>Journal Blog Entries</h4></CardTitle>
                      <CardText>
                        <ul style={{listStyle: "none"}}>
                            <RenderBlogs blogs={props.blogs}
                             addBlog={props.addBlog}
                             userId={props.user.id}
                            />
                            
                        </ul>
                     </CardText>
                  </Card>
                  
                        
                    </div>
                </div>
              
            </div>
        );}
        else
        {
            return (
                <div>

                </div>
            );
        }
    
        
}

export default UserDetail;