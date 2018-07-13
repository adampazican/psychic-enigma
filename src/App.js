import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import TopBar from './components/TopBar'
import styles from './App.css'
import Home from './routes/Home'
import LessonList from './routes/LessonList'
import LoginForm from './components/LoginForm'

function App(props){
	return (
		<Router>
			<div id="App">
				<TopBar />
				<LoginForm hidden="false" />
				<Switch>
					<Route path="/:subject" component={LessonList} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
		</Router>
	)
}

export default App;
