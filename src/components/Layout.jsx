import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleSidebarClick = (e) => {
      // Verifica se o clique ocorreu no card laranja do coordenador ou em seus filhos
      const coordenadorCard = e.target.closest(".bg-senac-orange");
      if (coordenadorCard) {
        navigate("/coordenador");
      }
    };

    // Adiciona o ouvinte de clique global na janela
    window.addEventListener("click", handleSidebarClick);

    // Remove o ouvinte ao desmontar o componente para evitar vazamento de memória
    return () => {
      window.removeEventListener("click", handleSidebarClick);
    };
  }, [navigate]);

  return (
    <div className="flex h-screen w-full bg-background-light overflow-hidden">
      <div className="py-4 pl-2 h-full">
        <Sidebar />
      </div>

      <main className="flex-1 overflow-y-auto py-5 pr-5 pl-10 animate-[fadeIn_0.5s_ease-out]">
        <Outlet />
      </main>
    </div>
  );
}