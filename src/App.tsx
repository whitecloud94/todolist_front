import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Entrance from "@/pages/Entrance.tsx";
import Main from "@/pages/Main.tsx";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Entrance />} />
                <Route path="/dashboard" element={<Main />} />
            </Routes>
        </Router>
    );
};

export default App;
