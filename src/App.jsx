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

class App extends Component {
  props: Props
  state: State = {
    selections: {},
  }

  handleAddItem = (id: string, quantity: number) => {
    const { selections } = this.state

    const oldQuantity = selections[id] ? selections[id].quantity : 0

    this.setState({
      selections: {
        ...selections,
        [id]: { productId: id, quantity: quantity + oldQuantity },
      },
    })
  }

  render () {
    return (
      <div>
        <Heading>Welcome! Please select items.</Heading>
        <Container>
          <Section>
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
                {values(this.props.products).map(product =>
                  <CatalogItem
                    key={product.id}
                    {...product}
                    onSubmit={this.handleAddItem}
                  />
                )}
              </tbody>
            </table>
          </Section>
          <Section>
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
                {values(this.state.selections).map(({ quantity, productId }) =>
                  <CartItem
                    key={productId}
                    quantity={quantity}
                    productId={productId}
                    {...this.props.products[productId]}
                  />
                )}
              </tbody>
            </table>
            <p>
              Your grand total is:
              {sum(
                values(this.state.selections).map(
                  selection => selection.quantity * selection.price
                )
              )}
            </p>
          </Section>
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
  display: flex;
  margin: 0 auto;
  max-width: 50em;
`
const Section = styled.div`
  flex: 1 1 10em
`

export default App
