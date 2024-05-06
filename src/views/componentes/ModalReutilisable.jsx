import { Modal, Button } from 'react-bootstrap';

export default function ModalReutilisable({ show, handleClose, title, body }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header style={{ backgroundColor: "#2B2B2B", border:"1rem", color: "white" }}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#2B2B2B", border:"1rem", color: "white" }}>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
