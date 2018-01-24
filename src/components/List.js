import React from 'react'
import styles from './List.css'
import imageStyles from './ImageList.css'

function List(props){
	return(
		<ul className={props.styles.list}>
			{
				props.items.map((item, index) => <li style={item.style} key={index}>
					<p>{item.name}</p>
				</li>)
			}
		</ul>
	)
}

export const ImageList = (props) => <List { ...props} styles={ imageStyles } />
export const VerticalList = (props) => <List { ...props} styles={ styles } />
