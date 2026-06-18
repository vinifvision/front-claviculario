import React, { useState } from "react";
import { Type, Palette, MonitorPlay, Eye } from "lucide-react";

export default function Configuracoes() {
  const [altoContraste, setAltoContraste] = useState(false);
  const [reduzirAnimacoes, setReduzirAnimacoes] = useState(false);
  const [tamanhoFonte, setTamanhoFonte] = useState("padrao");

  return (
    <div className="flex flex-col h-full w-full relative animate-[fadeIn_0.5s_ease-out]">
      {/* Cabeçalho Compacto */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-senac-blue">Acessibilidade</h1>
        <p className="text-xs text-gray-500 mt-1">
          Personalize a interface para suas necessidades visuais.
        </p>
      </div>

      {/* Grid Compacto (gap reduzido e paddings menores) */}
      <div className="flex flex-col gap-3 pb-2 pr-2">
        {/* Bloco 1 */}
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex items-start gap-4">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Palette size={20} className="text-purple-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-senac-blue mb-2">
              Cores e Contraste
            </h2>
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-100">
              <div className="flex items-center gap-2">
                <Eye size={18} className="text-gray-500" />
                <div>
                  <h3 className="font-semibold text-sm text-gray-800">
                    Alto Contraste
                  </h3>
                  <p className="text-[10px] text-gray-500">
                    Aumenta a diferença entre texto e fundo.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setAltoContraste(!altoContraste)}
                className={`w-10 h-5 rounded-full transition-colors relative ${altoContraste ? "bg-senac-blue" : "bg-gray-300"}`}
              >
                <div
                  className={`w-3 h-3 bg-white rounded-full absolute top-1 transition-transform ${altoContraste ? "translate-x-6" : "translate-x-1"}`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Bloco 2 */}
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex items-start gap-4">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Type size={20} className="text-senac-blue" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-senac-blue mb-2">
              Tamanho do Texto
            </h2>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setTamanhoFonte("padrao")}
                className={`py-2 rounded-lg border flex flex-col items-center justify-center transition-all ${tamanhoFonte === "padrao" ? "bg-blue-50 border-senac-blue text-senac-blue ring-1 ring-senac-blue" : "bg-white border-gray-200 text-gray-600"}`}
              >
                <span className="text-sm font-medium">Aa Padrão</span>
              </button>
              <button
                onClick={() => setTamanhoFonte("grande")}
                className={`py-2 rounded-lg border flex flex-col items-center justify-center transition-all ${tamanhoFonte === "grande" ? "bg-blue-50 border-senac-blue text-senac-blue ring-1 ring-senac-blue" : "bg-white border-gray-200 text-gray-600"}`}
              >
                <span className="text-base font-medium">Aa Grande</span>
              </button>
              <button
                onClick={() => setTamanhoFonte("gigante")}
                className={`py-2 rounded-lg border flex flex-col items-center justify-center transition-all ${tamanhoFonte === "gigante" ? "bg-blue-50 border-senac-blue text-senac-blue ring-1 ring-senac-blue" : "bg-white border-gray-200 text-gray-600"}`}
              >
                <span className="text-lg font-bold">Aa Gigante</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bloco 3 */}
        <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex items-start gap-4">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
            <MonitorPlay size={20} className="text-senac-orange" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-senac-blue mb-2">
              Animações de Tela
            </h2>
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-100">
              <div>
                <h3 className="font-semibold text-sm text-gray-800">
                  Reduzir Movimento
                </h3>
                <p className="text-[10px] text-gray-500">
                  Desativa o deslize de telas e efeitos de "zoom".
                </p>
              </div>
              <button
                onClick={() => setReduzirAnimacoes(!reduzirAnimacoes)}
                className={`w-10 h-5 rounded-full transition-colors relative ${reduzirAnimacoes ? "bg-senac-blue" : "bg-gray-300"}`}
              >
                <div
                  className={`w-3 h-3 bg-white rounded-full absolute top-1 transition-transform ${reduzirAnimacoes ? "translate-x-6" : "translate-x-1"}`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
