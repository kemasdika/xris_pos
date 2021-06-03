export const fetchProduct = () =>{
    return async () => {
        try {
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