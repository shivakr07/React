import {combineReducers} from 'redux';

import {productReducer, selectedProductReducer} from './productReducer'

const reducers = combineReducers({
    allProducts : productReducer,
    product  : selectedProductReducer,
    // here you can define any key
})

export default reducers;