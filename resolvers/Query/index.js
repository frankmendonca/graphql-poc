const usuario = require('./usuario');
const perfil = require('./perfil');
const produto = require('./produto');

module.exports = {
  ola() {
    return 'Olá';
  },
  horaCerta() {
    return new Date;
  },
  numeroMegaSena() {
    // return [4, 8, 13, 27, 33, 54];
    const crescente = (a, b) => a - b;
    return Array(6)
      .fill(0)
      .map(() => Math.round(Math.random() * 60 + 1))
      .sort(crescente);
  },
  ...produto,
  ...usuario,
  ...perfil,
};
