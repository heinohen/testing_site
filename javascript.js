const button3 = document.getElementById('butt');
button3.addEventListener('click', function(e) {
    alert('you clicked me')
});


// footer
const footer = document.querySelector('.footer');

const footerLegal = document.createElement('p');
footerLegal.setAttribute('class', 'footerPara');
footerLegal.textContent = "(C) heinohen 2022";

const footerGit = document.createElement('a');
footerGit.setAttribute('id', 'gitLink');
const footerImg = document.createElement('img');
footerImg.src = "./images/GitHub-Mark-32px.png";
footerImg.alt = "github picture";

footerGit.appendChild(footerImg);
footerGit.href = "https://github.com/heinohen";

footer.appendChild(footerLegal)
footer.appendChild(footerGit)

