const { perfis } = require('../data/db');

module.exports = {
  salario(usuario) {
    return usuario.salario_real;
  },
  perfil(usuario) {
    console.log('Buscando o  Perfil');
    return perfis.find(u => u.id === usuario.perfil_id);
  }
};
