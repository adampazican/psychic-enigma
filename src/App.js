import React from 'react'
import TopBar from './components/TopBar'
import { ImageList as List } from './components/List'
import styles from './App.css'

const items = [
	{
		name: 'Slovenčina',
		style: {
			backgroundImage: 'url(https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png)'
		}
	},
	{
		name: 'Matematika',
		style: {
			backgroundImage: 'url(https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png)'
		}
	},
	{
		name: 'Nemčina',
		style: {
			backgroundImage: 'url(https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png)'
		}
	},
	{
		name: 'Informatika',
		style: {
			backgroundImage: 'url(https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png)'
		}
	},
]

function App(props){
	return (
		<div id="App">
			<TopBar />
			<List items={items} />
		</div>
	)
}

export default App;
