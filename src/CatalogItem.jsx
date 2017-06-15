/**
 * @providesModule CatalogItem
 * @flow
 */

import React, { Component } from 'react'

import type { Product } from './schema'

class CatalogItem extends Component {
  props: Product & {
    onSubmit: (id: string, quantity: number) => void,
  }

  state: { quantity: number } = {
    quantity: 1,
  }

  handleChange = (e: SyntheticInputEvent) => {
    this.setState({ quantity: parseInt(e.target.value) })
  }

  handleSubmit = () => {
    const { id, onSubmit } = this.props
    const { quantity } = this.state

    onSubmit(id, quantity)
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
          <button type="submit" onClick={this.handleSubmit}>
            Add to cart
          </button>
        </td>
      </tr>
    )
  }
}

export default CatalogItem
