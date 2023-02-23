import './App.css'
import React from 'react'
import ClassComponent from '../componentes/ClassComponent'
import FuncComponent from '../componentes/FuncComponente'
import Card from '../componentes/Card'

function App() {

  const names = ["Webpack", "ESlint", "Jest"]

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2021/08/vite_purple.png" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        
        <h2>
          Team 7
        </h2>
        <ul>
            <li>Martha Caro Avila</li>
            <li>Victoria Velásquez</li>
            <li>Sofía Rojas</li>
          </ul>
      </div>
    
      <h3>Useful Tools </h3>
        <ul> 
          {names.map(name =><li key={name}>{name} </li>)}
        </ul>

        <h2>Components</h2>
        <ClassComponent/>
        <FuncComponent/>
        <Card elemento={1}/>
        <Card elemento={2}/>
        <Card elemento={3}/>


    </>
  )
}

export default App
