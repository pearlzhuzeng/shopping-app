/**
 * @providesModule App
 * @flow
 */

import React, { Component } from 'react'
import { append } from 'ramda'
import styled from 'styled-components'
import './App.css'

const products = [
  {
    id: 'computer',
    name: 'computer',
    price: 2000,
  },
  {
    id: 'mouse',
    name: 'mouse',
    price: 80,
  },
  {
    id: 'trackpad',
    name: 'trackpad',
    price: 130,
  },
  {
    id: 'keyboard',
    name: 'keyboard',
    price: 100,
  },
  {
    id: 'bag',
    name: 'bag',
    price: 100,
  },
  {
    id: 'charger',
    name: 'charger',
    price: 30,
  },
]

type Item = {
  id: string,
  name: string,
  price: number,
}

type Quantity = {
  id: string,
  quantity: number,
}

class App extends Component {
  render () {
    const singleproduct = products.map(product =>
      <CatalogItem name={product.name} price={product.price} />
    )
    const rows = append(singleproduct, [])

    return (
      <div>
        <Heading>Welcome! Please select items.</Heading>
        <Container>
          <Catalog>
            <h2>Catalog</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
          </Catalog>
          <Cart>
            <h2>My Cart</h2>
            <Selection />
            <Selection />
            <Total />
          </Cart>
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
const Catalog = styled.div`
  flex: 1 1 10em
`

const Cart = styled.div`
  flex: 1 1 10em
`

export default App

class CatalogItem extends Component {
  render () {
    const { name, price } = this.props
    return (
      <tr>
        <td>{name}</td>
        <td>${price}</td>
      </tr>
    )
  }
}

class Selection extends Component {
  render () {
    return <p>This is a chosen item.</p>
  }
}

class Total extends Component {
  render () {
    return <p>Grand total</p>
  }
}
