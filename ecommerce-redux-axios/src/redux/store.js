import { createStore } from "redux";
import reducers from "./reducers/index" ;

const store = createStore(
    reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
// currently we are not using any middleware like saga and thunk later we will be enhancing it
// second arg is state and it is currently empty

export default store;