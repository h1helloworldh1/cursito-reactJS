import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { products } from './Products'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const {ids} = useParams()

    useEffect(()=>{
        const db = getFirestore();
        const response = doc(db, "books", ids);
        getDoc(response).then((data)=>{
            if(data.exists()){
                setItem({id:data.id, ...data.data()});
            }
        })

        // const getProduct = 
        //     new Promise (res => {
        //             res(products)
        //     })
        //     getProduct
        //     .then(resp => setItem(resp.find(product => product.id === parseInt(ids))))
    }, [ids])
    return(
        <ItemDetail item={item}/>
    )
}
export default ItemDetailContainer