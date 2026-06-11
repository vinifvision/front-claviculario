import React from "react";
import { useNavigate } from "react-router-dom";
import escudoImg from "../assets/escudo.svg";

export default function Login() {
  const navigate = useNavigate();

  // Função pra simular o login e trocar de tela
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen w-full bg-background-light">
      {/* Lado Esquerdo painel azul */}
      <div className="w-1/2 bg-senac-blue rounded-r-[50px] flex items-center justify-center shadow-lg">
        <img
          src={escudoImg}
          alt="Escudo de Segurança"
          className="w-40 h-auto drop-shadow-md"
        />
      </div>

      {/* Lado Direito formulário */}
      <div className="w-1/2 flex flex-col items-center justify-center px-12">
        <div className="w-full max-w-sm text-center">
          <h1 className="text-4xl font-bold text-senac-blue-title mb-2">
            Fazer login
          </h1>
          <p className="text-gray-800 mb-10 text-lg">
            Conecte-se com uma conta
          </p>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Usuário"
              className="w-full px-5 py-3 rounded-3xl bg-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-senac-blue transition-all"
            />

            <input
              type="password"
              placeholder="Senha"
              className="w-full px-5 py-3 rounded-3xl bg-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-senac-blue transition-all"
            />

            <div className="text-right mt-[-10px]">
              <a
                href="#"
                className="text-sm text-senac-blue-title font-semibold hover:underline"
              >
                Esqueceu a senha?
              </a>
            </div>

            <button
              type="submit"
              className="mt-4 cursor-pointer w-full bg-senac-blue text-white font-semibold text-lg py-3 rounded-3xl hover:bg-blue-800 transition-colors shadow-md"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
