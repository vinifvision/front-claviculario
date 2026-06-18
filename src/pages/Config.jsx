import React, { useState } from "react";
import { Type, Palette, MonitorPlay, Eye } from "lucide-react";

export default function Config() {
  // Estados de Acessibilidade
  const [altoContraste, setAltoContraste] = useState(false);
  const [reduzirAnimacoes, setReduzirAnimacoes] = useState(false);
  const [tamanhoFonte, setTamanhoFonte] = useState("padrao"); // padrao, grande, gigante

  return (
    <div className="flex flex-col h-full w-full relative animate-[fadeIn_0.5s_ease-out]">
      {/* Cabeçalho */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-senac-blue">Acessibilidade</h1>
        <p className="text-gray-500 mt-2">
          Personalize a interface do sistema para melhor atender às suas
          necessidades visuais e de navegação.
        </p>
      </div>

      {/* Grid de Configurações */}
      <div className="flex flex-col gap-6 overflow-y-auto pb-6 pr-2">
        {/* 1. Bloco de Visão e Contraste */}
        <div className="bg-white rounded-[20px] p-6 border border-gray-200 shadow-sm flex items-start gap-5 transition-all hover:shadow-md">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <Palette size={24} className="text-purple-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-senac-blue mb-1">
              Cores e Contraste
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Ajuste as cores da tela para facilitar a leitura.
            </p>

            <div className="flex flex-col gap-4">
              {/* Toggle de Alto Contraste */}
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <Eye size={20} className="text-gray-500" />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Modo de Alto Contraste
                    </h3>
                    <p className="text-xs text-gray-500">
                      Aumenta a diferença entre o texto e o fundo da tela.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setAltoContraste(!altoContraste)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${altoContraste ? "bg-senac-blue" : "bg-gray-300"}`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${altoContraste ? "translate-x-7" : "translate-x-1"}`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Bloco de Tipografia */}
        <div className="bg-white rounded-[20px] p-6 border border-gray-200 shadow-sm flex items-start gap-5 transition-all hover:shadow-md">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <Type size={24} className="text-senac-blue" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-senac-blue mb-1">
              Tamanho do Texto
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Aumente ou diminua as letras de todo o sistema.
            </p>

            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setTamanhoFonte("padrao")}
                className={`py-3 rounded-xl border font-medium flex flex-col items-center justify-center gap-1 transition-all ${tamanhoFonte === "padrao" ? "bg-blue-50 border-senac-blue text-senac-blue ring-1 ring-senac-blue" : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"}`}
              >
                <span className="text-base">Aa</span>
                <span className="text-xs">Padrão</span>
              </button>

              <button
                onClick={() => setTamanhoFonte("grande")}
                className={`py-3 rounded-xl border font-medium flex flex-col items-center justify-center gap-1 transition-all ${tamanhoFonte === "grande" ? "bg-blue-50 border-senac-blue text-senac-blue ring-1 ring-senac-blue" : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"}`}
              >
                <span className="text-lg">Aa</span>
                <span className="text-xs">Grande</span>
              </button>

              <button
                onClick={() => setTamanhoFonte("gigante")}
                className={`py-3 rounded-xl border font-medium flex flex-col items-center justify-center gap-1 transition-all ${tamanhoFonte === "gigante" ? "bg-blue-50 border-senac-blue text-senac-blue ring-1 ring-senac-blue" : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"}`}
              >
                <span className="text-xl font-bold">Aa</span>
                <span className="text-xs">Gigante</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3. Bloco de Movimento e Animações */}
        <div className="bg-white rounded-[20px] p-6 border border-gray-200 shadow-sm flex items-start gap-5 transition-all hover:shadow-md">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <MonitorPlay size={24} className="text-senac-orange" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-senac-blue mb-1">
              Animações de Tela
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Controle os efeitos visuais de transição.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Reduzir Movimento
                  </h3>
                  <p className="text-xs text-gray-500">
                    Desativa o deslize de telas e efeitos de "zoom" em botões
                    (útil para quem tem sensibilidade a movimentos).
                  </p>
                </div>
                <button
                  onClick={() => setReduzirAnimacoes(!reduzirAnimacoes)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${reduzirAnimacoes ? "bg-senac-blue" : "bg-gray-300"}`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${reduzirAnimacoes ? "translate-x-7" : "translate-x-1"}`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
