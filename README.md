# 📚 Documentação Técnica: Front-end Claviculário Inteligente

## 1. Visão Geral do Projeto
Este repositório contém o módulo Front-end (Interface de Usuário) do sistema de gerenciamento de chaves (Claviculário Inteligente). O objetivo principal desta camada é fornecer uma experiência fluida, responsiva e em tempo real para o controle de acesso, integrando-se via API REST ao Back-end (Django).

## 2. Tecnologias Utilizadas
A stack escolhida visa performance, componentização e facilidade de manutenção:
* **Core:** React.js construído sob o ecossistema Vite (para *Hot Module Replacement* ultrarrápido).
* **Roteamento:** React Router Dom (para navegação SPA - *Single Page Application* sem recarregamento).
* **Estilização:** Tailwind CSS v4 (Design System em classes utilitárias, garantindo consistência no uso das cores da marca).
* **Ícones:** Lucide React (biblioteca leve e em formato SVG).

## 3. Arquitetura de Pastas e Padrões
O projeto segue a arquitetura de separação de responsabilidades (SoC - *Separation of Concerns*):

```text
src/
├── assets/         # Imagens estáticas e SVGs (ex: escudo.svg)
├── components/     # Elementos visuais reutilizáveis (Layout.jsx, Sidebar.jsx)
├── pages/          # Componentes de página (rotas inteiras da aplicação)
├── services/       # Camada de comunicação com o Back-end (API e Mocks)
├── App.jsx         # Definição e proteção do mapeamento de rotas
└── index.css       # Diretivas do Tailwind e animações globais (Keyframes)
```

## 4. Estratégia de Dados e Integração (Mock Storytelling)
Devido ao desenvolvimento paralelo das equipes de Front-end e Back-end, a arquitetura foi desenhada utilizando o padrão Adapter/Service.

Nenhuma página do React acessa dados estáticos diretamente no componente. Em vez disso, as páginas consomem funções assíncronas de ```src/services/api.js```.

Fase Atual (PoC): Os serviços retornam dados simulados (```mockData.js```) após um ```delay``` (simulando latência de rede). Os dados mockados foram construídos com "Storytelling", garantindo que a narrativa bata entre todas as telas (ex: se uma chave é retirada no Dashboard, a sala correspondente aparece "Em aula").

Fase de Produção: Bastará alterar o conteúdo de ```api.js``` para realizar o ```fetch()``` ou ```axios.get()``` real para os endpoints criados em Django (ex: ```/api/chaves/```), sem alterar nenhuma linha de código nas telas (```/pages```).
