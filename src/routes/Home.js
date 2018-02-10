import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ImageList } from '../components/List'

class Home extends Component{
	render(){
		console.log(this.props.subjects)
		return (
			<ImageList>
				<li 
					linkTo="/slovencina"
					image="https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png">Slovenčina</li>
				<li 
					linkTo="/matematika"
					image="https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png">Matematika</li>
				<li 
					linkTo="/nemcina"
					image="https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png">Nemčina</li>
				<li 
					linkTo="/informatika"
					image="https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png">Informatika</li>
			</ImageList>
		)
	}
}

function mapStateToProps(state) {
	return { subjects: state.subjects}
}

export default connect(mapStateToProps)(Home)