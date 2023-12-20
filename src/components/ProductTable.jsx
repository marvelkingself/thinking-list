import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable({ products, filterText, inStockOnly }) {
  let lastCategory = null;

  const filteredRows = products.filter((product) => {
    if (
      product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1
    ) {
      return false;
    }
    if (inStockOnly && !product.stocked) {
      return false;
    }
    return true;
  })



  return (
    <table className='center'>
      <thead className='borderTable'>
        <tr >
          <th>Name</th>
          <th>Price</th>
          <th>Stoke</th>
        </tr>
      </thead>
      <tbody>{
        filteredRows.map((product) => {
          const productCategoryRow =
            product.category !== lastCategory ? (
              <ProductCategoryRow
                category={product.category}
                key={product.category}
              />
            ) : null;

          lastCategory = product.category;

          return (
            <>
              {productCategoryRow}
              <ProductRow product={product} key={product.name} />
            </>
          );
        })}
      </tbody>
    </table>
  );
}

export default ProductTable;
