import axios from './../../config'
import Swal from 'sweetalert2'

export const login = (input) => {
    return async (dispatch) => {
        try {   
            dispatch({
                type:'LOADING'
            })
            axios({
                url: '/loginCustomer',
                method: 'POST',
                data: {
                    email: input.username,
                    password: input.password
                }
                })
                .then(({ data }) => {
                    localStorage.setItem('access_token', data.access_token)
                    dispatch ({
                        type: 'LOADING',
                    })
                    Swal.fire({
                        icon: 'success',
                        text: 'Welcome to XRIS POS'
                    })
                    dispatch ({
                        type: 'LOGIN',
                    })
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: err.response.data.message
                      })
                      dispatch ({
                        type: 'ERROR',
                    })
                    console.log(err)
                })
        } catch (error) {
            dispatch ({
                type: 'ERROR',
            })
            console.log(error)
        }
    }
}