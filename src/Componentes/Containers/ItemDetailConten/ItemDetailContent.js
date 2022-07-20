import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getOneFetch } from '../../helpers/getFetch';
import { ItemDetail } from '../ItemDetailConten/ItemDetail';

import { getDoc, getFirestore, doc } from  'firebase/firestore';

import './ItemDetailContent.css';


const ItemDetailContent = () => {
    const [producto, setProducto] = useState ({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const dataBase = getFirestore();
        const queryProducto = doc(dataBase, 'productos', id);
        getDoc(queryProducto)
            .then ((resp) => 
                setProducto ( { id: resp.id, ...resp.data() } ))
            .catch((err) => console.log(err))
            .finally( setLoading(false) )
    }, [id]);

    return (
        <>
            {   loading ?
                    <p>...Cargando</p>
                        :
                    <ItemDetail producto = {producto} />
            }
        </>
    )
}

export default ItemDetailContent;