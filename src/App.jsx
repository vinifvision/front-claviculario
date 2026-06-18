// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Salas from "./pages/Salas";
import Usuarios from "./pages/Usuarios";
import Layout from "./components/Layout";
import Autorizacoes from "./pages/Autorizacoes";
import Config from "./pages/Config";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/salas" element={<Salas />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/autorizacoes" element={<Autorizacoes />} />
          <Route path="/configuracoes" element={<Config />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
