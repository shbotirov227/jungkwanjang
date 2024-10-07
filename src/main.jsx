import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
// import { ChakraProvider } from "@chakra-ui/react"
import App from "./App.jsx";

import "./index.css";
import './i18n';

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <ChakraProvider> */}
        <App />
        <Analytics />
        {/* </ChakraProvider> */}
    </StrictMode>
);
