module.exports = {
  precoComDesconto(produto) {
    return (1 - produto.desconto) * produto.preco;
  }
};
