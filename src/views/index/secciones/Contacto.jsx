import { Container, Row, Col } from "react-bootstrap"
import Formulario from "./formulario/Formulario"
export default function Contacto() {
  return (
    <>
      <Container className="py-5" id="contactos">
        <div className="text-center mb-5 col-md-10 mx-auto">
        <p className="h2">Contacto</p>
            <h2 className="font-weight-bold display-4 ">Consulta Detallada De<span className="text-decoration"> Precios</span></h2>
            <p className="mx-5 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id debitis repudiandae dicta repellat et inventore iste est labore quas omnis sed nostrum, eveniet laboriosam porro natus minus amet veritatis officiis?</p>
        </div>
        <Row>
          <Col xs={12} md={6}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13313.946485909752!2d-70.71345196414323!3d-33.46267932313937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c492530c08b1%3A0xa5c515683417f226!2sEstaci%C3%B3n%20Central%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1713806690645!5m2!1ses-419!2scl" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Col>
          <Col xs={12} md={6} className="mt-3">
            <Formulario/>
          </Col>
        </Row>
      </Container>
    </>
  )
}
