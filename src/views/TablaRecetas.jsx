import Table from "react-bootstrap/Table";
import edit from "../assets/edit.svg";

function TablaRecetas() {
    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre Receta</th>
                    <th>Descripción</th>
                    <th>Link Imagen</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Pizza de Ananá</td>
                    <td>
                        No se no tengo idea Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Ex dignissimos, tempore
                        sunt ipsa doloribus laboriosam fugit enim error
                        accusamus! Dolores necessitatibus iste dolor doloribus
                        aperiam, nesciunt voluptatem rerum eos illo officiis
                        maxime rem. Nemo, placeat atque minus inventore
                        obcaecati delectus nostrum ea reprehenderit corrupti est
                        nulla! Quaerat quam quisquam, error nostrum molestiae
                        reprehenderit vero repellendus enim architecto quae,
                        assumenda quo dolores eius ratione provident asperiores
                        commodi natus illum veritatis optio! Numquam eum
                        quibusdam ducimus veritatis nihil temporibus sapiente
                        odit nisi accusantium corrupti libero ipsa, sunt
                        reiciendis quae ut consequatur ea expedita molestias non
                        neque saepe tempora. Amet odio earum repudiandae?
                    </td>
                    <td>
                        https://www.google.com/url?sa=i&url=https%3A%2F%2Fromario.com.ar%2Fproducto%2Fmozzarella-jamon-anana&psig=AOvVaw15WnBj6M7fItsjr5EG97Wp&ust=1709765581144000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLj-7qOb3oQDFQAAAAAdAAAAABAG
                    </td>
                    <td></td>
                </tr>
            </tbody>
        </Table>
    );
}

export default TablaRecetas;
