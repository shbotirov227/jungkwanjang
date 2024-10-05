import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { ChakraProvider } from "@chakra-ui/react"
import App from "./App.jsx";
import "./index.css";
import './i18n';
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <ChakraProvider> */}
        <App />
        <Analytics />
        {/* </ChakraProvider> */}
    </StrictMode>
);
