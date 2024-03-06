import React from "react";
import CardReceta from "./CardReceta";

/* Eliminar despues es solo para que se muestre algo */
const objetoDePrueba = {
    title: "Objeto de Prueba",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias ullam delectus reprehenderit tenetur non ut alias fugit odio, tempora amet sit ratione numquam. Impedit aspernatur incidunt voluptate deleniti tenetur?",
    img: "https://www.cbc.ca/kidsnews/images/GOOGLE25THTHUMB2.png",
};

export const Receta = () => {
    return (
        <main className="recetaMain">
            <section className="contenidoReceta container">
                <CardReceta props={objetoDePrueba} />
            </section>
        </main>
    );
};

