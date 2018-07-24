import React, { Component } from 'react'
import styles from './RegisterForm.css'

export default class RegisterForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    render(){
        return (
            <div id="RegisterForm" >
                <form onSubmit={this.handleSubmit} className={styles.registerForm}>
                    <legend>Register</legend>
                    <div>
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="UserName"
                            onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password"
                            onChange={this.handleInputChange} />
                    </div>
                    <div>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        )
    }

    handleInputChange = (event) => {
        const { target: { value, name } } = event
     
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        const { username, password } = this.state
        
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const doc = await response.json()
        console.log(doc)
    }
}