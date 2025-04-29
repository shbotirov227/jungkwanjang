import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Contact, Ginseng } from "./pages";
import Layout from "@/components/Layout/Layout";
import Product from "./pages/Product/Product";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import { Spinner, VStack, Text } from "@chakra-ui/react";

import "./App.css";
import "./styles/style.css";
import 'react-toastify/dist/ReactToastify.css';


function App() {
    return (
        <div className="App">
            <Router>
                <Suspense fallback={
                    <VStack minH="100vh" justify="center" align="center">
                        <Spinner
                            size="xl"
                            width={30}
                            height={30}
                            thickness="4px"
                            borderWidth="4px"
                            color="colorPalette.600"
                        />
                        <Text fontSize="2xl" mt="4" color="colorPalette.600">Loading...</Text>
                    </VStack >

                }>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/ginseng" element={<Ginseng />} />
                            <Route path="/product/:id" element={<Product />} />
                        </Routes>
                    </Layout>
                    <ToastContainer />
                </Suspense>
            </Router>
        </div>
    );
}

export default App;
