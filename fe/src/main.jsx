import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ProductsProvider from "./context/ContextProducts.jsx";
import { ParentProvider } from "./context/ParentBook.jsx";
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <ProductsProvider>
                <ParentProvider>
                    <App />
                </ParentProvider>
            </ProductsProvider>
        </BrowserRouter>
    </StrictMode>
);
