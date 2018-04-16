 import React, { Component } from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';

import { Table } from 'reactstrap';

import { Button, ButtonGroup } from 'reactstrap';

const columns = [{
  dataField: 'id',
  text: 'File'
}, {
  dataField: 'name',
  text: 'Company Name'
}, {
  dataField: 'date',
  text: 'File Date'
}];

const selectRowProp = {
  mode: 'checkbox'
};



  
export default class FileTable extends Component {
  constructor (props) {
    super(props);
    this.state={
      data:data
    }

    this.sortBy = this.sortBy.bind(this)
  }
  sortBy(key){
    this.setState((
      data: data.sort((a, b) => a < b)
      ))
    this.state = { cSelected: [] };

     this.onCheckboxBtnClick.bind(this);
  }
  }



  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }



  render() {
    return (

      <Table hover bordered style={{width:"900px", marginLeft:"300px"}}>

        <thead>Received Files
 
          <tr>
         <label >
          Select
          
        </label>
            </tr>
          <tr>
            <th><input
            name="File Name"
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.handleInputChange} /></th>
        
            <th>Company Name</th>
            <th>File Name</th>
            <th>File Received</th>
          </tr>
        </thead>
        <tbody>
        {
          props.data.map(row =>(
          <tr>
          <td>{row.rank}</td>
          <td>{row.rank}</td>
          <td>{row.rank}</td>
          <td>{row.rank}</td>
          <td>{row.rank}</td>
          </tr>
          ))
        }
          <tr>
            <th scope="row"><input
            name="File Name"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} /></th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row"><input
            name="File Name"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} /></th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row"><input
            name="File Name"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} /></th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row"><input
            name="File Name"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} /></th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row"><input
            name="File Name"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} /></th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row"><input
            name="File Name"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} /></th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
           <tr>
            <th scope="row"><input
            name="File Name"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} /></th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row"><input
            name="File Name"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} /></th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row"><input
            name="File Name"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} /></th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row"><input
            name="File Name"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} /></th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row"><input
            name="File Name"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} /></th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row"><input
            name="File Name"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} /></th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row"><input
            name="File Name"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} /></th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row"><input
            name="File Name"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} /></th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row"><input
            name="File Name"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} /></th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row"><input
            name="File Name"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} /></th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
         
          
           
        </tbody>
      </Table>
     
    );
  }
}



