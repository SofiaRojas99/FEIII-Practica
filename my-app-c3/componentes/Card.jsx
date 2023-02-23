import React from 'react' //Por default lo importa porque supone que lo voy a utilizar.

const Card = (props) => {
  return (
    <div>
        <h3>Titulo de la card: Elemento n° {props.elemento} </h3>
    </div>
  )
}

export default Card

//comando rafce te permite hacer un componente de funcion ya exportado y con un return.

