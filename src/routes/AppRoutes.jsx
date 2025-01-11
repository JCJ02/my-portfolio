import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes;
