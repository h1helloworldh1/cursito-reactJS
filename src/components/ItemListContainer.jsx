import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from './ItemList';
import { products } from './Products'

const ItemListContainer = () =>{
    const [items, setItems] = useState(products);
    useEffect(()=>{
        const task = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(products)
            }, 2000);
        })

        task.then((response)=>{
            setItems(response)
        });

    }, [])
    return(
        <div className="container-fluid">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;