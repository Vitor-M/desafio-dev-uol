const pages = ['/', '/esportes', '/noticias', '/entretenimento'];
let lastPage = null;

function listPageDivs() {
    const currentPage = window.location.pathname;

    if (pages.includes(currentPage) && lastPage != currentPage){
        const divs = document.querySelectorAll('.ad-area');

        if (divs.length) {
            divs.forEach(div => console.log(div));
        }else{
            console.log("Não há div's disponíveis na página");
        }

        lastPage = currentPage;
    }
}

setInterval(listPageDivs, 1000);