const initialState = {
    products:[],
    isLoading: false
   }
   
   export const ProductReducer = (state = initialState, action) => {
       // console.log('masuk')
       switch(action.type) {
           case "LOADING" :
               return{
                   ...state, isLoading:true
               }
           case "FETCH_PRODUCT":
               return {
                   ...state, products:action.payload,
                   isLoading:false
               }
           default:
               return state
       }
   }