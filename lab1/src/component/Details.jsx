import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
function Details() {
    useEffect(() => {
        fetchproductes();
    }, [])

    const [product, setProducts] = useState({})

    const params = useParams();

    const fetchproductes = () => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res => res.json())
            .then(json => setProducts(json))
    }

    console.log(product)



    return (
        <div className="container ">
            <div className="row  justify-content-around " >
                <div className="col-6   mt-4">
                    <Card style={{ width: '18rem', height: '30rem' }}>
                        <Card.Img className="w-75 h-50" variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title> <h3 style={{ fontSize: '1vw' }} >{product.title}</h3></Card.Title>
                            <Card.Text  >
                                <h3 style={{ fontSize: '1vw' }}>{product.description}</h3>
                                <h3>{product.price}</h3>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Details;