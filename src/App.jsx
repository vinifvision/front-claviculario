import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Salas from "./pages/Salas";
import Usuarios from "./pages/Usuarios";
import Layout from "./components/Layout";
import Autorizacoes from "./pages/Autorizacoes";
import Config from "./pages/Config";
import Coordenador from "./pages/Coordenador";
import ButtonPage from "./pages/button"; // Importa a página do botão de volta

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota inicial leva para o Login */}
        <Route path="/" element={<Login />} />

        {/* Rotas administrativas com a Sidebar fixa */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/salas" element={<Salas />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/autorizacoes" element={<Autorizacoes />} />
          <Route path="/configuracoes" element={<Config />} />
          
          {/* Rota correta para a página do botão de alerta */}
          <Route path="/button" element={<ButtonPage />} />

          {/* Rota correta para a página do Coordenador */}
          <Route path="/coordenador" element={<Coordenador />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;