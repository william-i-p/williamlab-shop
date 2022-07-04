import React from 'react'

export const NavBar = () => {
  return (
    <div className="container menu-fixed">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        
      </a>

      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li><a href="/Home" className="nav-link px-2 text-secondary">Home</a></li>
        <li><a href="/Nosotros" className="nav-link px-2 text-white">Nosotros</a></li>
        <li><a href="/Tienda" className="nav-link px-2 text-white">Tienda</a></li>
        <li><a href="/Catalogo" className="nav-link px-2 text-white">Catálogo</a></li>
        <li><a href="Galeria" className="nav-link px-2 text-white">Galería</a></li>
      </ul>

      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
        <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
      </form>

      <div className="text-end">
        <button type="button" className="btn btn-outline-light me-2"><i class="bi bi-basket2 text-primary"></i></button>
        <button type="button" className="btn btn-warning">Log-in</button>
      </div>
    </div>
  </div>
  )
}
