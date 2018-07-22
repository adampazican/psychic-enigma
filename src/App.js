import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import TopBar from './components/TopBar'
import styles from './App.css'
import Home from './routes/Home'
import LessonList from './routes/LessonList'
import LoginForm from './components/LoginForm'
import Register from './routes/Register'

function App({ user }){
	return (
		<Router>
			<div id="App" className={styles.App}>
				{console.log(user)}
				<TopBar />
				<LoginForm hidden={!user.menuOpen} />
				<Switch>
					<Route path="/register" component={Register} />
					<Route path="/:subject" component={LessonList} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
		</Router>
	)
}

function mapStateToProps(state) {
	return { user: state.user }
}

export default connect(mapStateToProps)(App)
