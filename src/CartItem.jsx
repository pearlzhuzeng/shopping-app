/**
 * @providesModule CartItem
 * @flow
 */

import React from 'react'

import type { Product, Selection } from './schema'

type Props = Product &
  Selection & {
    onChange: (string, number) => void,
  }

const CartItem = (props: Props) => {
  const { productId, name, price, quantity, onChange } = props

  const handleChangeQuantity = (e: SyntheticInputEvent) => {
    onChange(productId, e.target.valueAsNumber)
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <input type="number" value={quantity} onChange={handleChangeQuantity} />
      </td>
      <td>{price * quantity}</td>
    </tr>
  )
}

export default CartItem
