// const initialState = {
//     products:[],
//     isLoading: false,
//    }
   
//    export const ProductReducer = (state = initialState, action) => {
//        // console.log('masuk')
//        switch(action.type) {
//            case "LOADING" :
//                return{
//                    ...state, isLoading:true
//                }
//            case "FETCH_PRODUCT":
//                return {
//                    ...state, products:action.payload,
//                    isLoading:false
//                }
//             case "NEW_PRODUCT":
//                 return {
//                     ...state, products:action.payload,
//                     isLoading:false
//             }
//            default:
//                return state
//        }
//    }

import { productConstants } from '../_constants';

export function productReducer(state = {}, action) {
    switch (action.type) {
        case productConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case productConstants.GETALL_SUCCESS:
            return {
                items: action.products
            };
        case productConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}