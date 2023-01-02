/* eslint-disable eqeqeq */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import FormsComponent from './FormsComponent';

class Forms extends Component
{
    constructor(props)
    {
        super(props);
    } 

    state = 
    { 
        email: '',
        password: '',
        users: []
    }

    eventChangeFunction(e)
    {
        console.log('event: ', e.target.id, e.target.value);

        if ( e.target.id == "email" )
        {
            this.setState({email: e.target.value});
        }

        if ( e.target.id == "password" )
        {
            this.setState({password: e.target.value});
        }
    }


    submitStateEmailAndPassword()
    { 
        let newUser = 
        {
            mail: this.state.email,
            password: this.state.password,
            selected: false
        }

        let usersArray = this.state.users;

        usersArray.push(newUser);

        this.setState({users: usersArray, email: "", password: ""});
    }

    setSelectedUser = (index) =>
    {
        let usersArray = this.state.users;
        usersArray[index].selected=!usersArray[index].selected;

        this.setState({users: usersArray});
    }


    render()
    {
        return (
            <div className='row p-5' style = {{textAlign: 'left'}}>
                <form className='col-5'>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" onChange = {(e) => this.eventChangeFunction(e)} className="form-control" id="email" value = {this.state.email} aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputPassword">Password</label>
                        <input type="password" onChange = {(e) => this.eventChangeFunction(e)} className="form-control" id="password" value = {this.state.password} placeholder="Password"/>
                    </div>
                    <button type="button" className="btn btn-primary mt-4" onClick = {() => this.submitStateEmailAndPassword()}>Submit</button>
                </form>

                <hr className="mt-4"/>

                <div className = "row p-5">
                    {
                        this.state.users.map( (singleUser, index) => 
                        <FormsComponent user = {singleUser} userIndex = {index} setFunction = {this.setSelectedUser}/>
                    )}
                </div>
            </div>
        );
    }
}

export default Forms;