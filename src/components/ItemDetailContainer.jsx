import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { products } from './Products'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    useEffect(()=>{
        const getProduct =() =>
            new Promise ((res, rej)=>{
                const product = products.find((prod)=> prod.id === 1)
                setTimeout(()=>{
                    res(product)
                },500)
            })
            getProduct()
            .then((info)=>{
                setItem(info)
            })
            .catch((error)=>{
                console.log(error)
            })
    }, [])
    return(
        <ItemDetail item={item}/>
    )
}
export default ItemDetailContainer