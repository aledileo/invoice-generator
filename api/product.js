const products = [
  {
    id: 1,
    name: "MacBook Pro 2019",
    price: 3000
  },
  {
    id: 2,
    name: "Razer Blade 2019",
    price: 4000
  },
  {
    id: 3,
    name: "Dell XPS 13",
    price: 899
  }
];

module.exports = (request, response) => {
  const { id } = request.query;
  const product = products.find(x => x.id === id);
  response.json(product)
}