import React from "react";

export default function Dashboard() {
  // Dica: Isolar os dados em um array deixa o código limpo (DRY) e facilita a integração com a API do backend futuramente.
  const cardsData = [
    {
      id: 1,
      title: "Chaves\ndisponíveis",
      value: "123",
      colorClass: "text-green-500",
    },
    {
      id: 2,
      title: "Chaves em\nuso",
      value: "321",
      colorClass: "text-senac-blue",
    },
    {
      id: 3,
      title: "Chaves\natrasadas",
      value: "213",
      colorClass: "text-yellow-500",
    },
    {
      id: 4,
      title: "Alertas de\npânicos",
      value: "2",
      colorClass: "text-red-600",
    },
  ];

  return (
    <div className="flex flex-col h-full w-full">
      <h1 className="text-3xl font-bold text-senac-blue-title mb-4">
        Dashboard
      </h1>

      {/* Grid dos Cards Superiores */}
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
          {/* Caixa tracejada temporária para visualizar o espaço */}
          <div className="flex-1 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400">
            Tabela de Histórico entrará aqui
          </div>
        </div>

        {/* Gerenciamento de Chaves mais estreita (ocupa 1 das 4 colunas) */}
        <div className="col-span-1 bg-transparent rounded-[20px] p-6 border border-gray-400 flex flex-col">
          <h2 className="text-xl font-bold text-center text-senac-blue-title mb-6">
            Gerenciamento de
            <br />
            chaves
          </h2>
          {/* Caixa tracejada temporária para visualizar o espaço */}
          <div className="flex-1 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 text-center px-4">
            Lista de repasses entrará aqui
          </div>
        </div>
      </div>
    </div>
  );
}
