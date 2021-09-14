export const customerCash = (amount) => {
    return async (dispatch) => {
        try {
            dispatch({
                type:'CUSTOMER_CASH',
                payload: amount
            })
        } catch (err) {
          console.log(err)
        }
    }
}

export const transaction = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type:'TRANSACTION'
            })
        } catch (err) {
          console.log(err)
        }
    }
}