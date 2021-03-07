//reducers = store the state, and update it whenever they receive an action
const initialState = {
    currentUser: null  
}

export const user = (state = initialState, action) => {
    return{
        ...state,
        currentUser: action.currentUser
    }
}