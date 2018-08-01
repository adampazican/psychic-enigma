import { combineReducers } from 'redux'
import subjects from './subjects'
import user from './user'
import articles from './articles'

export default combineReducers({ subjects, user, articles })