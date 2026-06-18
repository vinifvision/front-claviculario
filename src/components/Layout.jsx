import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="flex h-screen w-full bg-background-light overflow-hidden relative">
      <div className="py-4 pl-2 h-full z-10">
        <Sidebar />
      </div>

      <main className="flex-1 overflow-y-auto py-5 pr-5 pl-10 animate-[fadeIn_0.5s_ease-out] z-10">
        <Outlet />
      </main>

      {/* POPUP GIGANTE DE PÂNICO */}
      {isPanic && (
        <div className="fixed inset-0 z-[9999] bg-red-600/95 flex flex-col items-center justify-center animate-pulse backdrop-blur-md">
          <h1 className="text-white text-7xl font-black mb-6 tracking-widest text-center">
            🚨 ALERTA DE PÂNICO 🚨
          </h1>
          <p className="text-white text-2xl font-bold bg-black/50 px-8 py-4 rounded-full shadow-lg">
            Acionamento detectado! Verifique as câmeras e as salas
            imediatamente.
          </p>
          <button
            onClick={() => {
              // Ordem clara: DESLIGAR!
              window.dispatchEvent(
                new CustomEvent("panicoLocal", { detail: "DESLIGAR" }),
              );
              const canal = new BroadcastChannel("canal_panico");
              canal.postMessage("DESLIGAR");
            }}
            className="mt-12 bg-white text-red-600 px-10 py-4 rounded-full font-black text-2xl hover:bg-gray-200 transition-transform hover:scale-105 shadow-2xl cursor-pointer"
          >
            DESATIVAR ALARME
          </button>
        </div>
      )}
    </div>
  );
}
