import axios from './../../config'
export const fetchCart = () =>{
    return async (dispatch) => {
        try {
        dispatch({
            type:'LOADING'
        })
        axios({
            url: '/carts',
            method: 'GET',
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          })
            .then(({ data }) => {
              dispatch({
                type:'FETCH_CART',
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

export const addToCart = (productId) =>{
    return async (dispatch) => {
        try {
        axios({
            url: `/carts/${productId}`,
            method: 'POST',
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          }).then(() => {
            dispatch(fetchCart())
          })
          .catch((err) => {
            console.log(err)
          })
        } catch (err) {
          console.log(err)
        }
    }
}

export const removeCart = (cartId) =>{
    return async (dispatch) => {
        try {
            axios({
                url: `/carts/${cartId}`,
                method: 'DELETE',
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
              }).then(() => {
                dispatch(fetchCart())
              })
              .catch((err) => {
                console.log(err)
              })
        } catch (err) {
          console.log(err)
        }
    }
}

export const minusCart = (cartId) =>{
    return async (dispatch) => {
        try {
            axios({
                url: `/carts/${cartId}`,
                method: 'PATCH',
                headers: {
                  access_token: localStorage.getItem('access_token')
                }
              }).then(() => {
                dispatch(fetchCart())
              })
              .catch((err) => {
                console.log(err)
              })
        } catch (err) {
          console.log(err)
        }
    }
}

export const totalAmount = (amount) =>{
  return async (dispatch) => {
      try {
        dispatch({
          type: 'TOTAL_AMOUNT',
          payload: amount
        })
      } catch (err) {
        console.log(err)
      }
  }
}

export const newCart = (cart) =>{
  return async (dispatch) => {
      try {
        dispatch({
          type: 'NEW_CART',
          payload: cart
        })
      } catch (err) {
        console.log(err)
      }
  }
}