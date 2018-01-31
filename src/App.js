import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TopBar from './components/TopBar'
import styles from './App.css'
import Home from './routes/Home'


function App(props){
	return (
		<Router>
			<div id="App">
				<TopBar />
				<Route path="/" component={Home} />
			</div>
		</Router>
	)
}

export default App;
