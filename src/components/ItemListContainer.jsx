import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from './ItemList';
import ItemCount from './ItemCount'

const ItemListContainer = () =>{
    const products = [
        {title: "Programming Python",
        editorial:"O'reilly",
        price: 44,
        id:1},
    
        {title: "JavaScript - The Definitive Guide",
        editorial:"O'reilly",
        price: 53,
        id:2},
    
        {title: "HTML5 - Pocket Reference",
        editorial:"O'reilly",
        price: 14, 
        id:3},
    
        {title: "Learning React", 
        editorial:"O'reilly", 
        price: 34, 
        id:4},
    
        {title: "CSS - The Definitve Guide",
        editorial:"O'reilly",
        price: 51,
        id:5},
    ];
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
            <ItemList items={items} />
            <ItemCount stock={5} initial={1} onAdd={0}/>
        </div>
    )
}

export default ItemListContainer;