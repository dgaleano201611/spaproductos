import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row} from "react-bootstrap";
import { PRODUCTOSCREADOS_GET_ENDPOINT } from "../connections/endpoints";
import ProductCard from "../components/ProductoCard";


const ProductosCreados = ()=>{
    
    const [productos, setProductos]= useState([])

    useEffect(()=>{
        axios.get(PRODUCTOSCREADOS_GET_ENDPOINT)
        .then(respuesta=>{
            setProductos(respuesta.data)
        })
        .catch(err=>{
            console.log(err)
        })
        
    }, [])

    return(
        <Container className="mt-3 mb-3 text-center">
            <h3 className="text-center">Lista de Productos</h3>
           <Row className="justify-content-mb-center"> 
            <div className="row justify-content-center text-center">         
                {productos.map(producto=> <ProductCard key={producto.idProducto} producto={producto}/>)}
            </div>
            </Row>
        </Container>
        

    );
}

export {ProductosCreados}