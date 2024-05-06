import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import BtnRedirectWhatsapp from '../../../componentes/BtnRedirectWhatsapp';

function Formulario() {
    const [nombre, setNombre] = useState('')
    const [textArea, setTextArea] = useState('')

    const inputNombre = (event) => {
        setNombre(event.target.value);
    };

    const inputTextArea = (event) => {
        setTextArea(event.target.value);
    };
    return (
        <>
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre o Nombre de la empresa</Form.Label>
            <Form.Control value={nombre} onChange={inputNombre} type="text" placeholder="ej: Nombre SPA o Juan Martinez" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Ingrese su comentario o duda</Form.Label>
            <Form.Control value={textArea} onChange={inputTextArea} as="textarea" placeholder="Ej: Necesito saber si tiene disponible..." rows={9} />
        </Form.Group>
        
        </Form>
            <BtnRedirectWhatsapp nombreWs={nombre} textWs={textArea}/>
        </>

    );
}

export default Formulario;