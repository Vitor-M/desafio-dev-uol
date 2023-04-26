const funnels = {
    '/': 'Home',
    '/categoria': 'Categoria',
    '/produto': 'Produto'
};

let currentPage = window.location.pathname;
const barIndex = currentPage.indexOf('/',1);
currentPage = barIndex > 0 ?  currentPage.substring(0,barIndex) : currentPage;

let funnelStep =  funnels[currentPage] || 'Não Definida';
console.log(`Etapa do Funil: ${funnelStep}`);