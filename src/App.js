import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import TopBar from './components/TopBar'
import styles from './App.css'
import Home from './routes/Home'
import LessonList from './routes/LessonList'

function App(props){
	return (
		<Router>
			<div id="App">
				<TopBar />
				<Switch>
					<Route path="/:subject" component={LessonList} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
		</Router>
	)
}

export default App;
