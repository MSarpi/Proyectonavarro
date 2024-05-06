import MisServicios from "./secciones/MisServicios"
import ScrollUp from "../componentes/ScrollUp"
import WhatsappModal from "../componentes/WhatsappModal"
import MisProductos from "./secciones/MisProductos"
import MisClientes from "./secciones/MisClientes"
import Contacto from "./secciones/Contacto"
import Footer from "./secciones/Footer"
export default function index() {



  return (
    <>
      <header className="header">
        <nav id="navbar-smoth" className="navbar navbar-expand-lg navbar-dark fixed-top nav-bar-creaciones-navarro">
          <div className="container-fluid">
            <span className="navbar-brand" href="#"><strong>Creaciones Navarro</strong></span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse nav-bar-creaciones-navarro-collapse" id="navbarText">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                  
                  <a className="nav-link" href="#trabajos">Trabajos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#productos">Mis Productos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#clientes">Mis Clientes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contactos">Contactame</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="header position-relative w-100">
          <div className="header_part1 position-absolute text-white d-flex flex-column align-items-start justify-content-between">
            <div className="container d-flex flex-row justify-content-between container-creaciones-navarro">
              <div className="col-md-6 d-flex flex-column justify-content-center num1">
                <span className="font-weight-boldtext-uppercase span-creaciones-navarro">Bienvenido/a</span>
                <h1 className="mb-4 mt-2 display-4 font-weight-bold">Creaciones <span className="text-decoration">Navarro</span></h1>

                <WhatsappModal
                  btnText='Cotiza aquí'
                  btnBackground="#770606"
                  btnColorText="#fff"
                  sizeY="140px"
                  sizeX="240px"
                  bgColorTop="#00695c"
                  bgColorBottom="#00695c"
                  btnRespuesta="Responder"
                  empresa="Nombre Empresa" //Nombre de la empresa o nombre de portafolio
                  colorEmpresa="#ebebeb" // Color de texto empresa
                  mensaje="Hola soy Maria M. ¿Que servicio necesitas?" //Mensaje que va en el toast
                  celular="56957326432" //Numero de telefono, este redireccionara a la Api de whatsapp
                  textEnlace="Soy un text de enlace" //Mensaje personalizado que va en la redireccion de Api de whatsapp
                />
              </div>   
            </div>
            <div className="col-md-12 d-flex flex-column justify-content-end align-items-end">
                <a rel="nofollow" target="_blank" href="https://unsplash.com/es/@_thedl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="ref-creaciones-navarro">Foto de David Lezcano</a>
            </div>     
          </div>
        </div>
        {/* <button id="scrollToTopBtn" className="btn btn-product-second position-fixed scrollToTopBtn-button">
          <i className="text-black scrollToTopBtn-i"></i>
        </button> */}

      </header>
      
      <body>
        <MisServicios/>
        <MisProductos/>
        <MisClientes/>
        <Contacto/>
        <Footer/>
        <ScrollUp/>
      </body>
    </>
  )
}
