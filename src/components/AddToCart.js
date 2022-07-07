import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState } from 'react';
//import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px',
    boxShadow: 24,
    p: 4,
  };

export const AddToCart = ({stock}) => {

  var stocking = parseInt(stock)

    const [ agregar, setAgregar ] = useState(0);

    const reset = 0
    
    const incrementar = () => {

      if (agregar < stocking){
        setAgregar( parseInt(agregar + 1))
        
        console.log(stocking)
        console.log(agregar)

      }
    }

    const decrementar = () =>{
        if(agregar >= 1){
          setAgregar( parseInt(agregar -1) )
        }
    }

    const reseteo = () => {
      setAgregar(reset);
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button className='addToCart' onClick={handleOpen}>Agregar al Carrito { agregar > 0 ? `( ${agregar} )` : ''}</Button>
        <p> </p>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <p className='modaltext'>AGREGAR CANTIDAD</p>
            <div className='row'>
            <div className='col-4'>
            <Button variant="outlined" onClick={decrementar} >-</Button>
            </div>
            <div className='col-4'>
            <h3 className='modaltext'>{agregar === stocking ? `Ya no hay más de ${stocking} productos` : agregar}</h3>
            </div>
            <div className='col-4'>
            <Button variant="outlined" onClick={incrementar} >+</Button>
            </div>
              <div className='col-12'>
              <Button variant="outlined" onClick={reseteo} >Reset</Button>
              </div>
              </div>
          </Box>
        </Modal>
      </div>
    );

}
