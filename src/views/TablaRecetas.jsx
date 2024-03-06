import React from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

function TablaRecetas(props) {
    const handleDeletion = id => {
        props.setRecipiesArray(
            props.recipiesArray.filter(recipe => recipe.id !== id)
        );
    };

    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Nombre Receta</th>
                    <th>Descripción</th>
                    <th>Link Imagen</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {props.recipiesArray.map(recipe => (
                    <tr key={recipe.id}>
                        <td>{recipe.title}</td>
                        <td>{recipe.description}</td>
                        <td>{recipe.url}</td>
                        <td className="d-flex justify-content-evenly">
                            <Button variant="secondary">Editar</Button>
                            <Button
                                variant="danger"
                                onClick={() => handleDeletion(recipe.id)}
                            >
                                Eliminar
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default TablaRecetas;
