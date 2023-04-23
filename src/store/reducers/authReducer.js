const initState ={
    userDetails: null
}

const reducer =(state = initState,action) => {
    switch (action.type) {
        case 'DUMMY':
            return{
                ...state,
            };
        default:
            return state;    
    }
};//by that redux will be able to change store state

export default reducer;