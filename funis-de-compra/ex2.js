const funnels = {
    '/': 'Home',
    '/categoria': 'Categoria',
    '/produto': 'Produto'
}

let currentPage = window.location.pathname
let barIndex = currentPage.indexOf('/',1)
currentPage = barIndex ?  currentPage.substring(0,barIndex) : currentPage

console.log(`Etapa do Funil: ${funnels[currentPage]}`)