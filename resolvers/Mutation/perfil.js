const { perfis, proximoId } = require('../../data/db');

function indicePerfil(filtro) {
  const { id } = filtro || {};
  if (id) {
    return perfis.findIndex(u => u.id === id);
  } else if (nome) {
    return perfis.findIndex(u => u.nome === nome);
  }
  return -1;
}

// dados = { nome }
function novoPerfil(_, { dados }) {
  const perfilExistente = perfis
    .some(u => u.nome === dados.nome);

  if (perfilExistente) {
    throw new Error('Perfil cadastrado');
  }

  const novo = {
    id: proximoId(),
    ...dados,
  };
  perfis.push(novo);
  return novo;
}

function excluirPerfil(_, { filtro }) {
  const i = indicePerfil(filtro);

  if (i < 0) {
    return null;
  }

  const excluidos = perfis.splice(i, 1);
  return excluidos ? excluidos[0] : null;
}

function alterarPerfil(_, { filtro, dados }) {
  const perfil = perfis.find(u => u.id === filtro.id);

  if (!perfil) {
    return null;
  }

  Object.assign(perfil, dados);

  return perfil;
}

module.exports = {
  novoPerfil,
  excluirPerfil,
  alterarPerfil,
};
