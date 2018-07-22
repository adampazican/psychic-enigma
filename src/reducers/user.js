import { AUTHENTICATE_USER } from '../actions/action-types'

export const authenticateUser = (user) => { return { type: AUTHENTICATE_USER, payload: user } }

function userReducer(state = {}, action){
    switch(action.type){
        case AUTHENTICATE_USER:
            return action.payload
        default:
            return state
    }
}

export default userReducer