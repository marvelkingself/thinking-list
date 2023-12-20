import React from 'react'

const ProductCategoryRow = ({ category }) => {
  return (
    <tr >
      <th  className='jud' colSpan="2">
        {category}
      </th>
    </tr>
  )
}

export default ProductCategoryRow