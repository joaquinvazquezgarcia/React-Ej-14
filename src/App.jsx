import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./common/Header";
import { Footer } from "./common/Footer";
import { Inicio } from "./views/Inicio";
import { Admin } from "./views/Admin";
import { Receta } from "./views/Receta";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/receta" element={<Receta />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
