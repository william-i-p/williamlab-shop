import React from 'react';

const Formulario = ({saludo}) => {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                    </div>
                    <div className='col-6 d-grid gap-3'>
                        <div>
                        <input type="search" className="form-control form-control-dark text-center" placeholder="Nombre" aria-label="Search"/>
                        </div>
                        <div>
                        <input type="search" className="form-control form-control-dark text-center" placeholder="Apellido" aria-label="Search"/>
                        </div>
                        <div>
                        <button type="button" className="btn btn-outline-light me-2">Enviar</button>
                        <div>
                        <p className='text-center'>{saludo}</p>
                        </div>
                        </div>
                    </div>
                    <div className='col-3'>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Formulario;
