const { usuarios, proximoId } = require('../../data/db');

function indiceUsuario(filtro) {
  const { id, email } = filtro || {};
  if (id) {
    return usuarios.findIndex(u => u.id === id);
  } else if (email) {
    return usuarios.findIndex(u => u.email === email);
  }
  return -1;
}

// dados = { nome, email, idade }
function novoUsuario(_, { dados }) {
  const emailExistente = usuarios
    .some(u => u.email === dados.email);

  if (emailExistente) {
    throw new Error('Email cadastrado');
  }

  const novo = {
    id: proximoId(),
    ...dados,
    perfil_id: 1,
    status: 'ATIVO',
  };
  usuarios.push(novo);
  return novo;
}

function excluirUsuario(_, { filtro }) {
  const i = indiceUsuario(filtro);

  if (i < 0) {
    return null;
  }

  const excluidos = usuarios.splice(i, 1);
  return excluidos ? excluidos[0] : null;
}

function alterarUsuario(_, { filtros, dados }) {
  const usuario = usuarios.find(u => u.id === filtros.id);

  if (!usuario) {
    return null;
  }

  Object.assign(usuario, dados);

  return usuario;
}

module.exports = {
  novoUsuario,
  excluirUsuario,
  alterarUsuario,
};
