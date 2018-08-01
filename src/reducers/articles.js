import { FETCH_ARTICLES } from '../action-types'

export const addArticles = articles => { return { type: FETCH_ARTICLES, payload: articles } }

function articlesReducer(state = [], action){
    switch (action.type){
        case FETCH_ARTICLES:
            return [...action.payload]
        default:
            return state
    }
}

export default articlesReducer