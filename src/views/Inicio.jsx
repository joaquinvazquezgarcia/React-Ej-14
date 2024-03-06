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

/* Esto sería como el array que viene de localStorage */
const arrayDePrueba = [
    objetoDePrueba,
    objetoDePrueba,
    objetoDePrueba,
    objetoDePrueba,
    objetoDePrueba,
    objetoDePrueba,
];

export const Inicio = () => {
    /* Acá iria la logica para obtener el array de localStorage */
    return (
        <main className="inicioMain">
            <section className="inicioBanner container">
                <CardBanner props={objetoDePrueba} />
            </section>
            <section className="inicioMenuRecetas d-flex justify-content-between flex-wrap container">
                {arrayDePrueba.map(object => (
                    <CardInicio props={object} />
                ))}
            </section>
        </main>
    );
};
