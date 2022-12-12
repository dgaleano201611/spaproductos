import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { PRODUCTODETALLE_GET_ENDPOINT } from "../connections/endpoints"

const ProductoDetalles = ()=>{
    const [producto, setProductos]= useState([])
    const {id}= useParams()
    const navegar = useNavigate()

    useEffect(()=>{
        axios.get(`${PRODUCTODETALLE_GET_ENDPOINT}/${id}`)
        .then(respuesta=>{
            setProductos(respuesta.data)
        })
        .catch(err=>{
            navegar(-1)
        })
        
    }, [id, navegar]);

    return(
        <Container className="mt-3">
           <Row className="justify-content-mb-center">
                <Col sm="12" md="8" lg="6">
                    <h3 className="text-center">Producto Detalle</h3>
                    <div className="row justify-content-center text-center">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={producto.imagen} />
                        <Card.Body>
                            <Card.Subtitle className="lead mb-3">{producto.titulo}</Card.Subtitle>
                            <Card.Subtitle>{producto.descripcion}</Card.Subtitle>
                            <Card.Text className="color-categoria">{producto.categoria}</Card.Text>
                            <Card.Title>$ {producto.precio}</Card.Title>
                        </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export {ProductoDetalles}