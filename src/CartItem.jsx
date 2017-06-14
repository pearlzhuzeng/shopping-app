/**
 * @providesModule CartItem
 * @flow
 */

import React from 'react'

import type { Product, Selection } from './schema'

type Props = Product & Selection

const CartItem = (props: Props) => {
  const { name, price, quantity } = props
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{price * quantity}</td>
    </tr>
  )
}

export default CartItem
