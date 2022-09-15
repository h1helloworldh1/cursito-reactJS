import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { products } from './Products'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    let {ids} = useParams()

    useEffect(()=>{
        let books=""
        if(ids === products.id){
            books = products.id
        }else{
            books = 'books'
        }
        const getProduct = 
            new Promise ((res, rej)=>{
                setTimeout(()=>{
                    res(products)
                },500)
            })
            getProduct
            .then((info)=>{
                if(books === 'books'){
                    setItem(info)
                }else{
                    const product = info.filter(prod => prod.id === books)
                    setItem(product)
                }
            })
            .catch((error)=>{
                console.log(error)
            })
    }, [ids])
    return(
        <ItemDetail item={item}/>
    )
}
export default ItemDetailContainer