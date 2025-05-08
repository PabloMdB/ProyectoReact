import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;
    const[ titulo] = useState("Productos");
    
    
    useEffect(() => {

        const productosRef = collection(db, "productos");

        const q = categoria ? query(productosRef, where("categoria", "==" , categoria)) : productosRef;

        getDocs(q)
            .then((resp) =>{
                setProductos(
                    resp.docs.map((doc)=>{
                        return {...doc.data(),id: doc.id}
                    })

                )
            })

        }, [categoria])

        return (    
            <div>
            <ItemList productos ={productos} titulo = {titulo}/>
            </div>
        )
};

export default ItemListContainer
