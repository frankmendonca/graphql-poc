const { usuarios } = require('../../data/db');

module.exports = {
  usuarioLogado() {
    return {
      id: 1,
      nome: 'Frank',
      email: 'fmendonca@ciandt.com',
      idade: 30,
      salario_real: 12345.67,
      vip: true
    }
  },
  usuarios() {
    return usuarios;
  },
  usuario(_, { id }) {
    return usuarios.find(u => u.id === id);
  },
};
