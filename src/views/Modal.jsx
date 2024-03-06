import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function FormularioModal() {
    return (
        <Form className="my-5 d-flex flex-column">
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
            <Button className="col-2 h-75 my-auto ms-auto" variant="primary">
                +Agregar
            </Button>{" "}
        </Form>
    );
}

export default FormularioModal;
