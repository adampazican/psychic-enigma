import { FETCH_SUBJECTS } from '../actions/action-types'

export const addSubjects = (subjects) => { return { type: FETCH_SUBJECTS, payload: subjects } } 

function subjectsReducer(state = [], action) {
    switch (action.type) {
        case FETCH_SUBJECTS:
            return [...action.payload]
        default:
            return state
    }
}

export default subjectsReducer