import React, { Component} from 'react'
import style from './LoginForm.css'
import { connect } from 'react-redux'
import { authenticateUser } from '../reducers/user'
import { Link } from 'react-router-dom'

class LoginForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    render(){
        return(
            <div id="LoginForm" className={ this.props.hidden === true ? style.hidden : null}>
                <div  className={ style.loginForm } >
                    <div className={style.triangle}></div>
                    <form onSubmit={this.handleSubmit}>
                        <legend>Login</legend>
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
                            <button type="submit">Login</button>
                            <button><Link to="/register">Register</Link></button>
                        </div>
                    </form>
                </div>
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
        
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        delete data.message
        this.props.dispatch(authenticateUser(data))
    }
}

function mapStateToProps(state) {
	return { user: state.user }
}

export default connect(mapStateToProps)(LoginForm)