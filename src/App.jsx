import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Ginseng } from "./pages";
import Layout from "@/components/Layout/Layout";

import "./App.css";
import "./styles/style.css";
import { ToastContainer } from "react-toastify";

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
                    </Routes>
                </Layout>
            </Router>
            <ToastContainer />
        </div>
    );
}

export default App;
