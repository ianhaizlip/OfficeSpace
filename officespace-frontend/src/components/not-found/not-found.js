
import React from 'react';
const styles={
	fontFamily:'nunito',
	fontWeight: 'bold'
};

function NotFound() {
	return (
		<div className="jumbotron text-center" style={{height: "100vh", backgroundColor:"#ffce11"}}>
			<h1 className="display-3" style={styles}>404 Not Found</h1>
			<p className="lead" style={{fontFamily:"nunito", fontWeight:"bold", color:"#ffffff"}}>This is embarrassing...</p>
			<a className="btn btn-default" href='/' style={{border: '1px solid black', marginTop:"60px", marginLeft:"-10px",color: "#ffffff", width: "17%", textAlign: "text-center"}}>Go back to your home...</a>
			<div className="img">
					<img src={require ('./img/dog.gif')} style={{marginTop:"-95px", marginLeft:"-700px"}}/>
</div>
		</div>


	)
}

export default NotFound;