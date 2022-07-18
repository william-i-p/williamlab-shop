import React from 'react'
import { useParams } from 'react-router-dom'

const PDescription = () => {
const {productId} = useParams()
console.log(productId)

  return (
    <div>
        
    </div>
  )
}

export default PDescription