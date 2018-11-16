/**
 * @flow
 */

export type Product = {|
  id: string,
  name: string,
  price: number,
|}

export type Catalog = {
  [id: string]: Product,
}

export type Selection = {|
  productId: string,
  quantity: number,
|}

export type Cart = {
  [productId: string]: Selection,
}
