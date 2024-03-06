import React from "react";
import Card from "react-bootstrap/Card";
import "../css/cardReceta.css";

const CardReceta = props => {
    return (
        <Card className="my-3 mx-auto anchoCardReceta">
            <Card.Img
                variant="top"
                src={props.props.url}
                className="altoCardImg"
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-1 text-center my-2">
                    {props.props.title}
                </Card.Title>
                <Card.Text className="fs-6 text-center my-2">
                    {props.props.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardReceta;
