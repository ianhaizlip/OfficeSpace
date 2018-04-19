
 import React, { Component } from 'react';

import './form.css';

class UserForm extends Component
{

	constructor(props)
	{
		super(props);
	



		this.state={user: {
			name: null,
			species: null,
			alignment: null
		}

	};

this.onKeyUpInputTextUsername = this.onKeyUpInputTextUsername.bind(this);



this.onKeyUpInputTextPassword = this.onKeyUpInputTextPassword.bind(this);
this.onKeyUpInputTextAccount = this.onKeyUpInputTextAccount.bind(this);
this.onKeyUpInputTextEmail = this.onKeyUpInputTextEmail.bind(this);
this.onKeyUpInputTextBucket = this.onKeyUpInputTextBucket.bind(this);
this.onKeyUpInputTextImgUrl = this.onKeyUpInputTextImgUrl.bind(this);


this.onChangeInputSelectRegion = this.onChangeInputSelectRegion.bind(this);



this.onClickSubmitForm = this.onClickSubmitForm.bind(this);

	}

onKeyUpInputTextUsername(event)
{

const user= {
	...this.state.user,

username:event.target.value
};

this.setState({user});

}

onKeyUpInputTextPassword(event)
{

const user={

	...this.state.user,

	password:event.target.value
};

this.setState({user});

}

onKeyUpInputTextAccount(event)
{

const user={

	...this.state.user,

	account:event.target.value
};

this.setState({user});

}
onChangeInputSelectRegion(event)
{

const user={

	...this.state.user,

	region:event.target.value
};

this.setState({user});

}
onKeyUpInputTextEmail(event)
{

const user={

	...this.state.user,

	email:event.target.value
};

this.setState({user});

}
onKeyUpInputTextBucket(event)
{

const user={

	...this.state.user,

	bucket:event.target.value
};

this.setState({user});

}
onKeyUpInputTextImgUrl(event)
{

const user={

	...this.state.user,

	imgUrl:event.target.value
};

this.setState({user});

}



onClickSubmitForm(event)
{
	console.log("trying");
	const user={
		...this.state.user,
		submit:event.target.value
	};

	this.setState({user});
}

	render()
	{
		return(
			<div className="card">
			<div className="user-form shadow">
			<p className="font-form paragraph-header">Clients</p>
			<div className="form-group">
                    <label htmlFor="inputTextUsername">Username</label>
                    <input onKeyUp={this.onKeyUpInputTextUsername} type="text" className="form-control" id="inputTextUsername" placeholder="Username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="inputTextPassword">Password</label>
                    <input onKeyUp={this.onKeyUpInputTextPassword} type="text" className="form-control" id="inputTextPassword" placeholder="Password"/>
                </div>
                 <div className="form-group">
                    <label htmlFor="inputTextAccount">Account</label>
                    <input onKeyUp={this.onKeyUpInputTextAccount} type="text" className="form-control" id="inputTextAccount" placeholder="Account"/>
                </div>
                 
                 <div className="form-group">
                    <label htmlFor="inputTextEmail">Email</label>
                    <input onKeyUp={this.onKeyUpInputTextEmail} type="text" className="form-control" id="inputTextEmail" placeholder="Email"/>
                </div>
                 <div className="form-group">
                    <label htmlFor="inputTextBucket">Bucket</label>
                    <input onKeyUp={this.onKeyUpInputTextBucket} type="text" className="form-control" id="inputTextBucket" placeholder="Bucket"/>
                </div>
				 <div className="form-group">
                    <label htmlFor="inputTextImgUrl">Image URL</label>
                    <input onKeyUp={this.onKeyUpInputTextImgUrl} type="text" className="form-control" id="inputTextImgUrl" placeholder="URL"/>
                </div>

                 <div className="form-group">
                    <label htmlFor="inputTextCreatedAt">Created At</label>
                    <input onKeyUp={this.onKeyUpInputTextCreatedAt} type="text" className="form-control" id="inputTextCreatedAt" placeholder="Created at"/>
                </div>


                 <div className="form-group">
                    <label htmlFor="inputTextUpdatedAt">Updated At</label>
                    <input onKeyUp={this.onKeyUpInputTextUpdatedAt} type="text" className="form-control" id="inputTextUpdatedAt" placeholder="Updated at"/>
                </div>

  					<div className="form-group">
                    <label htmlFor="inputSelectRegion">Region</label>
                    <select onChange={this.onChangeInputSelectRegion} className="form-control" 
                    id="inputSelectRegion" >


                    <option value="option">Select Region</option>
  					<option value="option">US-East-1 (Ohio)</option>
 					<option value="option">US-East-2 (N. Virginia)</option>
 					 <option value="option">US-West-1 (Oregon)</option>
 					 <option value="option">US-West-2 (N. California)</option>
 					 <option value="option">EU-West-1 (Ireland)</option>
 					<option value="option">EU-West-2 (London)</option>
 					 <option value="option">EU-West-3 (Paris)</option>


		
				</select>

						</div>		 



				 

		  <button onClick={this.onClickSubmitForm}  className="btn btn-info w-10">Submit</button>
 			
				

                </div>

	 </div>	

			
			);
	}
}

export default UserForm;

