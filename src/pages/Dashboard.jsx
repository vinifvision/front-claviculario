// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { DashboardService } from "../services/api";

export default function Dashboard() {
  const [metrics, setMetrics] = useState(null);
  const [historico, setHistorico] = useState([]);
  const [gerenciamento, setGerenciamento] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dispara todas as buscas simuladas em paralelo
    async function loadDashboardData() {
      try {
        const [resMetrics, resHistorico, resGerenciamento] = await Promise.all([
          DashboardService.getMetrics(),
          DashboardService.getHistorico(),
          DashboardService.getGerenciamento(),
        ]);

        setMetrics(resMetrics);
        setHistorico(resHistorico);
        setGerenciamento(resGerenciamento);
      } catch (error) {
        console.error("Erro ao carregar dados simulados", error);
      } finally {
        setLoading(false);
      }
    }

    loadDashboardData();
  }, []);

  const cardsData = [
    {
      id: 1,
      title: "Chaves\ndisponíveis",
      value: metrics?.disponiveis,
      colorClass: "text-green-500",
    },
    {
      id: 2,
      title: "Chaves em\nuso",
      value: metrics?.em_uso,
      colorClass: "text-senac-blue",
    },
    {
      id: 3,
      title: "Chaves\natrasadas",
      value: metrics?.atrasadas,
      colorClass: "text-yellow-500",
    },
    {
      id: 4,
      title: "Alertas de\npânicos",
      value: metrics?.panicos,
      colorClass: "text-red-600",
    }, // Mantive a cor do texto do painel
  ];

  if (loading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-senac-blue"></div>
        <span className="ml-3 text-lg font-semibold text-senac-blue">
          Sincronizando painel...
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full">
      <h1 className="text-3xl font-bold text-senac-blue-title mb-4">
        Dashboard
      </h1>

      {/* 4 cards superiores baseado no estado simulado */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="bg-transparent rounded-[20px] py-4 px-4 flex flex-col items-center justify-center border border-gray-400"
          >
            {/* whitespace-pre-line permite que o "\n" quebre a linha no React */}
            <h3 className="text-senac-blue-title font-normal text-center text-lg leading-tight mb-4 whitespace-pre-line">
              {card.title}
            </h3>
            <span className={`text-4xl font-bold ${card.colorClass}`}>
              {card.value}
            </span>
          </div>
        ))}
      </div>

      {/* Área Inferior: Tabela e Gerenciamento */}
      <div className="flex-1 grid grid-cols-4 gap-6 min-h-0">
        {/* Tabela de Histórico mais larga (ocupa 3 das 4 colunas) */}
        <div className="col-span-3 bg-transparent rounded-[20px] p-6 border border-gray-400 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-senac-blue-title">
              Histórico de chaves
            </h2>
            <button className="text-senac-blue font-normal hover:underline">
              Ver todos
            </button>
          </div>

          {/* Tabela Real em substituição ao tracejado */}
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-500 font-semibold text-xs border-b border-gray-300">
                  <th className="pb-3">Usuário</th>
                  <th className="pb-3">Ação</th>
                  <th className="pb-3">Local</th>
                  <th className="pb-3">Data/Hora</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                {historico.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-200 hover:bg-black/5 transition-colors"
                  >
                    <td className="py-4 font-medium">{item.usuario}</td>
                    <td className="py-4">{item.acao}</td>
                    <td className="py-4 whitespace-pre-line text-xs">
                      {item.local}
                    </td>
                    <td className="py-4 whitespace-pre-line text-xs text-gray-500">
                      {item.dataHora}
                    </td>
                    <td className="py-4">
                      {/* Badge condicional: verde se Sucesso, vermelho se Negado */}
                      <span
                        className={`px-4 py-1 rounded-full text-xs font-semibold border ${
                          item.status === "Sucesso"
                            ? "bg-green-50 border-green-300 text-green-600"
                            : "bg-red-50 border-red-300 text-red-600"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Gerenciamento de Chaves mais estreita (ocupa 1 das 4 colunas) */}
        <div className="col-span-1 bg-transparent rounded-[20px] p-6 border border-gray-400 flex flex-col">
          <h2 className="text-xl font-bold text-center text-senac-blue-title mb-6">
            Gerenciamento de
            <br />
            chaves
          </h2>

          {/* Lista Real de Repasses em substituição ao tracejado */}
          <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-1">
            {gerenciamento.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 border-b border-gray-200 pb-3 last:border-0"
              >
                {/* Círculo cinza para o avatar do professor */}
                <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-gray-700 leading-tight">
                    {/* Aqui quebramos o texto destacando o Pedro em negrito se quiser, mas mantive o texto puro do seu mock */}
                    {item.texto}
                  </p>
                  <span className="text-[10px] text-gray-400 align-right self-end mt-1">
                    {item.hora}
                  </span>
                </div>
              </div>
            ))}

            <button className="text-center text-senac-blue font-semibold text-xs hover:underline mt-auto pt-4">
              Ver todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
