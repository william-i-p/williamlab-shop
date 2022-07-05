import React from 'react';
import Products from '../products/Products';

export const ItemListContainer = () => {

  return (
    <>
    {
        Products.map( (no) =>(
            <div className='product-card'>
            <div className='badge'>{no.nuevo ? 'Nuevo': ''}</div>
            <div className='product-tumb'>
                <img src="../imagenes/schecoperez.jpg" alt=""/>
            </div>
            <div className='product-details'>
                <p className='product-category'>{no.categoria}</p>
                <h4><a href='https://facebook.com' key={no.id}>{no.nombre}</a></h4>
                <p>{no.descripcion}</p>
                <div className='product-bottom-details'>
                    <div className='product-price'>
                        <h3>${no.precio}</h3>
                    </div>
                    <div className='product-links'>
                        <a href='https://facebook.com'><i className='bi bi-cart-plus-fill con-success-lg'></i></a>
                        <a href='https://facebook.com'><i className='bi bi-heart-fill con-like'></i></a> 
                    </div>
                </div>
            </div>
        </div>

        ))
    }
        
    </>
  )
}

