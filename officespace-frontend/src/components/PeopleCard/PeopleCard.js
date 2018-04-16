import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class PeopleCard extends Component {
	
  constructor(props) {
    super(props);
  }
  render () {
    let { id, name, company, description } = this.props.person;
    return (
      <div style={{marginTop:"-200px", minHeight: "100vh", padding:"30px"}}>
        <Card style={{backgroundColor:"#F5F7FA", width:"100%",   height:"100%", marginLeft: "150px", padding:"0px"}}>
          <CardImg top width="100%" src={this.props.person.image} style={{height:"100%", width: "140px", marginLeft:"100px", paddingTop:"40px"}} alt="Card image cap" />
          <CardBlock style={{backgroundColor:"white", marginTop: "80px", width:"100%"}}>
            <CardTitle>{this.props.person.name}</CardTitle>
            <CardSubtitle>{this.props.person.company}</CardSubtitle>
            <CardText>{this.props.person.description}</CardText>
            <CardText>{this.props.person.website}</CardText>
            <Button style={{backgroundColor:"#e37222", marginTop:"10px"}} onClick={() => this.props.removePerson(id)}>Delete</Button>
          </CardBlock>
        </Card>
      </div>
    )
  }
}

export default PeopleCard;


