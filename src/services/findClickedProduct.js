export function findProductById(id = 0, products = []) {
  return products.find((p) => p.id === id);
}
