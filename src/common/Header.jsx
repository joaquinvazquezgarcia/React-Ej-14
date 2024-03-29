import React from "react";
import user from "../assets/user-svg.svg";
import "../css/header.css";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="container-fluid bg-secondary-subtle flex-wrap py-5 px-5 d-flex justify-content-between">
            <Link to={"/"}>
                <h1 className="lh-base text-center fs-1 mb-0  d-flex align-items-center">
                    Rolling Kitchen
                </h1>
            </Link>
            <Link to={"/admin"}>
                <button
                    className="headerBotonAdmin btn btn-outline-dark my-3  py-2 d-flex justify-content-evenly"
                    variant="outline-dark"
                >
                    <img className="adminImg w-25" src={user} />
                    Admin
                </button>
            </Link>
        </header>
    );
};
