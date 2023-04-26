const dataLayer = window.dataLayer;

const filteredData = dataLayer.filter(entry => entry.event === "pageview_carrinho")[0];

const items = filteredData.ecommerce.checkout.products;
const items_id = products.map(product => product.id).join(',');
const cart_value = filteredData.valorSacola;

console.log(`Lista de IDs dos produtos selecionados: ${items_id}`);
console.log(`Valor total do carrinho: ${cart_value}`);
