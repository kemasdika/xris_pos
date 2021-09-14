import { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productActions } from '../../controllers/_actions/ProductAction'
import newProduct from './../../config/collection/product.json'
export default function useProducts(setIsLoading, setError) {
  const [data, setData] = useState([])
  const {transaction} = useSelector((state) => state.payment)
  const {items, loading, error} = useSelector(state => state.product);
  const dispatch = useDispatch()

  const initFetch = useCallback((param) => {
    dispatch(productActions.getAll(setIsLoading, setError));
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    const DataLoaded = items?.data ?? []
    if(transaction) {
      setData(newProduct)
    }else {
      setData(DataLoaded)
    }
}, [items])
console.log(items?.data,'dari hooks')
  return [data, initFetch]
}
