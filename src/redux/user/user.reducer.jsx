import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
    currentUser: null,
}

const userReducer =  (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //on s'assure que la variable est constante et belle et bien 'SET_CURRENT_USER' dans notre cas
        case UserActionTypes.SET_CURRENT_USER:
        return {
            ...state,
            currentUser: action.payload
        }
        default:
            return state;
    }
}

export default userReducer;