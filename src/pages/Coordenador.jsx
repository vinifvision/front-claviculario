import React from "react";
import { useNavigate } from "react-router-dom";
import { UserRound, Mail, IdCard, Briefcase, LogOut } from "lucide-react";

export default function Coordenador() {
  const navigate = useNavigate();

  // Informações do coordenador
  const coordenadorInfo = {
    nome: "Luan",
    sobrenome: "Barbosa",
    matricula: "202610982",
    email: "coordenador@claviculario.edu.br",
    cargo: "Coordenador Geral",
  };

  const handleLogout = () => {
    navigate("/"); // Redireciona para o Login
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[75vh] p-4">
      {/* Card Principal Totalmente Centralizado e Simétrico */}
      <div className="w-full max-w-md bg-white rounded-[20px] p-8 shadow-md border border-gray-300 flex flex-col items-center text-center">
        {/* Avatar Centralizado */}
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center shadow-sm border border-gray-300 mb-4">
          <UserRound size={44} className="text-gray-500" />
        </div>

        {/* Nome e Cargo Centralizados */}
        <h1 className="text-2xl font-bold text-senac-blue-title mb-2">
          {coordenadorInfo.nome} {coordenadorInfo.sobrenome}
        </h1>
        <span className="text-sm font-semibold text-senac-orange bg-orange-50 px-4 py-1 rounded-full border border-orange-200 mb-6">
          {coordenadorInfo.cargo}
        </span>

        {/* Linha Divisória Simétrica */}
        <div className="w-full border-t border-gray-200 mb-4"></div>

        {/* Blocos de Informação Alinhados e Simétricos */}
        <div className="w-full space-y-3">
          {/* Campo: Matrícula */}
          <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-xl border border-gray-200 w-full">
            <div className="flex items-center gap-1.5 text-gray-400 mb-1">
              <IdCard size={15} />
              <span className="text-[10px] font-bold uppercase tracking-wider">
                Matrícula
              </span>
            </div>
            <span className="text-base font-mono font-medium text-gray-700">
              {coordenadorInfo.matricula}
            </span>
          </div>

          {/* Campo: E-mail */}
          <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-xl border border-gray-200 w-full">
            <div className="flex items-center gap-1.5 text-gray-400 mb-1">
              <Mail size={15} />
              <span className="text-[10px] font-bold uppercase tracking-wider">
                E-mail Corporativo
              </span>
            </div>
            <span className="text-base font-medium text-gray-700 break-all">
              {coordenadorInfo.email}
            </span>
          </div>

          {/* Campo: Cargo */}
          <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-xl border border-gray-200 w-full">
            <div className="flex items-center gap-1.5 text-gray-400 mb-1">
              <Briefcase size={15} />
              <span className="text-[10px] font-bold uppercase tracking-wider">
                Cargo / Função
              </span>
            </div>
            <span className="text-base font-medium text-gray-700">
              {coordenadorInfo.cargo}
            </span>
          </div>
        </div>

        {/* Botão de Logout Centralizado na Base */}
        <button
          onClick={handleLogout}
          className="w-full mt-6 flex items-center justify-center gap-2 bg-red-600 text-white py-3.5 px-6 rounded-xl font-bold hover:bg-red-700 active:bg-red-800 transition-colors shadow-md cursor-pointer"
        >
          <LogOut size={18} />
          Sair da Conta (Log Out)
        </button>
      </div>
    </div>
  );
}
