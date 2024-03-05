import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./common/Header";
import { Footer } from "./common/Footer";
import { Inicio } from "./views/Inicio";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Inicio />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
