import React from 'react'

const ProductRow = ({ product }) => {
    const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
      <td>{product.stocked?"In Stock":"Out of Stoke"}</td>
    </tr>
  );
}

export default ProductRow