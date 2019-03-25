const initialState = {Match: []}

const getMatch= (state = initialState, action)=>{
    let nextState
    switch (action.type) {
        case "GET_MATCH":
        nextState = {
            ...state,
            Match: action.value
        }
        return nextState || state

        case "ADD_LIGUE1":
        nextState = {
            ...state,
            Match: [...state.Match, action.value]
        }

        return nextState || state
        default: 
         return state
    }
}
export default getMatch