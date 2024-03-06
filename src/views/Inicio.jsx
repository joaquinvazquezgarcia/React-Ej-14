import React, { useState, useEffect } from "react";
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
    objetoDePrueba,
];

export const Inicio = () => {
    /* Acá iria la logica para obtener el array de localStorage */
    const [arrayRecetas, setRecetas] = useState([]);

    useEffect(() => {
        const obtenerObjetosLocalStorage = () => {
            const arrayLocalStorage = localStorage.getItem("tuClaveLocalStorage");
            if (arrayLocalStorage) {
                const arrayRecetas = JSON.parse(arrayLocalStorage);
                setRecetas(arrayRecetas);
            }
        };
        obtenerObjetosLocalStorage();
    }, []);

    return (
        <main className="inicioMain">
            <section className="inicioBanner container">
                <CardBanner props={arrayRecetas[0]} />
            </section>
            <section className="inicioMenuRecetas d-flex justify-content-between flex-wrap container">
                {arrayRecetas.map((object) => (
                    <CardInicio props={object} />
                ))}
            </section>
        </main>
    );

};
