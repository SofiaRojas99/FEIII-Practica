import {Component} from 'react'

export default class ClassComponent extends Component {
    constructor(){
        super()
        this.state = {
            name: 'Girlesa',
            country: 'Colombia'
        }

        this.changeName = this.changeName.bind(this)
    }
    //setState() modificador del estado
    changeName(){
        if(this.state.name === 'Girlesa') {this.setState({name: 'Julieth'})}
        else this.setState({name: 'Girlesa'})}

    render(){
        return(
            <div>
                <h3>{this.state.name}</h3>
                <button onClick={this.changeName}>Cambiar el nombre</button>
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

//rcc es un comando rapido para crear componente de clase