import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button, CardBody } from 'reactstrap';

class PeopleCard extends Component {
	
  constructor(props) {
    super(props);
  }
  render () {
    let { id, name, company, description } = this.props.person;
    return (
      <div style={{width:"70%", height:"10%", marginLeft:"300px", paddingBottom:"10px"}}>
   
    
        <Card style={{backgroundColor:"#F5F7FA", width:"100%",   height:"15%", marginLeft: "-1px", marginTop:"-1px"}}>
          <CardImg top  src={this.props.person.image} style={{ width:"85px", height:"100px", marginLeft:"100px", paddingBottom:"15px", paddingTop:"10px"}} alt="Card image cap" />
          <CardBody style={{backgroundColor:"white"}}>
            <CardTitle>{this.props.person.name}</CardTitle>
            <CardSubtitle>{this.props.person.company}</CardSubtitle>
            <CardText>{this.props.person.description}</CardText>
            <CardText>{this.props.person.website}</CardText>
          </CardBody>
        </Card>
 

    
 
      </div>
    )
  }
}

export default PeopleCard;


