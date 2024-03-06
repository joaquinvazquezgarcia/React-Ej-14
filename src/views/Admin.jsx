import React from "react";
import TablaRecetas from "./TablaRecetas";
import FormularioModal from "./Modal";
import { useState } from "react";

export const Admin = () => {
    if (localStorage.getItem("recetas") == null) {
        localStorage.setItem("recetas", []);
    }
    const [recipiesArray, setRecipiesArray] = useState(() => {
        const storedRecipes = localStorage.getItem("recetas");
        return storedRecipes ? JSON.parse(storedRecipes) : [];
    });

    return (
        <main className="adminMain container">
            <FormularioModal
                recipiesArray={recipiesArray}
                setRecipiesArray={setRecipiesArray}
            />
            <section className="encabezadoAdmin container row my-3">
                <h1 className="col-10">Administración del sitio</h1>
            </section>
            <section className="container mb-3">
                <TablaRecetas
                    recipiesArray={recipiesArray}
                    setRecipiesArray={setRecipiesArray}
                ></TablaRecetas>
            </section>
        </main>
    );
};
