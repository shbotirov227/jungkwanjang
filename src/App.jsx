import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Ginseng } from "./pages";
import Layout from "@/components/Layout/Layout";

import "./App.css";
import "./styles/style.css";

function App() {
    return (
        <div className="App">
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
            </div>
        </div>
    );
}

export default App;
