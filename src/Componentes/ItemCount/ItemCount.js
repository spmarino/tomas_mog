import { useState } from 'react'

function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState (initial)
    

    function suma() {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    function resta(){
        if (count > initial){
            setCount(count - 1)
        }
    }
    function agregar () {
        onAdd (count)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={suma}>Sumar</button>
            <button onClick={resta}>Quitar</button>
            <button onClick={agregar}>Agregar</button>
        </div>
    )
}


export default ItemCount