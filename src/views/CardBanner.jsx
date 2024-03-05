import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardBanner(props) {
    return (
        <Card className="d-flex flex-row flex-wrap mt-5">
            <Card.Img
                variant="img-fluid rounded-start w-50 object-fit-cover"
                src="https://www.cbc.ca/kidsnews/images/GOOGLE25THTHUMB2.png"
            />
            <Card.Body className=" w-50 d-flex flex-column justify-content-center">
                <Card.Title>{props.props.title}</Card.Title>
                <Card.Text>{props.props.description}</Card.Text>
                <Button variant="outline-dark w-25">Ver más</Button>
            </Card.Body>
        </Card>
    );
}

export default CardBanner;
