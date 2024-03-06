import React from "react";
import CardReceta from "./CardReceta";

export const Receta = () => {
    const currentObject = JSON.parse(localStorage.getItem("currentRead"));

    return (
        <main className="recetaMain">
            <section className="contenidoReceta container">
                <CardReceta props={currentObject} />
            </section>
        </main>
    );
};
