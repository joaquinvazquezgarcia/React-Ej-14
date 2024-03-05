import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/cardInicio.css";

const CardInicio = props => {
    return (
        <Card
            className="my-3 mx-auto"
            style={{ width: "23%", minWidth: "250px" }}
        >
            <Card.Img
                variant="top"
                src="https://www.cbc.ca/kidsnews/images/GOOGLE25THTHUMB2.png"
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-4 text-center my-2">
                    {props.props.title}
                </Card.Title>
                <Button className="my-3 mx-5" variant="outline-dark">
                    Ver más
                </Button>
            </Card.Body>
        </Card>
    );
};

export default CardInicio;
