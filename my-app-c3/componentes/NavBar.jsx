import React from 'react'

let titulos = ['Home', 'Catalogo', 'About us', 'Contacto']

const NavBar = () => {
  return (
    <div>
        <ul>
            {titulos.map((titulo, index) => <p key={index}>{titulo}</p>)}
        </ul>
    </div>
  )
}

export default NavBar