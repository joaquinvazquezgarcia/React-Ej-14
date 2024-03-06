import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useEffect } from "react";

let nextId = 0;

function FormularioModal({ recipiesArray, setRecipiesArray }) {
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        const object = {
            id: nextId++,
            title: title,
            url: url,
            description: description,
        };

        setRecipiesArray([...recipiesArray, object]);
        setTitle("");
        setUrl("");
        setDescription("");
    };
    useEffect(() => {
        localStorage.setItem("recetas", JSON.stringify(recipiesArray));
    }, [recipiesArray]);

    return (
        <Form className="my-5 d-flex flex-column">
            <Form.Group className="mb-3" controlId="form.TituloInput">
                <Form.Label>Nombre de la Receta</Form.Label>
                <Form.Control
                    type="text"
                    maxLength={40}
                    placeholder="Ej: Tarta de Coco y Nuez"
                    required
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.UrlInput">
                <Form.Label>URL de la imagen</Form.Label>
                <Form.Control
                    type="text"
                    maxLength={100}
                    placeholder="Ingrese la URL de su imagen"
                    required
                    onChange={e => setUrl(e.target.value)}
                    value={url}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form.DescripcionInput">
                <Form.Label>Descripción de la Receta</Form.Label>
                <Form.Control
                    type="text"
                    maxLength={2000}
                    placeholder="Descripción de la receta"
                    required
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                />
            </Form.Group>
            <Button
                className="col-2 h-75 my-auto ms-auto"
                type="submit"
                variant="primary"
                onClick={handleSubmit}
            >
                +Agregar
            </Button>{" "}
        </Form>
    );
}

export default FormularioModal;
