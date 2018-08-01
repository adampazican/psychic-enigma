import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ImageList } from '../components/List'
import { addSubjects } from '../reducers/subjects'

class Home extends Component{
	componentDidMount = async () => {
		if(this.props.subjects.length > 0) return
		const response = await fetch('/api/subjects')
		const data = await response.json()
		this.props.dispatch(addSubjects(data))
	}

	render(){
		return (
			<div>
				{this.props.subjects ?
					<ImageList>
						{this.props.subjects.map((subject, i) => 
							<li 
								linkTo={`/${subject.alias}`} 
								image={subject.image}
								key={i}>{subject.name}</li>
						)}
					</ImageList> 
				: 'Loading'}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { subjects: state.subjects }
}

export default connect(mapStateToProps)(Home)