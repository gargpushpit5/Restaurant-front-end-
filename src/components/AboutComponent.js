import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {

  

    return(
        
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Anything about page what so ever need to display</h2>
                    <p> </p>
                    <p> <em></em>,  </p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Additional information about the page</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Display any information that you would like to</dt>
                                <dd className="col-6"></dd>
                                <dt className="col-6"></dt>
                                <dd className="col-6"></dd>
                                <dt className="col-6"></dt>
                                <dd className="col-6"></dd>
                                <dt className="col-6"></dt>
                                <dd className="col-6"></dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                
            </div>
            
           
        </div>
    );
}

export default About;    