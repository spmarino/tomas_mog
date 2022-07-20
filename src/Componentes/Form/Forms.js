import React, { useContext, useState } from 'react'
import { CartContext } from '../CartContext/CartContex';
import './Form.css';


const Forms = () => {

    const { Pay } = useContext(CartContext)

    return (
        <>  
            <form className='form'>
                <div className='containerForm'>
                    <input
                        type='text'
                        placeholder='Nombre y Apellido'
                    ></input>
                    <input
                        type='text'
                        placeholder='Email'
                    ></input>
                    <input 
                        type='number'
                        placeholder='Teléfono'
                    >
                    </input>
                    <input 
                        type='text'
                        placeholder='Dirección'
                    >
                    </input>            
                    <select 
                        type='text'
                        placeholder='País'
                        >
                        <option value='argentina'>Argentina</option>
                        <option value='brasil'>Brasil</option>
                        <option value='chile'>Chile</option>
                        <option value='uruguay'>Uruguay</option>
                        <option value='paraguay'>Paraguay</option>
                        <option value='bolivia'>Bolivia</option>
                    </select>            
                    <input 
                        type='text'
                        placeholder='Provincia'
                    >
                    </input>            
                    <input 
                        type='text'
                        placeholder='Ciudad'
                    >
                    </input>            
                    <input 
                        type='number'
                        placeholder='Código Postal'
                    >
                    </input>
                    <button className='pay'>Finalizar compra</button>
                </div>
            </form>
        </>   
    )
}

export default Forms



