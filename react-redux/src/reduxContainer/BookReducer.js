import { buy_book } from "./BookTypes"

// state of the application is inside a single object
const initialState = {
    NumberOfBooks : 20
}

// reducer
const BookReducer =(state = initialState, action) => {
    // we use switch case as because we may have different type of 
    // action at different time
    switch(action.type){
        case buy_book : return {
            ...state, NumberOfBooks : state.NumberOfBooks - 1
        }
        default : return state
    }
}
export default BookReducer;