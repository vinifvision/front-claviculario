import React, { useState, useEffect } from "react";
import { AutorizacoesService } from "../services/api";

export default function Autorizacoes() {
  const [usuarios, setUsuarios] = useState([]);
  const [professorSelecionado, setProfessorSelecionado] = useState("");
  const [representanteSelecionado, setRepresentanteSelecionado] = useState("");

  useEffect(() => {
    async function load() {
      const data = await AutorizacoesService.getUsuarios();
      setUsuarios(data);
    }
    load();
  }, []);

  const professores = usuarios.filter((u) =>
    ["Professor", "Professora"].includes(u.papel)
  );

  const representantes = usuarios.filter((u) => u.papel === "Representante");

  function handleAutorizar() {
    if (!professorSelecionado || !representanteSelecionado) {
      alert("Selecione o professor e o representante.");
      return;
    }
    alert("Troca de chave autorizada com sucesso!");
    setProfessorSelecionado("");
    setRepresentanteSelecionado("");
  }

  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <div className="bg-white rounded-[30px] p-10 w-full max-w-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-senac-blue text-center mb-10">
          Autorização de posse de chave
        </h1>

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