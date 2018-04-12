import React, {Component} from 'react';

import './side-bar.css';

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









export default class SideBar extends Component {

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
      
       


        <div className="nav-side-menu">
       
    <div className="brand">
                    <img src="./img/Untitled-2.png" alt="logo" id="logo" /></div>
    <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
    <div className="menu-list">
        <ul id="menu-content" className="menu-content collapse out">
            <li>
                <a href="#">
                    <i className="fas fa-tachometer fa-lg"></i> Dashboard
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fas fa-envelope fa-lg"></i> Inbox
                </a>
            </li>
             <li>
                <a href="#">
                    <i className="fas fa-users fa-lg"></i> Clients
                </a>
            </li>
            <li data-toggle="collapse" data-target="#products" class="collapsed active">
                <a href="#"><i className="fas fa-file fa-lg"></i> Files <span className="arrow"></span></a>
            </li>
            <ul class="sub-menu collapse" id="products">
                <li><a href="#">Received</a></li>
                <li><a href="#">Sent</a></li>
                <li><a href="#">New File</a></li>
            </ul>
           
                 </ul>
                  <li>
                <a href="#">
                    <i className="fas fa-power-off fa-lg"></i> Sign out
                </a>
            </li>
             
 
</div>
</div>










)
    }
};


