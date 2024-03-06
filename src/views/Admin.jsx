import React from "react";
import Button from 'react-bootstrap/Button';
import VentanaModal from "./Modal";
import TablaRecetas from "./TablaRecetas";


export const Admin = () => {
    return (
        <main className="adminMain container">
            <section className="encabezadoAdmin container row my-3">
                <h1 className="col-10">Administración del sitio</h1>
                <Button className="col-2 h-75 my-auto" variant="primary">+Agregar</Button>{' '}
            </section>
            <section className="container mb-3">
                <TablaRecetas></TablaRecetas>
            </section>
        </main>
    );
};

