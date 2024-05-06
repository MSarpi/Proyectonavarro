import { Container, Card, Row, Col } from "react-bootstrap"
import { productos } from "../../../data/productos"

export default function MisProductos() {
  return (
    <>
    <Container className='py-5 mt-5 mb-5' id="productos">
        <div className="text-center mb-5 col-md-10 mx-auto">
            <h2 className="font-weight-bold display-4 ">Mis <span className="text-decoration">Productos</span></h2>
            <p className="mx-5 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id debitis repudiandae dicta repellat et inventore iste est labore quas omnis sed nostrum, eveniet laboriosam porro natus minus amet veritatis officiis?</p>
        </div>
        <Row>
            {productos.map(producto => (
                <Col key={producto.id} style={{ padding: ".5rem", display: "flex", justifyContent: "center" }}>
                <Card style={{ width: '19.6rem' }}>
                    <Card.Img variant="top" src={`/src/data/img-productos/${producto.img}.jpg`} alt={producto.nombre} />
                    <Card.Body>
                    <Card.Title className="fw-bold text-center">{producto.nombre}</Card.Title>
                    <hr/>
                    <Card.Text>
                        {producto.descripcion}
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>
    </Container>
    </>
  )
}
