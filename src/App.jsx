/**
 * @providesModule App
 * @flow
 */

import React, { Component } from 'react'
import styled from 'styled-components'
import './App.css'

type Item = {
  id: string,
  name: string,
  price: number,
}

class App extends Component {
  render () {
    return (
      <div>
        <Heading>Welcome! Please select items.</Heading>
        <Container>
          <Catalog>
            <h2>Catalog</h2>
            <CatalogItem />
            <CatalogItem />
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
    return <p>This is a catalog item.</p>
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
