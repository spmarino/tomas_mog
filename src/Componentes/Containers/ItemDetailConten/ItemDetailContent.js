import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getOneFetch } from '../../helpers/getFetch';
import { ItemDetail } from '../ItemDetailConten/ItemDetail';

import './ItemDetailContent.css';


const ItemDetailContent = () => {
    const [producto, setProducto] = useState ({})
    const {id} = useParams()

    useEffect(() => {
        getOneFetch(id)
            .then ((resp) => setProducto(resp))
            .catch ((err) => console.log(err))
        
    }, [])
    
    
    return (
        <>
        <h2>Detalle de producto</h2>
        <ItemDetail producto = {producto} />
        </>
    )
}

export default ItemDetailContent;