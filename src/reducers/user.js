import { AUTHENTICATE_USER } from '../actions/action-types'
import { TOGGLE_MENU } from '../actions/action-types'

export const authenticateUser = (user) => { return { type: AUTHENTICATE_USER, payload: user } }
export const toggleMenu = () => { return { type: TOGGLE_MENU }}

function userReducer(state = {
    menuOpen: false
}, action){
    switch(action.type){
        case TOGGLE_MENU:
            return { ...state, menuOpen: !state.menuOpen }
        case AUTHENTICATE_USER:
            return { ...action.payload, menuOpen: state.menuOpen }
        default:
            return state
    }
}

export default userReducer