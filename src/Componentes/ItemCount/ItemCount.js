import { useState, useEffect } from 'react'
import {Link} from 'react';
import './ItemCount.css';

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

    if(show && stock > 0){
        return(
            <div className='divCounter'>
                <div className="Counter"> 
                    <button type="button" onClick={resta} className='bnRed button'>
                    -
                    </button>
                    <p className="Cantidad"> {count}</p>
                    
                    <button type="button" onClick={suma} className='bnGreen button'>
                    +
                    </button>
                </div>
                <button onClick={agregar} className='btn-success' >Agregar al Carrito</button>
            </div>
        )
    }
}


export default ItemCount