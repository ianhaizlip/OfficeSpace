
import React from 'react';
import {Button, Container, Row, Col} from 'reactstrap';

const styles={
	fontFamily:'nunito',
	fontWeight: 'bold'


};

const styles2={
	color: "#ffffff",
	 textAlign: "text-center",
	 marginTop:"-25px",
	 fontSize:"13px"

};



function NotFound() {
	return (
		
		<div className="jumbotron text-center" style={{height: "100vh", backgroundColor:"#ffce11", flex:"1"}}>
		
			<h1 className="display-3" style={styles}>404 Not Found</h1>
			
			<p className="lead" style={{fontFamily:"nunito", fontWeight:"bold", color:"#ffffff", fontSize:"30px"}}>This is so embarrassing...</p>

			<Button style={{ marginTop:"60px", marginLeft:"-10px",backgroundColor:"#1698b8", borderRadius:"15px", color: "#ffffff"
}}>Go back home</Button>
			<div className="img">
					<img src={require ('../img/dog.gif')} style={{marginTop:"-5px", marginLeft:"-500px", width:"20%"}}/>

		</div>

</div>

	
)
}


export default NotFound;