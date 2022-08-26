import { actions } from './actions';

//Making the initial state where you define the necesary varials for to use in your reducer
const INITIAL_STATE = {
    people: [],
    isLoading: false,
}

//Making the reducer where you call all your actions  
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.setPeople:
            return {
                ...state,
                people: state.people.concat(action.payload) //making a concatenation for the results in the api 
            }
        default:
            return state;
    }
}

export default reducer;