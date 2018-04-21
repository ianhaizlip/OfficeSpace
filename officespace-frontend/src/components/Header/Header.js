import React, {Component} from 'react';

import {Row, Col, Container, Navbar} from 'reactstrap';

 class Header extends Component {
    render(){
        return (
           <Container fluid>
            <Navbar className="main-header" style={{backgroundColor:"#efefef",
                                                    height:"11vh", 
                                                    width:"100vw",
                                                    marginTop:"-15px",
                                                    paddingBottom:"40px", 
                                                    border: "none", 
                                                    backgroundColor:"#ffffff", 
                                                    boxShadow: "10px 0 50px 0 rgba(61, 110, 146, 0.1)",

                                                }}>
                
               

            </Navbar>
            </Container>
           
        )
    }
}
export default Header;