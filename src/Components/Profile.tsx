import React from "react";
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import { Component } from "react";

class ProfileComponent extends Component<any,any> {
=======
=======
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
>>>>>>> main
import { Component, useState } from "react";
import { ListGroup, Card, CardBody, CardImg, Container, CardTitle, CardSubtitle, CardText,
        Nav, NavItem, NavLink, TabContent, Row, Col, TabPane, Button } from 'reactstrap';
import thumbnail from '../thumbnails-z1-1.png';
import '../Styles/Profile.css';
import axios from 'axios';



class ProfileComponent extends Component<any,any> {
    
    constructor(props){
        super(props);
        this.state = {
          postsList:[],
          
        };
      }

    componentDidMount() {
        //TODO
        //Pull user specific posts from endpoint upon initialization of component
        //Also pull user profile
        

    }

    renderProfile() {
        //TODO
        //Pull user profile from endpoint and populate card --> Return card
        return ( <div></div>);
    }

    //Render individual cards for each post
    renderItems() {
        return this.state.postsList.map((card) => (
            <div id="CardContainer">
            <Card >              
              <CardBody>
              <CardImg id ="card-image" top width="10px" height = "80px"  src={thumbnail} alt="Card image cap" />
                <CardTitle id="card-title" tag="h5">{card.handle}</CardTitle>
                <CardSubtitle id="card-subtitle" tag="h6" className="mb-2 text-muted">@{card.username}</CardSubtitle>
                
                
              </CardBody>
              <CardText id="body">{card.body}</CardText>
              <CardText id="timestamp">{card.timestamp}</CardText>
            </Card>
          </div>

            ));
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> mohamed-hassan
=======
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
>>>>>>> main

    render() {
        return (
            <div className="globalFeedContainer">

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
>>>>>>> main
            <Row>
                <Col>
                //TODO
                //User Profile Card
                <Container>
                    {this.renderProfile()}
                </Container>
                
                </Col>
                <Col>
                <h4>User History</h4>
                
                <div >
                <Container>
                    <ListGroup>
                        {this.renderItems()}
                    </ListGroup>
                </Container>
                </div>
            
                </Col>

            </Row>
                
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> mohamed-hassan
=======
>>>>>>> 2981b61005d81a442f7d22030b3890d2489d715d
>>>>>>> main
            </div>
        )
    }
}

export default ProfileComponent;