import { Actiontypes } from "../constants/action-types";

const initialState = {
    products : []
}


// export const productReducer = (state,action) => {  // we will do destructing
export const productReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case Actiontypes.SET_PRODUCTS : 
            return {...state, products:payload};

        default : 
            return state;
    }
}

export const selectedProductReducer = (state={}, {type, payload}) => {
    switch(type) {
        case Actiontypes.SELECTED_PRODUCT:
            return{...state, ...payload};
            
        case Actiontypes.REMOVE_SELECTED_PRODUCT:
            return{};
            
        default:
            return state;
    }
}