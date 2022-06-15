const button3 = document.getElementById('butt');
button3.addEventListener('click', function(e) {
    alert('Thanks!')
});

//header
const header = document.querySelector('.header');
const headerPara = document.createElement('p')
headerPara.setAttribute('id', 'headerPara');
headerPara.textContent = "THIS IS THE TOP SECRET TESTING ROOM!";
header.appendChild(headerPara);

// footer
const footer = document.querySelector('.footer');

const footerLegal = document.createElement('p');
footerLegal.setAttribute('class', 'footerPara');
footerLegal.textContent = "© heinohen 2022";

const footerGit = document.createElement('a');
footerGit.setAttribute('id', 'gitLink');
const footerImg = document.createElement('img');
footerImg.src = "./images/GitHub-Mark-32px.png";
footerImg.alt = "github picture";

footerGit.appendChild(footerImg);
footerGit.href = "https://github.com/heinohen";

footer.appendChild(footerLegal)
footer.appendChild(footerGit)

