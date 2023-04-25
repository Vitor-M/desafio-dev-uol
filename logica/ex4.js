const sign_links = document.querySelectorAll('.horoscope-sign-wrapper a')

sign_links.forEach(link => {
    link.addEventListener('click', (event) =>{
        event.preventDefault();
        event.stopPropagation();
        let sign_div = link.querySelector('.sign-name');

        window.alert(`O signo ${sign_div.textContent} foi clicado`);
    });
});