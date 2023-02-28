import{useState} from "react"

const FuncComponent = () => {
    const [estudiante, setEstudiante] = useState({
        name:'Girlesa',
        country: 'Colombia'
    })
    const changeName = () => {
       if(estudiante.name === 'Girlesa') setEstudiante({...estudiante, name:'Julieth'})
       else setEstudiante({...estudiante, name:'Girlesa'})
    }

    const [count, setcount] = useState(0)

    return(
        <div>
            <button onClick={() => setcount(count+1)}>+</button>
            {count}
            <button onClick={() => setcount(count-1)}>-</button>
            <h3>{estudiante.name}</h3>
            <button onClick={changeName}>Change Name</button>
            {
                estudiante.name === 'Girlesa'
                ?
                <h3>{estudiante.name}! Veo que eres buena en Backend!</h3>
                :
                <h3>{estudiante.name}! Buenisimos esos estilos en CSS!</h3>
            }
            
        </div>
    )
}

export default FuncComponent
//Lo tengo que exportar al final siempre. 
//Es mas sencillo exportar componente de funcion que el de class.
//Generalmente se usa de funcion, casi nada de clase.


