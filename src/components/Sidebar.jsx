import React from "react";
import { Link, NavLink } from "react-router-dom"; // Importamos o NavLink aqui
import {
  LayoutDashboard,
  DoorClosed,
  Users,
  ShieldCheck,
  List,
  Settings,
  UserRound,
} from "lucide-react";
import escudoImg from "../assets/escudo.svg";

export default function Sidebar() {
  // Função que verifica se a rota está ativa e aplica o fundo escuro
  const navLinkClass = ({ isActive }) => {
    return `flex items-center gap-3 text-xs transition-colors p-2 rounded-xl ${
      isActive
        ? "bg-black/20 text-senac-orange font-semibold"
        : "text-white hover:text-senac-orange"
    }`;
  };

  return (
    // Seu código com w-40, rounded-[25px], etc., mantido intacto
    <aside className="w-40 bg-senac-blue text-white flex flex-col justify-between h-full rounded-[25px] py-5 px-3 shadow-xl">
      {/* Topo: Logo e Título */}
      <div>
        <div className="flex items-center gap-3 mb-12">
          <img
            src={escudoImg}
            alt="Logo Controle de Acesso"
            className="w-10 h-10"
          />
          <h2 className="font-bold text-xs leading-tight">
            Controle
            <br />
            de acesso
          </h2>
        </div>

        {/* Menu de Navegação - Trocamos Link por NavLink e adicionamos a função de classe */}
        <nav className="flex flex-col gap-2">
          <NavLink to="/dashboard" className={navLinkClass}>
            <LayoutDashboard size={22} />
            <span>Tela inicial</span>
          </NavLink>

          <NavLink to="/salas" className={navLinkClass}>
            <DoorClosed size={22} />
            <span>Salas</span>
          </NavLink>

          <NavLink to="/usuarios" className={navLinkClass}>
            <Users size={22} />
            <span>Usuarios</span>
          </NavLink>

          <NavLink to="/autorizacoes" className={navLinkClass}>
            <ShieldCheck size={22} />
            <span>Autorizações</span>
          </NavLink>
        </nav>
      </div>

      {/* Rodapé: Configurações e Perfil */}
      <div>
        <Link
          to="/configuracoes"
          className="flex items-center gap-3 text-xs hover:text-senac-orange transition-colors mb-6 p-2"
        >
          <Settings size={22} />
          <span>Configurações</span>
        </Link>

        {/* Card de Perfil Laranja */}
        <Link
          to="/coordenador"
          className="bg-senac-orange rounded-full py-2 px-3 flex cursor-pointer hover:brightness-110 transition-all shadow-md"
        >
          <div className="flex items-center gap-1">
            <UserRound size={16} className="text-senac-blue" />
            <span className="font-semibold text-sm text-senac-blue">
              Coordenador
            </span>
          </div>
        </Link>
      </div>
    </aside>
  );
}
