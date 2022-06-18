import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { getFetch } from "../../helpers/getFetch"

import ItemList from "../ItemList/ItemList";

import './ItemListContent.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContent = () => {
    const [productos, setProductos] = useState([]);

    const { id} = useParams();


    useEffect (() => {
      
        getFetch().then((resp)=>{
            setProductos(id?resp.filter((product)=>product.categoria === id):resp)
        })
        .catch((error)=> console.log(error))
        
    }, [id])


        return (
        <>
            <div className="divCard">
                <ItemList productos = { productos } />
                
            </div>                 
        </>
    
)}

export default ItemListContent