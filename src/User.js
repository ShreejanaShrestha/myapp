import React, { Component } from 'react';
class User extends Component{
	constructor(props) {
		super(props)
		this.state = {
			fullName : props.firstName + ' ' + props.lastName,
			username : 'userName'
		}
	}
	render() {
		return (
			<div>
				<h1 onClick={() => this.handleClick()}>
				This is {this.state.fullName}.
				</h1>
				<p>{this.state.username}</p>
				<input name='username' type='text' value={this.state.username} onChange={(event)=> this.handleChange(event)}
				 />
				</div>

			)
	}
	handleClick = function() {
		alert(this.state.fullName +' Clicked')
	}

	handleChange = function(event) {
		this.setState({
			username: event.target.value
		})
	}

}
//const handleClick = function(name)
//{
//	alert(name + 'clicked.')
//}
export default User;