import React from 'react'

export default class ClassComponent extends React.Component {
    render(){
        return(
            <div>
                <h3>Componente de clase</h3>
            </div>
        )
    }
}

//import { Component } from 'react' te trae solo lo que vos necesitas.
//Se puede exportar a la misma vez que se crea o en una línea separada.
//Si los componentes no tienen una relacion estrecha la idea es crear un archivo por componente. Más adelante comenzaremos a clasificar en carpetas y subcarpetas a los componentes.
//Export default va sin llaves en el import del app.jsx, pero si no lo tiene tiene que ir entre llaves.

//export function logicaParaComponente(){

//}