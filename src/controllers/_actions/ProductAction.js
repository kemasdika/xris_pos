import axios from './../../config'
export const fetchProduct = () =>{
    return async (dispatch) => {
        try {
        dispatch({
            type:'LOADING'
        })
        axios({
            url: '/products',
            method: 'GET',
            headers: {
                access_token: localStorage.getItem('access_token')
            }
            })
            .then(({ data }) => {
                console.log(data,'ini product')
                dispatch({
                    type:'FETCH_PRODUCT',
                    payload: data
                })
            })
            .catch((err) => {
                console.log(err)
            })
        } catch (err) {
            
        }
    }
}