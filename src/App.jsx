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

type Product = {
  id: string,
  name: string,
  price: number,
  quantity: number,
}

type Quantity = {
  id: string,
  quantity: number,
}

class App extends Component {
  state: { quantity: number, selections: Product[] } = {
    quantity: null,
    selections: [],
  }

  handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    const selections = append(
      { quantity: this.state.quantity },
      this.state.selections
    )
    this.setState({ selections })
  }

  render () {
    const singleproduct = products.map(product =>
      <CatalogItem
        name={product.name}
        price={product.price}
        id={product.id}
        onSubmit={this.handleSubmit}
      />
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
                  <th>Quantity</th>
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
  handleSubmit = () => {
    const { id, onSubmit } = this.props
    onSubmit(id)
  }

  render () {
    const { name, price } = this.props
    return (
      <tr>
        <td>{name}</td>
        <td>${price}</td>
        <td>
          <select name="qty">
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
          <button type="submit" onSubmit={this.handleSubmit}>
            Add to cart
          </button>
        </td>
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
