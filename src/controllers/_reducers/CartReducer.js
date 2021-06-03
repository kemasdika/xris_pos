const initialState = {
    carts:[],
    isLoading: false,
    totalPrice: 0,
    cartsCount: 0,
    totalAmount: 0
   }
   
   export const CartReducer = (state = initialState, action) => {
       // console.log('masuk')
       switch(action.type) {
           case "LOADING" :
               return{
                   ...state, isLoading:true
               }
           case "FETCH_CART":
               return {
                   ...state, carts:action.payload.cart, cartsCount: action.payload.cart.length,
                   totalPrice: action.payload.total,
                   isLoading:false
               }
            case "TOTAL_AMOUNT":
                return {
                    ...state, totalAmount:action.payload,
                    isLoading:false
                }
           default:
               return state
       }
   }