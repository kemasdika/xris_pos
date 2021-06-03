const initialState = {
    isLoading: false,
    isLogin: false
   }
   
   export const UserReducer = (state = initialState, action) => {
       // console.log('masuk')
       switch(action.type) {
           case "LOADING" :
               return{
                   ...state, isLoading:true
               }
           case "LOGIN":
               return {
                ...state, isLoading:false, isLogin: true
               }
           default:
               return state
       }
   }