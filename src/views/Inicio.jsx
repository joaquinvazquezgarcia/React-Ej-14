import React from "react";
import CardInicio from "./CardInicio";
import CardBanner from "./CardBanner";
import "../css/inicio.css";

/* Eliminar despues es solo para que se muestre algo */
const objetoDePrueba = {
    title: "Objeto de Prueba",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias ullam delectus reprehenderit tenetur non ut alias fugit odio, tempora amet sit ratione numquam. Impedit aspernatur incidunt voluptate deleniti tenetur?",
    img: "https://www.cbc.ca/kidsnews/images/GOOGLE25THTHUMB2.png",
};

export const Inicio = () => {
    return (
        <main className="inicioMain">
            <section className="inicioBanner container">
                <CardBanner props={objetoDePrueba} />
            </section>
            <section className="inicioMenuRecetas d-flex justify-content-between flex-wrap container">
                <CardInicio props={objetoDePrueba} />
                <CardInicio props={objetoDePrueba} />
                <CardInicio props={objetoDePrueba} />
                <CardInicio props={objetoDePrueba} />
                <CardInicio props={objetoDePrueba} />
                <CardInicio props={objetoDePrueba} />
                <CardInicio props={objetoDePrueba} />
                <CardInicio props={objetoDePrueba} />
            </section>
        </main>
    );
};
