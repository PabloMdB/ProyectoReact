import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Loader from '../Loader/Loader';


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;
    
    
    const [loading, setLoading] = useState (true);
    
    useEffect(() => {

        
        const productosRef = collection(db, "productos");
        
        const q = categoria ? query(productosRef, where("categoria", "==" , categoria)) : productosRef;
        
        console.log("estas son mis variables de entorno", import.meta.env);
        
        getDocs(q)
            .then((resp) =>{
                setProductos(
                    resp.docs.map((doc)=>{
                        return {...doc.data(),id: doc.id}
                    })

                )
            })
            
            setTimeout(() => {
                setLoading(false)
            }, 2500);

        }, [categoria])

        return (    
                loading 
                ?
                <Loader/>
                :
            <div>
            <ItemList productos ={productos}/>
            </div>
        )
};

export default ItemListContainer
