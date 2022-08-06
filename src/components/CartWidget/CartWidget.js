import React from 'react'

const CartWidget = (props) => {
  return (
    <div>
      <img src="/images/cart.svg" alt='cart' className='CartImg'/>
      {console.log(props.totalQuantity)}
      <span>{ props.totalQuantity }</span>
    </div>
  )
}

export default CartWidget