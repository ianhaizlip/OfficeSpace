import React, {Component} from 'react';

import './top-bar.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap';









export default class TopBar extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
  
       



<div className="topnav">

  <div className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </div>


  )
}
};


