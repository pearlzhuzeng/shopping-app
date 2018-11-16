/**
 * @providesModule CartItem
 * @flow
 */

import React from 'react'

import type { Product, Selection } from './schema'

type Props = {
  ...Product,
  ...Selection,
  onChange: (string, number) => void,
}

class CartItem extends React.Component<Props> {
  handleChangeQuantity = (e: SyntheticInputEvent<*>) => {
    const { productId, onChange } = this.props
    onChange(productId, e.target.valueAsNumber || 0)
  }

  render () {
    const { name, price, quantity } = this.props

    return (
      <tr>
        <td>{name}</td>
        <td>${price}</td>
        <td>
          <input
            type="number"
            value={this.props.quantity}
            onChange={this.handleChangeQuantity}
          />
        </td>
        <td>${price * quantity}</td>
      </tr>
    )
  }
}

export default CartItem
