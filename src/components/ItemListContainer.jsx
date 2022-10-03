import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
// import { products } from './Products'
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () =>{
    const [items, setItems] = useState([]);
    const {cat} = useParams();

    useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = collection(db, "books");
        const queryItems = cat ? query(itemsCollection, where("category", "==", cat)) : itemsCollection;
        getDocs(queryItems).then((snapShot) => {
            if(snapShot.size > 0){
                setItems(snapShot.docs.map(item => ({id: item.id, ...item.data()})))
            }
        })
    }, [cat]);
        // let books =""
        // if(cat === 'ebooks'){
        //     books = "ebook for 0,99 USD"
        // }else if(cat === 'bestseller'){
        //     books = 'bestseller'
        // }else{
        //     books = "books"
        // }
        // const task = new Promise((resolve, reject)=>{
        //     setTimeout(()=>{
        //         resolve(products)
        //     }, 2000);
        // })

        // task.then((response)=>{
        //     if(books === "books"){
        //         setItems(response);
        //     }else{
        //         const newProducts = response.filter(item => item.category === books)
        //         setItems(newProducts)
        //     }
    const pageInfo = {logo:"logo1.png", title:"Welcome to devbooks.", description:"books for programmers and developers."};
    return(
        <div className="container-fluid" >
            <div className="row align-items-center" style={{backgroundImage: `url('background.jpg')`, backgroundPosition:'center', backgroundSize:'cover'}}>
                <div className="col m-2 text-center text-light" style={{textShadow:"2px 2px #000"}} >
                    <h1 className="m-3" style={{fontSize:'60px'}}><b>{pageInfo.title}</b></h1><br/>
                    <p style={{fontSize:'28px'}}><b>{pageInfo.description}</b></p>
                </div>
                    <img src={pageInfo.logo} alt={pageInfo.title} className="img-fluid col-6 m-2"/>
            </div>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;