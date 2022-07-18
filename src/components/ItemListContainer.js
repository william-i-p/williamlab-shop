import React from 'react';
import { AddToCart } from './AddToCart';
import {Link, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getFetch } from '../products/getFetch';

export const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    const { categoriaId } = useParams()


    useEffect(() =>{
        if(categoriaId){
            getFetch().then(resp => setProducts(resp.filter(products => products.categoriaId === categoriaId)))

        }else{
            getFetch().then(resp => setProducts(resp))
        }
    },[categoriaId])

console.log(categoriaId)
  return (
    <>
    {
        products.map( (no) =>(
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
                <Link to={`/description/${no.id}`}><p>Ver descripcion</p></Link>
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

