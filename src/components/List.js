import React from 'react'
import styles from './List.css'
import imageStyles from './ImageList.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function List(props){
	return(
		<ul className={props.styles.list}>
			{props.children}
		</ul>
	)
}

function ListLinked(props){
	const children = <p>{props.children}</p>
	return (
		props.linkTo ? (
			<Link to={props.linkTo}>
				{children}
			</Link> 
		): children
	)
}

ListLinked.propTypes = {
	children: PropTypes.element.isRequired
}

export const ImageList = props => ( 
	<List styles={imageStyles}>
		{React.Children.map(props.children, child => 
			<li style={{ backgroundImage: 'url(' + child.props.image + ')' }}>
				<ListLinked {...child.props}>
					{child.props.children}
				</ListLinked>
			</li>
		)}
	</List>
)

ImageList.propTypes = {
	children: PropTypes.element.isRequired,
	linkTo: PropTypes.string,
	image: PropTypes.string
}

export const VerticalList = props => (
	<List styles={styles}>
		{React.Children.map(props.children, child => 
			<li className={styles.padding}>
				<ListLinked {...child.props}>
					{child.props.children}
				</ListLinked>
			</li>
		)}
	</List>
)

VerticalList.propTypes = {
	children: PropTypes.element.isRequired,
	linkTo: PropTypes.string
}