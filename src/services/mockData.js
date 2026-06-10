// src/services/mockData.js

// Simula a resposta do endpoint /api/chaves/
export const mockMetrics = {
  disponiveis: 123,
  em_uso: 321,
  atrasadas: 213,
  panicos: 2,
};

// Simula a resposta do endpoint de histórico de chaves
export const mockHistorico = [
  {
    id: 1,
    usuario: "João Silva",
    acao: "Retirou chave",
    local: "Sala 1402\n14 andar",
    dataHora: "27/05/2026\n10:23",
    status: "Sucesso",
  },
  {
    id: 2,
    usuario: "Maria Costa",
    acao: "Devolveu chave",
    local: "Sala 1401\n14 andar",
    dataHora: "27/05/2026\n09:11",
    status: "Sucesso",
  },
  {
    id: 3,
    usuario: "Rafael Pereira",
    acao: "Acesso negado",
    local: "Sala 1403\n14 andar",
    dataHora: "27/05/2026\n09:25",
    status: "Negado",
  },
  {
    id: 4,
    usuario: "Ana Nunes",
    acao: "Retirou chave",
    local: "Sala 1404\n14 andar",
    dataHora: "27/05/2026\n08:02",
    status: "Sucesso",
  },
];

// Simula a lista lateral de gerenciamento/repasses
export const mockGerenciamento = [
  {
    id: 1,
    texto: "Professor João Silva repassou chave para Pedro",
    hora: "11:00",
  },
  {
    id: 2,
    texto: "Professor João Silva repassou chave para Pedro",
    hora: "11:00",
  },
  {
    id: 3,
    texto: "Professor João Silva repassou chave para Pedro",
    hora: "11:00",
  },
  {
    id: 4,
    texto: "Professor João Silva repassou chave para Pedro",
    hora: "11:00",
  },
];
