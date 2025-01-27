import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Ginseng } from "./pages";
import Layout from "@/components/Layout/Layout";
import Product from "./pages/Product/Product";
import { ToastContainer } from "react-toastify";

import "./App.css";
import "./styles/style.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/ginseng" element={<Ginseng />} />
                        <Route path="/product/:id" element={<Product />} />
                    </Routes>
                </Layout>
            </Router>
            <ToastContainer />
        </div>
    );
}

export default App;
