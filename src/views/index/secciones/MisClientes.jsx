import { Container, Row, Col, Card } from "react-bootstrap"
import { clientes } from "../../../data/clientes"

export default function MisClientes() {
  return (
    <>
        <Container id="clientes" className="py-5 mt-5 mb-5">
            <div className="text-center mb-5 col-md-10 mx-auto">
                <h2 className="font-weight-bold display-4 ">Mis <span className="text-decoration">Clientes</span></h2>
                <p className="mx-5 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id debitis repudiandae dicta repellat et inventore iste est labore quas omnis sed nostrum, eveniet laboriosam porro natus minus amet veritatis officiis?</p>
            </div>
            <Row >
            {clientes.map(cliente => (
                <Col key={cliente.id} style={{ padding: ".5rem", display: "flex", justifyContent: "center" }}>
                    <Card style={{ width: '19.6rem', border: "0", padding: "1rem"}}>
                        <Card.Img variant="top" src={`/src/data/img-clientes/${cliente.img}.png`} alt={cliente.img} />
                    </Card>
                </Col>
            ))}
        </Row>
        </Container>
    </>
  )
}
