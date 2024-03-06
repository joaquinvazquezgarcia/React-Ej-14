import React from "react";
import TablaRecetas from "./TablaRecetas";
import FormularioModal from "./Modal";

export const Admin = () => {
    return (
        <main className="adminMain container">
            <FormularioModal></FormularioModal>
            <section className="encabezadoAdmin container row my-3">
                <h1 className="col-10">Administración del sitio</h1>
            </section>
            <section className="container mb-3">
                <TablaRecetas></TablaRecetas>
            </section>
        </main>
    );
};
