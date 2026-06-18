import React, { useState, useEffect } from "react";
import { Filter, ShieldAlert } from "lucide-react";
import { SalasServices } from "../services/api"; // Importando API simulada

export default function Salas() {
  const [salas, setSalas] = useState([]);
  const [loading, setLoading] = useState(true);

  // Estados dos Filtros (iniciam vazios para mostrar tudo)
  const [filtroAndar, setFiltroAndar] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("");

  // Busca os dados da "API" assim que a tela abre
  useEffect(() => {
    async function loadSalasData() {
      try {
        const data = await SalasServices.getSalas();
        setSalas(data);
      } catch (error) {
        console.error("Erro ao carregar salas", error);
      } finally {
        setLoading(false);
      }
    }
    loadSalasData();
  }, []);

  // Lógica de Filtragem Dinâmica
  const salasFiltradas = salas.filter((item) => {
    let passaFiltro = true;
    if (filtroAndar !== "" && item.andar !== filtroAndar) passaFiltro = false;
    if (filtroTipo !== "" && item.tipo !== filtroTipo) passaFiltro = false;
    if (filtroStatus !== "" && item.status !== filtroStatus)
      passaFiltro = false;
    return passaFiltro;
  });

  // Tela de carregamento igual à do Dashboard
  if (loading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-senac-blue"></div>
        <span className="ml-3 text-lg font-semibold text-senac-blue">
          Buscando salas...
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full">
      <h1 className="text-3xl font-bold text-senac-blue-title mb-8">
        Gerenciamento de Salas
      </h1>

      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center gap-2 text-senac-blue font-bold text-lg mr-2">
          <span>Filtros</span>
          <Filter size={20} className="fill-senac-blue" />
        </div>

        {/* Dropdown de Andar */}
        <select
          value={filtroAndar}
          onChange={(e) => setFiltroAndar(e.target.value)}
          className="px-4 py-2 rounded-xl border border-blue-300 text-senac-blue bg-blue-50 focus:outline-none focus:ring-2 focus:ring-senac-blue font-medium cursor-pointer appearance-none"
        >
          <option value="">Todos os andares</option>
          <option value="14º andar">14º andar</option>
          <option value="15º andar">15º andar</option>
        </select>

        {/* Dropdown de Tipo */}
        <select
          value={filtroTipo}
          onChange={(e) => setFiltroTipo(e.target.value)}
          className="px-4 py-2 rounded-xl border border-blue-300 text-senac-blue bg-blue-50 focus:outline-none focus:ring-2 focus:ring-senac-blue font-medium cursor-pointer appearance-none"
        >
          <option value="">Todos os tipos</option>
          <option value="Laboratório">Laboratório</option>
          <option value="Sala comum">Sala comum</option>
        </select>

        {/* Dropdown de Status */}
        <select
          value={filtroStatus}
          onChange={(e) => setFiltroStatus(e.target.value)}
          className="px-4 py-2 rounded-xl border border-blue-300 text-senac-blue bg-blue-50 focus:outline-none focus:ring-2 focus:ring-senac-blue font-medium cursor-pointer appearance-none"
        >
          <option value="">Todos os status</option>
          <option value="Disponível">Disponível</option>
          <option value="Em aula">Em aula</option>
        </select>
      </div>

      {/* Grid Principal das Salas */}
      <div className="flex flex-col gap-4 overflow-y-auto pb-4 pr-2">
        <div className="grid grid-cols-[1fr_1fr_1fr_2.5fr] gap-4 mb-2">
          <div className="bg-blue-600 text-white font-semibold py-4 rounded-2xl text-center shadow-md">
            Andar
          </div>
          <div className="bg-blue-600 text-white font-semibold py-4 rounded-2xl text-center shadow-md">
            Sala de aula
          </div>
          <div className="bg-blue-600 text-white font-semibold py-4 rounded-2xl text-center shadow-md">
            Tipo de sala
          </div>
          <div className="bg-blue-600 text-white font-semibold py-4 rounded-2xl text-center shadow-md">
            Quem pegou/Horário/Status
          </div>
        </div>

        {salasFiltradas.length > 0 ? (
          salasFiltradas.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[1fr_1fr_1fr_2.5fr] gap-4"
            >
              <div className="bg-white border border-gray-200 text-gray-700 font-medium py-4 rounded-2xl text-center shadow-sm flex items-center justify-center">
                {item.andar}
              </div>
              <div className="bg-white border border-gray-200 text-gray-700 font-medium py-4 rounded-2xl text-center shadow-sm flex items-center justify-center">
                {item.sala}
              </div>
              <div className="bg-white border border-gray-200 text-gray-700 font-medium py-4 rounded-2xl text-center shadow-sm flex items-center justify-center">
                {item.tipo}
              </div>
              <div
                className={`border py-4 rounded-2xl text-center flex items-center justify-center transition-all ${
                  item.status === "Pânico"
                    ? "border-red-600 border-2 animate-sirene text-red-900"
                    : "bg-white border-gray-200 shadow-sm"
                }`}
              >
                {item.status === "Disponível" && (
                  <span className="text-green-500 font-bold tracking-wide">
                    Disponível
                  </span>
                )}

                {(item.status === "Em aula" || item.status === "Atrasado") && (
                  <span className="text-gray-700 font-medium text-sm">
                    {item.ocupanteTitulo}{" "}
                    <strong className="text-black">{item.ocupanteNome}</strong>{" "}
                    - {item.horario} -{" "}
                    <span className="text-senac-orange font-semibold">
                      {item.status}
                    </span>
                  </span>
                )}

                {item.status === "Pânico" && (
                  <span className="text-red-600 font-black tracking-widest uppercase text-base flex items-center gap-2">
                    <ShieldAlert size={20} className="text-red-600" />
                    Acionamento de Pânico!
                  </span>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-500 font-medium">
            Nenhuma sala encontrada com estes filtros.
          </div>
        )}
      </div>
    </div>
  );
}
