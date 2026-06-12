import React, { useState, useEffect } from "react";
import { AutorizacoesService } from "../services/api";

export default function Autorizacoes() {
  // 1. TODOS OS HOOKS DEVEM FICAR NO TOPO
  const [usuarios, setUsuarios] = useState([]);
  const [professorSelecionado, setProfessorSelecionado] = useState("");
  const [representanteSelecionado, setRepresentanteSelecionado] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ MOVIDO PARA CÁ: O estado do popup agora é lido em todas as renderizações
  const [popup, setPopup] = useState({ isOpen: false, message: "", type: "" });

  useEffect(() => {
    async function load() {
      try {
        const data = await AutorizacoesService.getUsuarios();
        setUsuarios(data);
      } catch (error) {
        console.error("Erro ao carregar os dados", error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // 2. FUNÇÕES E VARIÁVEIS DERIVADAS
  const closePopup = () => setPopup({ ...popup, isOpen: false });

  const professores = usuarios.filter((u) =>
    ["Professor", "Professora"].includes(u.papel),
  );

  const representantes = usuarios.filter((u) => u.papel === "Representante");

  function handleAutorizar() {
    if (!professorSelecionado || !representanteSelecionado) {
      setPopup({
        isOpen: true,
        message: "Selecione o professor e o representante.",
        type: "error",
      });
      return;
    }

    setPopup({
      isOpen: true,
      message: "Troca de chave autorizada com sucesso!",
      type: "success",
    });

    setProfessorSelecionado("");
    setRepresentanteSelecionado("");
  }

  // 3. RETORNO ANTECIPADO (Abaixo de todos os hooks!)
  if (loading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-senac-blue"></div>
        <span className="ml-3 text-lg font-semibold text-senac-blue">
          Carregando dados...
        </span>
      </div>
    );
  }

  // 4. RENDERIZAÇÃO PRINCIPAL
  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <div className="bg-white rounded-[30px] p-10 w-full max-w-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-senac-blue text-center mb-10">
          Autorização de posse de chave
        </h1>

        {/* The Custom Popup */}
        {popup.isOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="bg-white p-8 rounded-[30px] shadow-2xl text-center min-w-[320px] transform transition-all">
              <h3
                className={`text-2xl font-bold mb-4 ${
                  popup.type === "error" ? "text-red-500" : "text-green-500"
                }`}
              >
                {popup.type === "error" ? "Atenção" : "Sucesso"}
              </h3>

              <p className="text-gray-600 mb-8 text-lg">{popup.message}</p>

              <button
                onClick={closePopup}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-2xl transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        )}

        {/* Select Professor */}
        <select
          value={professorSelecionado}
          onChange={(e) => setProfessorSelecionado(e.target.value)}
          className="w-full px-5 py-3 rounded-2xl bg-gray-100 border border-transparent focus:bg-white focus:border-senac-blue outline-none transition-all appearance-none cursor-pointer text-gray-500 mb-6"
        >
          <option value="">Selecionar professor</option>
          {professores.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nome}
            </option>
          ))}
        </select>

        <p className="text-center font-semibold text-senac-blue mb-6">
          Passou a chave para o representante de sala:
        </p>

        {/* Select Representante */}
        <select
          value={representanteSelecionado}
          onChange={(e) => setRepresentanteSelecionado(e.target.value)}
          className="w-full px-5 py-3 rounded-2xl bg-gray-100 border border-transparent focus:bg-white focus:border-senac-blue outline-none transition-all appearance-none cursor-pointer text-gray-500 mb-8"
        >
          <option value="">Selecionar representante</option>
          {representantes.map((r) => (
            <option key={r.id} value={r.id}>
              {r.nome}
            </option>
          ))}
        </select>

        <button
          onClick={handleAutorizar}
          className="w-full bg-senac-blue text-white font-bold text-lg py-4 rounded-2xl hover:bg-blue-800 transition-colors shadow-md"
        >
          Autorizamos a troca de passe
        </button>
      </div>
    </div>
  );
}
