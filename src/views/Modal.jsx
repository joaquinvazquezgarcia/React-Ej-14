import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function FormularioModal() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="form.TituloInput">
        <Form.Label>Título Receta</Form.Label>
        <Form.Control
          type="text"
          maxLength={40}
          placeholder="Título de ejemplo"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="form.UrlInput">
        <Form.Label>URL de la imagen</Form.Label>
        <Form.Control
          type="text"
          maxLength={100}
          placeholder="Ingrese la URL de su imagen"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="form.DescripcionInput">
        <Form.Label>Descripción de la receta</Form.Label>
        <Form.Control
          type="text"
          maxLength={2000}
          placeholder="Título de ejemplo"
          required
        />
      </Form.Group>
    </Form>
  );
}

function VentanaModal() {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Administración del sitio</Modal.Title>
        </Modal.Header>
       
        <Modal.Body>
           <FormularioModal />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Cerrar</Button>
          <Button variant="primary">Guardar cambios</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default VentanaModal;
