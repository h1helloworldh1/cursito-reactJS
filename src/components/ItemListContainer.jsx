import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import { products } from './Products'

const ItemListContainer = () =>{
    const [items, setItems] = useState(products);
    const {cat} = useParams();

    useEffect(()=>{
        let books =""
        if(cat === 'ebooks'){
            books = "ebook for 0,99 USD"
        }else if(cat === 'bestseller'){
            books = 'bestseller'
        }else{
            books = "books"
        }
        const task = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(products)
            }, 2000);
        })

        task.then((response)=>{
            if(books === "books"){
                setItems(response);
            }else{
                const newProducts = response.filter(item => item.category === books)
                setItems(newProducts)
            }
        });

    }, [cat])
    return(
        <div className="container-fluid">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;