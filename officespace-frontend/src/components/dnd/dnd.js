import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import {Card, Row, CardHeader} from 'reactstrap';
import './dnd.css';



class Basic extends Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    return (
    

<Card style={{height:"65vh", width:"45vw", marginTop:"100px", marginLeft:"100px"}}>
<CardHeader style={{backgroundColor:"#12a79d"}}>
          <h2 style={{marginTop:"20px", color:"#ffffff"}}>Upload</h2>
          </CardHeader>
          <ul>
            {
              this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)}  style={{height:"40vh", width:"30vw", borderStyle:"dashed", borderColor:"#4363A8 ", marginTop:"70px", marginLeft:"100px"}}>
          <img src={require("../img/clouds.png")} id="image" />
            <p style={{fontSize:"30px", marginLeft:"30px"}}>Drag & Drop Files to Upload</p>
            <p>Document type supported pdf, docx, txt, jpeg</p>
          
          </Dropzone>
           
        </div>

      
     
   
  </Card>

      
       


    );
  }
}

export default Basic;