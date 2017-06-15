/**
 * @providesModule CartItem
 * @flow
 */

import React, { Component } from 'react'

import type { Product, Selection } from './schema'

type Props = Product & Selection

class CartItem extends Component {
  props: Props
  state = {
    quantity: this.props.quantity,
  }

  handleChange = (e: SyntheticInputEvent) => {
    this.setState({ quantity: parseInt(e.target.value) })
  }

  render () {
    const { name, price } = this.props
    return (
      <tr>
        <td>{name}</td>
        <td>${price}</td>
        <td>
          <select value={this.state.quantity} onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </td>
        <td>${price * this.state.quantity}</td>
      </tr>
    )
  }
}

export default CartItem
