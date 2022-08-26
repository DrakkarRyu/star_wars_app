import axios from "axios"

//Define the actions, the format is always
//setName : "SET_NAME"
export const actions = {
    setPeople: "SET_PEOPLE",
    setIsLoading: "SET_IS_LOADING",
}

//making and exporing the actions
export const setPeople = people => ({
    type: actions.setPeople,
    payload: people
})

export const setIsLoading = isLoading => ({
    type: actions.setIsLoading,
    payload: isLoading
})

//Making and exporting the thunks
//Here you can make the petitions with fetch or axios 

export const getPeopleThunk = page => { //received page as params
    const params = { page: page }
    return dispatch => {
        dispatch(setIsLoading(true))
        return axios.get(`https://swapi.dev/api/people/?page=`, { params: params }) //making a dinamic form
            .then(res => dispatch(setPeople(res.data.results)))
            .finally(() => dispatch(setIsLoading(false)))
    }
}

