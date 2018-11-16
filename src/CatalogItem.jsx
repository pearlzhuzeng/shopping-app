/**
 * @providesModule CatalogItem
 * @flow
 */

import React, { Component } from 'react'

import type { Product } from './schema'

type Props = {
  ...Product,
  onSubmit: (id: string, quantity: number) => void,
}

type State = {
  quantity: number,
}

class CatalogItem extends Component<Props, State> {
  state = {
    quantity: 1,
  }

  handleChange = (e: SyntheticInputEvent<*>) => {
    this.setState({ quantity: parseInt(e.target.value, 10) })
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
            <Options />
          </select>
          <button type="submit" onClick={this.handleSubmit}>
            Add to cart
          </button>
        </td>
      </tr>
    )
  }
}

const Options = () => {
  return (
    <React.Fragment>
      {[...Array(10)].map((_, i) => (
        <option key={i} value={i}>
          {i}
        </option>
      ))}
    </React.Fragment>
  )
}

export default CatalogItem
