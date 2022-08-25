import axios from "axios"

export const actions = {
    setPeople: "SET_PEOPLE",
    setIsLoading: "SET_IS_LOADING",
}

export const setPeople = people => ({
    type: actions.setPeople,
    payload: people
})

export const setIsLoading = isLoading => ({
    type: actions.setIsLoading,
    payload: isLoading
})

export const getPeopleThunk = () => {
    return dispatch => {
        dispatch(setIsLoading(true))
        return axios.get(`https://swapi.dev/api/people/?page=${1}`)
            .then(res => dispatch(setPeople(res.data.results)))
            .finally(() => dispatch(setIsLoading(false)))
    }
}

