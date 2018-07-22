import React, { Component } from 'react'
import style from './TopBar.css'
import icon from '../icon.svg'

class TopBar extends Component{
	render(){
		return(
			<div id={style.topBar}>
				<img src={icon} className={style.userIcon} />
			</div>
		)
	}
}

export default TopBar
