import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { products } from './Products'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const {ids} = useParams()

    useEffect(()=>{
        const getProduct = 
            new Promise (res => {
                    res(products)
            })
            getProduct
            .then(resp => setItem(resp.find(product => product.id === parseInt(ids))))
            // .catch((error)=>{
            //     console.log(error)
            // })
    }, [ids])
    return(
        <ItemDetail item={item}/>
    )
}
export default ItemDetailContainer