
import FilterableProductTable from './components/FilterableProductTable';
import PRODUCTS from './data/stock';
import React from 'react'
import './App.css'

const App = () => {
  return (<div className='container'>
    <FilterableProductTable products={PRODUCTS} />
    </div>
  )
}

export default App
