import React from 'react';
import Products from '../products/Products';
import { AddToCart } from './AddToCart';

export const ItemListContainer = () => {

  return (
    <>
    {
        Products.map( (no) =>(
            <li>
            <div className='product-card'>
            <div className='badge'>{no.nuevo ? 'Nuevo': ''}</div>
            <div className='product-tumb'>
                <img src={no.img} alt="" width={360} height={360}/>
            </div>
            <div className='product-details'>
                <p className='product-category'>{no.categoria}</p>
                <h4><a href='https://facebook.com' key={no.id}>{no.nombre.slice(0,38)}</a></h4>
                <p>{no.descripcion.slice(0,90)}</p>
                <div className='product-bottom-details'>
                    <div className='product-price'>
                        <h3>${no.precio}</h3>
                    </div>
                    <div>
                    <AddToCart stock={no.stock} />
                    </div>
                    <div className='product-links'>
                        <a href='https://facebook.com'><i className='bi bi-heart-fill con-like'></i></a> 
                    </div>
                </div>
            </div>
            </div>
            </li>
        ))
    }
    </>
  )
}
