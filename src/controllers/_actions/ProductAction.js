import { productConstants } from '../_constants';
import { productService } from '../_services';

export const productActions = {
    getAll
};

function getAll(setIsLoading, setError) {
    setIsLoading(true)
    setError(null)
    return async dispatch => {
        dispatch(request());
        const res = await productService.getAll() ?? []
        dispatch(success(res));
        setIsLoading(false)
        setError(null)
        console.log(res,'<<<<<< res')
    };

    function request() { return { type: productConstants.GETALL_REQUEST, } }
    function success(products) { 
        console.log(products,'didalam success')
        return { type: productConstants.GETALL_SUCCESS, products } }
    function failure(error) { return { type: productConstants.GETALL_FAILURE, error } }
}