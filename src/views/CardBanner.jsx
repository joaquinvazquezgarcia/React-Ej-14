import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CardBanner(props) {
    const handleClick = () => {
        localStorage.setItem("currentRead", JSON.stringify(props.props));
    };
    return (
        <Card className="d-flex flex-row flex-wrap mt-5">
            <Card.Img
                variant="img-fluid rounded-start w-50 object-fit-cover"
                src={props.props.url}
            />
            <Card.Body className=" w-50 d-flex flex-column justify-content-center">
                <Card.Title>{props.props.title}</Card.Title>
                <Card.Text>{props.props.description}</Card.Text>
                <Button variant="outline-dark w-25" onClick={handleClick}>
                    <Link to={"/receta"}>Ver más</Link>
                </Button>
            </Card.Body>
        </Card>
    );
}

export default CardBanner;
