import { useState, useEffect } from 'react'
import {Link} from 'react';

function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState (initial)
    const [show, setShow] = useState(true)
    

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

    if(show&&stock>0){
        return(<div>
            <div className="Counter"> <button type="button" onClick={resta}>
            -
            </button>
            <p className="Cantidad">Cantidad {count}</p>
            
            <button type="button" onClick={suma}>
            +
            </button></div>
            <button onClick={agregar}>Agregar al Carrito</button>
        
            </div>)
        }
        
        if(stock===0){
            return(
            <p>Sin unidades disponibles</p>
            )
        }
        
        if (!show && stock>0){
            return(<Link to="/cart"><button>Ir al carrito</button></Link>)
        }
        


    
}


export default ItemCount