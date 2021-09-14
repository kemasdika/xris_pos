
// import { authHeader } from '../_helpers'
import axios from '../../config'

export const productService = {
    getAll
};

async function getAll() {
    try {
        const requestUrl = `/products`
        // const checkHeader = await authHeader(requestUrl, bodyOptions)
        const requestOptions = {
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        }

        const response = await
            axios.get(`${requestUrl}`, requestOptions)
                .then(response => {
                    console.log('Response fetch data payment_category adalah : ', response);
                    return {
                        data: response.data,
                    };
                })
                .catch(error => {
                    console.log(error);
                    return { message: error}
                    // if (!error.response) {
                    //     return {
                    //         // data: !response.data ? [] : response.data.data,
                    //         status_code: error?.data?.response_code ?? error.status,
                    //         message: error?.data?.message ?? 'There is a problem with your internal connection. Please try again later or call your provider'
                    //     };
                    // } else if (error?.response?.status === 401) {
                    //     return {
                    //         // data: !response.data ? [] : response.data.data,
                    //         status_code: error?.response?.status,
                    //         message: 'Unauthorized login!'
                    //     };
                    // } else if (error.response) {
                    //     return {
                    //         // data: !response.data ? [] : response.data.data,
                    //         status_code: error.response.data.response_code,
                    //         message: error.response.data.message
                    //     };
                    // } else {
                    //     return {
                    //         // data: !response.data ? [] : response.data.data,
                    //         status_code: error.response.response_code,
                    //         message: error.response.message
                    //     };
                    // }
                });
        return response;
    } catch (error) {
        console.log("🚀 ~ file: payment_category.service.js ~ line 68 ~ getAll ~ error", error)
    }

}
