import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

import './side-bar.css';



export default class SideBar extends Component {

  constructor(props) {
    super(props);



  this.state={showDropdownMenu: false,


};

this.showDropdownMenu = this.showDropdownMenu.bind(this);
this.closeDropdownMenu = this.closeDropdownMenu.bind(this);
}

showDropdownMenu(event){
  event.preventDefault();

  this.setState({ showDropdownMenu: true}, () => {
    document.addEventListener('click', this.closeDropdownMenu);
   
  
});
}


closeDropdownMenu(event){
  if(!this.dropdownMenu.contains(event.target)){
    this.setState({showDropdownMenu: false}, () => {

    document.addEventListener('click', this.closeDropdownMenu);
  });
}
}

  //   this.toggle = this.toggle.bind(this);
  //   this.state = {
  //     isOpen: false
  //   };
  // }
  // toggle() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }

  render() {
    return (
<div className="content">
      <div className="wrapper">

    <nav className="sidebar">
        <div className="nav-side-menu">
       
   

    <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
     <div className="sidebar-header">
            <h3>Welcome Back!</h3>
        </div>


        <ul className="list-unstyled components">


            <li className="active"><a href="/dashboard"> <i className="fas fa-tachometer-alt fa-lg"></i>Dashboard</a></li>


            <li><a href="/inbox"><i className="fas fa-envelope fa-lg"></i>Inbox</a></li>
            
            <li><a href="/clients"><i className="fas fa-users fa-lg"></i> Manage Clients</a></li>

            <li>


  <a onClick={this.showDropdownMenu} className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <i className="fas fa-file fa-lg"></i>Manage Files
  </a>
{
  this.state.showDropdownMenu
  ? (

  <div className="dropdownMenu dropdown-menu-right" ref={(element) => {
    this.dropdownMenu = element;
  }}
  >
    <a className="dropdown-item" href="/files/received">Received</a>
       
    <a className="dropdown-item" href="/files/sent">Sent</a>
    <a className="dropdown-item" href="/files/new-file">Send File</a>


    
</div>
)
: (
null
)
}
  </li>
 <li><a href="/"><i className="fas fa-power-off fa-lg" id="icons"></i>Sign Out</a></li>
           
          
     </ul>
   </div>
 </nav>


    </div>
  </div>   
   


     
     
    )
  }

  
};

