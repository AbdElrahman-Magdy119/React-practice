import { useEffect } from "react";
import {useState} from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import React from 'react';
function Shop ()
{
    useEffect(() =>{
        fetchproductes();
    },[])

    const [products,setProducts]= useState([])

    const fetchproductes = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProducts(json))
    }
    console.log(products)
    return(
        <div className="container">
         <div className="row">
         {products.map((product) => {
           return(
            <div className="col-4 mt-2 justify-content-center" key={product.id}>
                    <Card style={{ width: '18rem' ,height:'30rem'}}>
                    <Card.Img className="w-50 h-25" variant="top" src={product.image} />
                    <Card.Body>
                    <Card.Title> <h3 style={{ fontSize: '1vw'}} >{product.title}</h3></Card.Title> 
                    <Card.Text  >
                    <h3 style={{ fontSize: '1vw' }}>{product.description}</h3>
                    </Card.Text>
                    </Card.Body>
                    <Card.Body>
                    <Card.Link className="btn btn-danger" href="#"> <Link as={Link} to={`/Shop/${product.id}`}  className="text-white">show product</Link></Card.Link>
                    </Card.Body>
                </Card>
             </div>
           )
         })}
     </div>
    </div>
    )
}

export default Shop;