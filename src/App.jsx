import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Salas from "./pages/Salas";
import Usuarios from "./pages/Usuarios";
import Layout from "./components/Layout";
import Autorizacoes from "./pages/Autorizacoes";
import Config from "./pages/Config";
import ButtonPage from "./pages/button"; // Forçado com 'b' minúsculo para alinhar com o arquivo

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
          <Route path="/button" element={<ButtonPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;