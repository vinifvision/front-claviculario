import React, { useState, useEffect } from "react";
import { Search, Plus, X, UserRound } from "lucide-react";
import { UsuariosServices } from "../services/api";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  const [busca, setBusca] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function loadUsuarios() {
      try {
        const data = await UsuariosServices.getUsuarios();
        setUsuarios(data);
      } catch (error) {
        console.error("Erro ao carregar usuários", error);
      } finally {
        setLoading(false);
      }
    }
    loadUsuarios();
  }, []);

  const usuariosFiltrados = usuarios.filter(
    (user) =>
      user.nome.toLowerCase().includes(busca.toLowerCase()) ||
      user.matricula.includes(busca),
  );

  if (loading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-senac-blue"></div>
        <span className="ml-3 text-lg font-semibold text-senac-blue">
          Carregando usuários...
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full relative">
      {/* Cabeçalho da Página */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-senac-blue-title">
          Controle de Usuários
        </h1>

        {/* Botão de Adicionar que abre o Modal */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-senac-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors shadow-md"
        >
          <Plus size={20} />
          Adicionar usuário
        </button>
      </div>

      {/* Barra de Pesquisa */}
      <div className="flex items-center bg-white border border-gray-300 rounded-full px-5 py-3 mb-8 w-full max-w-2xl shadow-sm">
        <Search size={22} className="text-gray-400 mr-3" />
        <input
          type="text"
          placeholder="Pesquisar por nome ou matrícula..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 text-lg"
        />
      </div>

      {/* Grid de Cards dos Usuários */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto pb-4 pr-2">
        {usuariosFiltrados.length > 0 ? (
          usuariosFiltrados.map((user) => (
            <div
              key={user.id}
              className="bg-gray-100 rounded-[20px] p-6 flex items-center gap-5 shadow-sm border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            >
              {/* Avatar genérico */}
              <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                <UserRound size={28} className="text-gray-500" />
              </div>

              {/* Informações do usuário */}
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-senac-blue leading-tight">
                  {user.nome}
                </h3>
                <span className="text-sm font-medium text-senac-orange">
                  {user.papel}
                </span>
                <span className="text-xs text-gray-500 mt-1">
                  Matrícula: {user.matricula}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-10 text-gray-500 font-medium text-lg">
            Nenhum usuário encontrado para "{busca}".
          </div>
        )}
      </div>

      {/* MODAL (POPUP) DE ADICIONAR USUÁRIO */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          {/* Caixa do Formulário */}
          <div className="bg-white rounded-[30px] p-8 w-full max-w-md shadow-2xl relative animate-[zoomIn_0.2s_ease-out]">
            {/* Botão Fechar Modal */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold text-senac-blue mb-6">
              Novo Usuário
            </h2>

            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">
                  Nome completo
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-2xl bg-gray-100 border border-transparent focus:bg-white focus:border-senac-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  placeholder="Ex: Carlos Mendes"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">
                  Matrícula
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-2xl bg-gray-100 border border-transparent focus:bg-white focus:border-senac-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                  placeholder="Ex: 998877"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">
                  Cargo / Papel
                </label>
                <select className="w-full px-4 py-3 rounded-2xl bg-gray-100 border border-transparent focus:bg-white focus:border-senac-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all appearance-none cursor-pointer">
                  <option value="">Selecione um cargo...</option>
                  <option value="Professor">Professor(a)</option>
                  <option value="Monitor">Monitor(a)</option>
                  <option value="Coordenador">Coordenador(a)</option>
                  <option value="Porteiro">Porteiro(a)</option>
                  <option value="Representante">Representante(a)</option>
                </select>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)} // Na prática, aqui enviaríamos para a API antes de fechar
                className="w-full bg-senac-blue text-white font-bold text-lg py-4 rounded-2xl mt-4 hover:bg-blue-800 transition-colors shadow-md"
              >
                Cadastrar Usuário
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
