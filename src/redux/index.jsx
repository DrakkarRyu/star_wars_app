import { actions } from './actions';

const INITIAL_STATE = {
    people: [],
    isLoading: false,
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.setPeople:
            return {
                ...state,
                people: action.payload
            }
        default:
            return state;
    }
}

export default reducer;