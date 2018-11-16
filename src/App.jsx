/**
 * @providesModule App
 * @flow
 */

import React, { Component } from 'react'
import { values, sum } from 'ramda'
import styled from 'styled-components'

import CatalogItem from './CatalogItem'
import CartItem from './CartItem'

import type { Catalog, Cart } from './schema'

type Props = { products: Catalog }
type State = { selections: Cart }

class App extends Component<Props, State> {
  state = {
    selections: {},
  }

  handleAddSelection = (id: string, quantity: number) => {
    const { selections } = this.state

    const oldQuantity = selections[id] ? selections[id].quantity : 0

    this.setState({
      selections: {
        ...selections,
        [id]: { productId: id, quantity: quantity + oldQuantity },
      },
    })
  }

  handleChangeSelection = (id: string, quantity: number) => {
    const { selections } = this.state
    this.setState({
      selections: {
        ...selections,
        [id]: { productId: id, quantity },
      },
    })
  }

  render () {
    return (
      <div>
        <Heading>Welcome! Please select items.</Heading>
        <Container>
          <div>
            <h2>Catalog</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {values(this.props.products).map(product => (
                  <CatalogItem
                    key={product.id}
                    {...product}
                    onSubmit={this.handleAddSelection}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <CartDisplay>
            <h2>My Cart</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {values(this.state.selections)
                  .filter(x => x.quantity > 0)
                  .map(({ quantity, productId }) => (
                    <CartItem
                      key={productId}
                      quantity={quantity}
                      productId={productId}
                      onChange={this.handleChangeSelection}
                      {...this.props.products[productId]}
                    />
                  ))}
              </tbody>
            </table>
            <Total>
              {' '}
              Your grand total is: $
              {sum(
                values(this.state.selections).map(
                  ({ quantity, productId }) =>
                    quantity * this.props.products[productId].price
                )
              )}
            </Total>
          </CartDisplay>
        </Container>
      </div>
    )
  }
}

const Heading = styled.h1`
  text-align: center;
  margin: 1em 0;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 3em;
  margin: 0 auto;
  max-width: 50em;
`

const CartDisplay = styled.div`
  align-self: start;
  background: #fffffe;
  border-radius: 0.2em;
  border: #ddd solid 1px;
  padding: 0 1.5em;
  margin-top: 2em;
`

const Total = styled.p`
  font-weight: bold;
  text-align: right;
`

export default App
