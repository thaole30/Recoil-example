import React from 'react'
import CartInfo from './components/CartInfo/CartInfo'
import ProductList from './components/ProductList/ProductList'

const Cart = () => {
  return (
    <div>
        <ProductList/>
        <CartInfo/>
    </div>
  )
}

export default Cart