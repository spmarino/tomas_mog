import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { getFetch } from "../../helpers/getFetch"
import { 
    collection,
    getDocs,
    getFirestore, 
    query, 
    where 
} from  'firebase/firestore';
import ItemList from "../ItemList/ItemList";

import './ItemListContent.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContent = () => {
    const [productos, setProductos] = useState([]);

    const { id } = useParams();

    useEffect (() => {
        const dataBase = getFirestore();
        const queryCollection = collection (dataBase, 'productos');
        getDocs (
            id 
                ? query(queryCollection, where ('categoria', '==', id)) 
                : queryCollection)
                .then ((dataBase) =>
                    setProductos(
                        dataBase.docs.map( (producto) =>
                            ( { id: producto.id, ...producto.data(),
                        }))
                )
            )
            .catch(err => console.log(err));
            
    }, [id]);


    return (
        <>  
                <div className="divCard">
                    <ItemList productos = { productos } />
                </div>                     
        </>
    );
}

export default ItemListContent