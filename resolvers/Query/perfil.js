const { perfis } = require('../../data/db');

module.exports = {
  perfis() {
    return perfis;
  },
  perfil(_, { id }) {
    return perfis.find(u => u.id === id);
  },
};
