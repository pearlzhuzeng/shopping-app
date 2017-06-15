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

class CartItem extends React.Component {
  props: Props
  state = { value: this.props.quantity }

  handleChangeQuantity = (e: SyntheticInputEvent) => {
    const { productId, onChange } = this.props
    onChange(productId, e.target.valueAsNumber || 0)
  }

  componentWillReceiveProps (nextProps: Props) {
    if (`${nextProps.quantity}` !== this.state.value) {
      this.setState({ value: `${nextProps.quantity}` })
    }
  }

  render () {
    const { name, price, quantity } = this.props

    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>
          <input
            type="number"
            value={this.state.value}
            onChange={(e: SyntheticInputEvent) =>
              this.setState({ value: e.target.value })}
            onBlur={this.handleChangeQuantity}
          />
        </td>
        <td>{price * quantity}</td>
      </tr>
    )
  }
}

export default CartItem
