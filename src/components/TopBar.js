import React, { Component } from 'react'
import style from './TopBar.css'
import { connect } from 'react-redux'
import icon from '../icon.png'
import { toggleMenu } from '../reducers/user'
import { Link } from 'react-router-dom'

class TopBar extends Component{
	render(){
		return(
			<div id={style.topBar}>
				<Link to="/" className={style.name}>Name</Link>
				<a onClick={() => this.props.dispatch(toggleMenu())}>
					<img src={icon} className={style.userIcon} />
				</a>
			</div>
		)
	}
}

export default connect()(TopBar)
