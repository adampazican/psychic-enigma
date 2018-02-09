import React from 'react'
import styles from './List.css'
import imageStyles from './ImageList.css'
import { Link } from 'react-router-dom'

function List(props){
	return(
		<ul className={props.styles.list}>
			{props.children}
		</ul>
	)
}

function ImageListLinked(props){
	const children = <p>{props.children}</p>
	return (
		props.linkTo ? (
			<Link to={props.linkTo}>
				{children}
			</Link> 
		): children
	)
}

export const ImageList = props => ( 
	<List styles={imageStyles}>
		{React.Children.map(props.children, child => 
			<li style={{ backgroundImage: 'url(' + child.props.image + ')' }}>
				<ImageListLinked {...child.props}>
					{child.props.children}
				</ImageListLinked>
			</li>
		)}
	</List>
)

export const VerticalList = (props) => (
	<List styles={styles}>
		{React.Children.map(props.children, child => 
			<li className={styles.padding}>
				<ImageListLinked {...child.props}>
					{child.props.children}
				</ImageListLinked>
			</li>
		)}
	</List>
)