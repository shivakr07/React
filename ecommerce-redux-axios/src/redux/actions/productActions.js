import { Actiontypes } from "../constants/action-types"

export const setProducts = (products) => {
    return {
        type : Actiontypes.SET_PRODUCTS,
        payload : products,
    };
};

export const selectedProduct = (product) => {
    return {
        type : Actiontypes.SELECTED_PRODUCT,
        payload : product,
    };
};
export const removeSelectedProduct = (product) => {
    return {
        type : Actiontypes.SELECTED_PRODUCT,
        // payload : product,
        // we didnot get anything
    };
};

