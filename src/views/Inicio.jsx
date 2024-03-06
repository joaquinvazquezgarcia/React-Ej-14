import React, { useState, useEffect } from "react";
import CardInicio from "./CardInicio";
import CardBanner from "./CardBanner";
import "../css/inicio.css";

export const Inicio = () => {
    /* Acá iria la logica para obtener el array de localStorage */
    const [arrayRecetas, setRecetas] = useState([]);

    useEffect(() => {
        const obtenerObjetosLocalStorage = () => {
            const arrayLocalStorage = localStorage.getItem("recetas");
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
                {arrayRecetas.length > 0 ? (
                    <CardBanner props={arrayRecetas[0]} />
                ) : (
                    <h2 className="text-center my-5">
                        Hola ¡todavia no hay recetas disponibles!
                    </h2>
                )}
            </section>
            <section className="inicioMenuRecetas d-flex justify-content-between flex-wrap container">
                {arrayRecetas.length > 0
                    ? arrayRecetas.map(object => <CardInicio props={object} />)
                    : ""}
            </section>
        </main>
    );
};
