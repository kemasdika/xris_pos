const initialState = {
    customerCash:0,
    isLoading: false,
    transaction: false
   }
   
   export const PaymentReducer = (state = initialState, action) => {
       // console.log('masuk')
       switch(action.type) {
           case "LOADING" :
               return{
                   ...state, isLoading:true
               }
           case "CUSTOMER_CASH":
               return {
                   ...state, customerCash:action.payload,
                   isLoading:false
               }
            case "TRANSACTION":
                return {
                    ...state, transaction:true,
                    isLoading:false
                }
           default:
               return state
       }
   }