// src/services/mockData.js

export const mockMetrics = {
  disponiveis: 123,
  em_uso: 2,
  atrasadas: 1,
  panicos: 0,
};

// O Histórico do Dashboard (A origem dos fatos)
export const mockHistorico = [
  {
    id: 1,
    usuario: "João Silva",
    acao: "Retirou chave",
    local: "Sala 1401\n14º andar",
    dataHora: "27/05/2026\n10:23",
    status: "Sucesso",
  },
  {
    id: 2,
    usuario: "Maria Costa",
    acao: "Retirou chave",
    local: "Sala 1403\n14º andar",
    dataHora: "27/05/2026\n09:11",
    status: "Sucesso",
  },
  {
    id: 3,
    usuario: "Rafael Pereira",
    acao: "Acesso negado",
    local: "Sala 1402\n14º andar",
    dataHora: "27/05/2026\n09:25",
    status: "Negado",
  },
  {
    id: 4,
    usuario: "Ana Nunes",
    acao: "Devolveu chave",
    local: "Sala 1404\n14º andar",
    dataHora: "27/05/2026\n08:02",
    status: "Sucesso",
  },
];

// O Gerenciamento do Dashboard
export const mockGerenciamento = [
  {
    id: 1,
    texto: "Professor João Silva repassou chave da 1401 para Monitor Pedro",
    hora: "11:00",
  },
];

// A Tela de Salas (O reflexo do Histórico)
export const mockSalas = [
  {
    id: 1,
    andar: "14º andar",
    sala: "1401",
    tipo: "Laboratório",
    ocupanteNome: "João Silva",
    ocupanteTitulo: "Professor",
    horario: "10:23",
    status: "Em aula",
  },
  {
    id: 2,
    andar: "14º andar",
    sala: "1402",
    tipo: "Laboratório",
    ocupanteNome: null,
    ocupanteTitulo: null,
    horario: null,
    status: "Disponível",
  },
  {
    id: 3,
    andar: "14º andar",
    sala: "1403",
    tipo: "Laboratório",
    ocupanteNome: "Maria Costa",
    ocupanteTitulo: "Professora",
    horario: "09:11",
    status: "Em aula",
  },
  {
    id: 4,
    andar: "14º andar",
    sala: "1404",
    tipo: "Laboratório",
    ocupanteNome: null,
    ocupanteTitulo: null,
    horario: null,
    status: "Disponível",
  },
  {
    id: 5,
    andar: "15º andar",
    sala: "1501",
    tipo: "Sala comum",
    ocupanteNome: null,
    ocupanteTitulo: null,
    horario: null,
    status: "Disponível",
  },
];

export const mockUsuarios = [
  { id: 1, nome: "João Silva", papel: "Professor", matricula: "102938" },
  { id: 2, nome: "Maria Costa", papel: "Professora", matricula: "293847" },
  { id: 3, nome: "Rafael Pereira", papel: "Representante", matricula: "384756" },
  { id: 4, nome: "Pedro", papel: "Monitor", matricula: "475612" },
  { id: 5, nome: "Ana Nunes", papel: "Professora", matricula: "561234" },
];
