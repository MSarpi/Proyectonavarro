import { useState } from 'react';
import ModalReutilisable from '../../componentes/ModalReutilisable';
import ServiciosConserjeria from './modal/ServiciosConserjeria';
import ServiciosPersonalAseo from './modal/ServiciosPersonalAseo';
import ServiciosOficina from './modal/ServiciosOficina';
import { Container, Row, Col } from 'react-bootstrap';

export default function MisServicios() {

    const [showModalConserjeria, setShowModalConserjeria] = useState(false);
    const [showModalAseo, setShowModalAseo] = useState(false);
    const [showModalOficina, setShowModalOficina] = useState(false);

    const handleShowModalConserjeria = () => setShowModalConserjeria(true);
    const handleCloseModalConserjeria = () => setShowModalConserjeria(false);

    const handleShowModalAseo = () => setShowModalAseo(true);
    const handleCloseModalAseo = () => setShowModalAseo(false);

    const handleShowModalOficina = () => setShowModalOficina(true);
    const handleCloseModalOficina = () => setShowModalOficina(false);

    return (
        <>
            <div id="trabajos" className="container-fluid bg-secondary mis-servicios-craciones"></div>
            <Container className='mt-5 mb-5 py-5'>
                <div className="text-center mb-5 col-md-10 mx-auto">
                    <h2 className="font-weight-bold display-4 ">Mis <span className="text-decoration">Trabajos</span></h2>
                    <p className="mx-5 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id debitis repudiandae dicta repellat et inventore iste est labore quas omnis sed nostrum, eveniet laboriosam porro natus minus amet veritatis officiis?</p>
                </div>
                <Row className=''>
                    <Col xs={12} md={4} className=''>
                        <div className="px-3 py-5 card-servicios">
                            <div className="font-weight-bold circle d-flex align-items-center justify-content-center mx-auto my-3 card-servicios-craciones" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                            <div className="px-3 text-center pb-3">
                                <h5 className="text-uppercase titulo-card-servicios-craciones" >CONSERJERIA</h5>
                                <p className="font-weight-light my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae incidunt totam fugit sit. Ipsam, illo consectetur.</p>
                                <button type="button" className="btn btn-product-second" onClick={handleShowModalConserjeria}>Ver Productos</button>
                                <ModalReutilisable
                                    show={showModalConserjeria}
                                    handleClose={handleCloseModalConserjeria}
                                    title="Servicios de Conserjería"
                                    body={<ServiciosConserjeria />}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4} className=''>
                        <div className="px-3 py-5 card-servicios">
                            <div className="font-weight-bold circle d-flex align-items-center justify-content-center mx-auto my-3 card-servicios-craciones" >
                                <i className="fa-solid fa-user-tie display-4"></i>
                            </div>
                            <div className="px-3 text-center pb-3">
                                <h5 className="text-uppercase titulo-card-servicios-craciones">OFICINA</h5>
                                <p className="font-weight-light my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae incidunt totam fugit sit. Ipsam, illo consectetur.</p>
                                <button className="btn btn-product-second" onClick={handleShowModalOficina}>Ver Productos</button>
                                <ModalReutilisable
                                    show={showModalOficina}
                                    handleClose={handleCloseModalOficina}
                                    title="Servicios de Conserjería"
                                    body={<ServiciosOficina />}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={4} className=''>
                        <div className="px-3 py-5 card-servicios">
                            <div className="font-weight-bold circle d-flex align-items-center justify-content-center mx-auto my-3 card-servicios-craciones" >
                                <i className="fa-solid fa-person-digging display-5"></i>
                            </div>
                            <div className="px-3 text-center pb-3">
                                <h5 className="text-uppercase titulo-card-servicios-craciones" >PERSONAL DE ASEO</h5>
                                <p className="font-weight-light my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae incidunt totam fugit sit. Ipsam, illo consectetur.</p>
                                <button type="button" className="btn btn-product-second" onClick={handleShowModalAseo}>Ver Productos</button>
                                <ModalReutilisable
                                    show={showModalAseo}
                                    handleClose={handleCloseModalAseo}
                                    title="Servicios de Personal de Aseo"
                                    body={<ServiciosPersonalAseo />}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
