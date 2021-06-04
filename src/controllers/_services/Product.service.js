
import { authHeader } from '../_helpers'
import axios from 'axios'

export const paycategoryService = {
    getAll,
    createData,
    updateData,
};

async function getAll(param) {
    try {
        const bodyOptions = {}
        // const skip = param?.skip || "0"
        // const limit = param?.skip || "100000"
        const requestUrl = `/products`
        const checkHeader = await authHeader(requestUrl, bodyOptions)
        const requestOptions = {
            headers: checkHeader
        }

        const response = await
            axios.post(`${requestUrl}`, bodyOptions, requestOptions)
                .then(response => {
                    console.log('Response fetch data payment_category adalah : ', response);
                    return {
                        data: response.data.data,
                        status_code: response.data.response_code,
                        message: response.data.message
                    };
                })
                .catch(error => {
                    console.log(error.response);
                    if (!error.response) {
                        return {
                            // data: !response.data ? [] : response.data.data,
                            status_code: error?.data?.response_code ?? error.status,
                            message: error?.data?.message ?? 'There is a problem with your internal connection. Please try again later or call your provider'
                        };
                    } else if (error?.response?.status === 401) {
                        return {
                            // data: !response.data ? [] : response.data.data,
                            status_code: error?.response?.status,
                            message: 'Unauthorized login!'
                        };
                    } else if (error.response) {
                        return {
                            // data: !response.data ? [] : response.data.data,
                            status_code: error.response.data.response_code,
                            message: error.response.data.message
                        };
                    } else {
                        return {
                            // data: !response.data ? [] : response.data.data,
                            status_code: error.response.response_code,
                            message: error.response.message
                        };
                    }
                });
        return response;
    } catch (error) {
        console.log("🚀 ~ file: payment_category.service.js ~ line 68 ~ getAll ~ error", error)
    }

}

async function createData(param) {
    const newParam = { ...param }
    const bodyOptions = {
        "name": newParam?.descriptions,
        "description": newParam?.descriptions,
        "code": newParam?.descriptions?.replace(/ /g, "_"),
        "status": "Active",
        "payment_category_permissions": newParam.payment_category_permission,
        "payment_category_validations": [],
        "inputter": {
            "name": newParam?.inputter?.internal_user?.name,
            "_key": newParam?.inputter?.internal_user?._key,
            "payment_category": newParam?.inputter?.payment_category
        }
    };
    const requestUrl = `/internaluser/payment_category/add-payment_category`
    const checkHeader = await authHeader(requestUrl, bodyOptions)
    const requestOptions = {
        headers: checkHeader
    };
    const response = await
        axios.post(`${requestUrl}`, bodyOptions, requestOptions)
            .then(response => {
                console.log('Response save payment_category adalah : ', response);
                if (response.data.response_code === 'S1') {
                    return {
                        data: response.data.data,
                        status_code: response.data.response_code,
                        message: response.data.message
                    };
                } else {
                    return {
                        // data: response.data.data,
                        status_code: response.data.status,
                        message: 'Endpoint is not exist'
                    };
                }
            })
            .catch(error => {
                // Error 😨
                console.log(error.response);
                if (error?.response?.status === 401) {
                    return {
                        // data: !response.data ? [] : response.data.data,
                        status_code: error?.response?.status,
                        message: 'Unauthorized login!'
                    };
                } else if (error?.response?.status === 404) {
                    return {
                        // data: !response.data ? [] : response.data.data,
                        status_code: error?.response?.status,
                        message: 'Endpoint is not exist.'
                    };
                } else if (error.response) {
                    return {
                        // data: !response.data ? [] : response.data.data,
                        status_code: error.response.data.response_code,
                        message: error.response.data.message
                    };
                } else if (!error.response) {
                    return {
                        // data: !response.data ? [] : response.data.data,
                        status_code: error?.data?.response_code ?? error.status,
                        message: error?.data?.message ?? 'There is a problem with your internal connection. Please try again later or call your provider'
                    };
                } else {
                    return {
                        // data: !response.data ? [] : response.data.data,
                        status_code: error.response.response.code,
                        message: error.response.mesaage
                    };
                }
            });
    return response;
}

async function updateData(param) {
    const newParam = { ...param }
    const bodyOptions = {
        "_key": param._key,
        "name": newParam?.descriptions,
        "description": newParam?.descriptions,
        "code": newParam?.descriptions?.replace(/ /g, "_"),
        "status": "Active",
        "payment_category_permissions": newParam.payment_category_permission,
        "payment_category_validations": [],
        "inputter": {
            "name": newParam?.inputter?.internal_user?.name,
            "_key": newParam?.inputter?.internal_user?._key,
            "payment_category": newParam?.inputter?.payment_category
        }
    };
    const requestUrl = `/internaluser/payment_category/update-payment_category/${param._key}`
    const checkHeader = await authHeader(requestUrl, bodyOptions)
    const requestOptions = {
        headers: checkHeader
    };
    const response = await
        axios.put(`${requestUrl}`, bodyOptions, requestOptions)
            .then(response => {
                console.log('Response update data payment_category adalah : ', response);
                return {
                    data: response.data.data,
                    status_code: response.data.response_code,
                    message: response.data.response.message
                };
            })
            .catch(error => {
                // Error 😨
                console.log(error.response);
                if (error.response) {
                    return {
                        // data: !response.data ? [] : response.data.data,
                        status_code: error.response.data.response_code,
                        message: error.response.data.message
                    };
                } else if (!error.response) {
                    return {
                        // data: !response.data ? [] : response.data.data,
                        status_code: error?.data?.response_code ?? error.status,
                        message: error?.data?.message ?? 'There is a problem with your internal connection. Please try again later or call your provider'
                    };
                } else if (error?.response?.status === 401) {
                    return {
                        // data: !response.data ? [] : response.data.data,
                        status_code: error?.response?.status,
                        message: 'Unauthorized login!'
                    };
                } else {
                    return {
                        // data: !response.data ? [] : response.data.data,
                        status_code: error.response.response.code,
                        message: error.response.mesaage
                    };
                }
            });
    return response;
}
