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

// import { productConstants } from '../_constants';
// import { productService } from '../_services';

// export const accountActions = {
//     getAll,
//     createData,
//     updateData,
// };

// function getAll(setIsLoading, setError, setOpen, setDialogType, setTitle, setMessage, param) {
//     setIsLoading(true)
//     setError(null)
//     return async dispatch => {
//         dispatch(request());
//         const res = await productService.getAll(param) ?? {}
//         if (res.status_code === 'S1') {
//             dispatch(success(res));
//             setIsLoading(false)
//             setError(null)
//         } else if (res.status_code === 500) {
//             dispatch(failure(res));
//             setIsLoading(false)
//             setError('Request timeout!')
//         } else {
//             dispatch(failure(res));
//             setIsLoading(false)
//             setError(`${res.message}`)
//         }

//     };

//     function request() { return { type: productConstants.GETALL_REQUEST, } }
//     function success(products) { return { type: productConstants.GETALL_SUCCESS, products } }
//     function failure(error) { return { type: productConstants.GETALL_FAILURE, error } }
// }

// function createData(param, setIsLoading, setError, setOpen, setDialogType, setTitle, setMessage) {
//     setIsLoading(true)
//     setError(null)
//     return async dispatch => {
//         dispatch(request());
//         const res = await productService.createData(param)
//         if (res.status_code === 'S1') {
//             dispatch(success(res))
//             setIsLoading(false)
//             setError(null)
//             setIsLoading(false)
//             setError(`${res.message}`)
//             setDialogType("Success")
//             setTitle("Success")
//             setMessage(`${res.message}`)
//             setOpen(true)
//         } else if (res.status_code === 500) {
//             dispatch(failure(res))
//             setIsLoading(false)
//             setError(`${res.message}`)
//             setDialogType("Error")
//             setTitle("Failed")
//             setMessage(`${res.message}`)
//             setOpen(true)
//         } else if (res.status_code === 401) {
//             dispatch(failure(res))
//             setIsLoading(false)
//             setError(`${res.message}`)
//             setDialogType("Error")
//             setTitle("Session is over!")
//             setMessage(`${res.message}`)
//             setOpen(true)
//         } else if (!res.status_code) {
//             dispatch(failure(res))
//             setIsLoading(false)
//             setError(`${res.message}`)
//             setDialogType("Error")
//             setTitle("Failed")
//             setMessage(`${res.message}`)
//             setOpen(true)
//         } else {
//             dispatch(failure(res))
//             setIsLoading(false)
//             setError(res?.message ?? `Error Unknown : Maybe there's something wrong with your connection!`)
//             setDialogType("Error")
//             setTitle("Failed")
//             setMessage(res?.message ?? `Error Unknown : Maybe there's something wrong with your connection!`)
//             setOpen(true)
//         }
//     };

//     function request() { return { type: productConstants.REGISTER_REQUEST, } }
//     function success(account) { return { type: productConstants.REGISTER_SUCCESS, account } }
//     function failure(error) { return { type: productConstants.REGISTER_FAILURE, error } }
// }

// function updateData(param, setIsLoading, setError, setOpen, setDialogType, setTitle, setMessage) {
//     setIsLoading(true)
//     setError(null)
//     return async dispatch => {
//         dispatch(request());
//         const res = await productService.updateData(param)
//         if (res.status_code === 'S1') {
//             dispatch(success(res))
//             setIsLoading(false)
//             setError(null)
//             setIsLoading(false)
//             setError(`${res.message}`)
//             setDialogType("Success")
//             setTitle("Success")
//             setMessage(`${res.message}`)
//             setOpen(true)
//         } else if (res.status_code === 500) {
//             dispatch(failure(res))
//             setIsLoading(false)
//             setError(`${res.message}`)
//             setDialogType("Error")
//             setTitle("Failed")
//             setMessage(`${res.message}`)
//             setOpen(true)
//         } else {
//             dispatch(failure(res))
//             setIsLoading(false)
//             setError(`${res.message}`)
//             setDialogType("Error")
//             setTitle("Failed")
//             setMessage(`${res.message}`)
//             setOpen(true)
//         }
//     };

//     function request() { return { type: productConstants.UPDATE_REQUEST, } }
//     function success(account) { return { type: productConstants.UPDATE_SUCCESS, account } }
//     function failure(error) { return { type: productConstants.UPDATE_FAILURE, error } }
// }