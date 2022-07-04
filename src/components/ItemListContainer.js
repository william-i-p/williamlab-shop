import React from 'react'
import  { Products }  from './products/Products'


export const ItemListContainer = ({Products}) => {
  return (
    <>
        <div className='product-card'>
            <div className='badge'>{nuevo}</div>
            <div className='product-tumb'>
                <img src='' alt=''/>
            </div>
            <div className='product-details'>
                <spam className='product-category'>{categoria}</spam>
                <h4><a href=''>{nombre}</a></h4>
                <p>{descripcion}</p>
                <div className='product-bottom-details'>
                    <div className='product-price'>
                        <h3>{precio}</h3>
                    </div>
                    <div className='product-links'>
                        <a href='#'><i className='fa fa-heart'></i></a>
                        <a href='#'><i className='fa fa-shopping-cart'></i></a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
