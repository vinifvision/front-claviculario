// src/services/api.js
import { mockMetrics, mockHistorico, mockGerenciamento } from "./mockData";

// Essa função simula uma requisição HTTP real de forma profissional
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const DashboardService = {
  // Busca os dados dos cards superiores
  getMetrics: async () => {
    await delay(800); // Fingindo latência de rede
    return mockMetrics;
  },

  // Busca os dados da tabela de histórico
  getHistorico: async () => {
    await delay(1000); // Fingindo latência de rede
    return mockHistorico;
  },

  // Busca os dados da lista de repasses lateral
  getGerenciamento: async () => {
    await delay(600); // Fingindo latência de rede
    return mockGerenciamento;
  },
};
