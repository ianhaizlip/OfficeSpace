import React from 'react';
import SideBar from '../sidebar/Nav';
import Header from '../Header/Header';
import Footer from '../footer/footer';
import CompanyCards from '../card/card';
import {Col, Row, Container, Card, CardBody, CardTitle} from 'reactstrap';


const Dashboard = () => (
    <div className="main-panel" style={{

  position: "relative",
  float:"right",
  width: "calc(100%-280px)",
  height:"95vh",

  backgroundColor:"#fafcfe",
  minHeight: "100%",
overflow: "auto",

  boxShadow: "0 30px 130px 0 rgba(90, 105, 116, 0.1)"
}}>
  <Header/>

  <div className="content" style={{padding:"10px"}}>



       <Col md="12">
            
         <Card style={{border: "1px solid #e3e3e3", borderRadius:"4px", marginBottom:"10px", marginTop:"10px"}}> 

<CardTitle style={{backgroundColor:"rgb(250, 252, 254)", fontSize:"30px", marginLeft:"100px"}}>Clients</CardTitle>

      <CardBody style={{backgroundColor:"rgb(250, 252, 254)"}}>
       

        <CompanyCards/>
         
</CardBody>
</Card>
         
  </Col>




</div>

</div>
         


);

export default Dashboard;