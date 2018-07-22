import React, { Component } from 'react'
import style from './TopBar.css'
import { connect } from 'react-redux'
import icon from '../icon.svg'
import { toggleMenu } from '../reducers/user'

class TopBar extends Component{
	render(){
		return(
			<div id={style.topBar}>
				<a onClick={() => this.props.dispatch(toggleMenu())}>
					<img src={icon} className={style.userIcon} />
				</a>
			</div>
		)
	}
}

export default connect()(TopBar)
