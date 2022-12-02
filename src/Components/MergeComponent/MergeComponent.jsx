import React from 'react' 
import Product from '../Product/Product'
import Details from '../Details/Details'
import './MergeComponent.css'

function MergeComponent() {
  return (
    <div className='merge-component'>
        <Product/>
        <Details/>
    </div>
  )
}

export default MergeComponent