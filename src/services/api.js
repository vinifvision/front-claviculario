// src/services/api.js
import {
  mockMetrics,
  mockHistorico,
  mockGerenciamento,
  mockSalas,
  mockUsuarios,
} from "./mockData";

// Essa função simula uma requisição HTTP real de forma profissional
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const DashboardService = {
  // Busca os dados dos cards superiores
  getMetrics: async () => {
    await delay(800); // Fingindo latência de rede
    return mockMetrics;
  },

  getHistorico: async () => {
    await delay(1000);
    return mockHistorico;
  },

  getGerenciamento: async () => {
    await delay(600);
    return mockGerenciamento;
  },
};

export const SalasServices = {
  getSalas: async () => {
    await delay(800);
    return mockSalas;
  },
};

export const UsuariosServices = {
  getUsuarios: async () => {
    await delay(700);
    return mockUsuarios;
  },
};

export const AutorizacoesService = {
  getUsuarios: async () => {
    await delay(700);
    return mockUsuarios;
  },
};