// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/salas"
            element={
              <h1 className="text-3xl font-bold text-senac-blue-title">
                Gerenciamento de Salas
              </h1>
            }
          />
          <Route
            path="/usuarios"
            element={
              <h1 className="text-3xl font-bold text-senac-blue-title">
                Usuários
              </h1>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
