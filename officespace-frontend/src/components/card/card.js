import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';


import { Container, Row, Col } from 'reactstrap';
import PeopleCard from '../PeopleCard/PeopleCard';

class CompanyCards extends Component{
  constructor (){
    super();
    this.state ={
      people: [
      {
       image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/US-NationalParkService-Logo.svg/2000px-US-NationalParkService-Logo.svg.png",
        name: "National Park Service",
        description: "The National Park Service preserves unimpaired the natural and cultural resources and values of the National Park System for the enjoyment, education, and inspiration of this and future generations. The Park Service cooperates with partners to extend the benefits of natural and cultural resource conservation and outdoor recreation throughout this country and the world.",
        website: "https://www.nps.gov/index.htm"
      },
      {
        image:"https://res.cloudinary.com/teepublic/image/private/s--CRXh-0NK--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1504047654/production/designs/1859161_1.jpg",
         name: "iniTECH",
        description: "At iniTECH we are dedicated to help customers by developing, implementing, and supporting custom process automation and information integration solutions. IniTECH has been serving the Flavor and fragrance industry for more than 12 years with experience of over 150 man-years. We have a unique combination of Engineers, Consultants, and programmers with the in-depth knowledge required for successful completion of your automation challenge.",
        website: "http://initechinfo.com/"
      },
      {
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Chevron_Logo.svg/1200px-Chevron_Logo.svg.png",
       name: "Chevron",
        description: "Our success is driven by our people and their commitment to getting results the right way – by operating responsibly, executing with excellence, applying innovative technologies and capturing new opportunities for profitable growth.",
        website: "https://www.chevron.com/"
      }
      ]
    }
  }
  render(){
let peopleCards = this.state.people.map(person =>{
  return(
    <Col sm="5">
    <PeopleCard person={person} />
    </Col>
    )
})
  return (
    <Container fluid>
    <Row>
    {peopleCards}
    </Row>
    </Container>
    )
}
}


    export default CompanyCards;


