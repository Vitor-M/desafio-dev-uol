const dataLayer = window.dataLayer;

const filteredData = dataLayer.filter(entry => entry.event === "recommendation")[0];

const items = filteredData.ecommerce.impressions;
const items_id = items.map(item => item.id).join(',');

console.log(`Quantidade de itens: ${items.length}`);
console.log(`Lista de IDs dos itens: ${items_id}`);
