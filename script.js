let noBtn = document.getElementById('noBtn');
let yesBtn = document.getElementById('yesBtn');
let imageContainer = document.getElementById('imageContainer');
let noClickCount = 0;

noBtn.addEventListener('mouseover', () => {
    noBtn.style.position = 'absolute';
    noBtn.style.top = Math.random() * (window.innerHeight - noBtn.offsetHeight) + 'px';
    noBtn.style.left = Math.random() * (window.innerWidth - noBtn.offsetWidth) + 'px';
});

noBtn.addEventListener('click', () => {
    noClickCount++;
    console.log('Número de cliques no "Não":', noClickCount); // Log para depuração
    if (noClickCount >= 5) {
        imageContainer.innerHTML = '<img src="cachorrotriste.jpeg" alt="Gatinho Triste">';
        imageContainer.style.display = 'block';
    }
});

yesBtn.addEventListener('click', () => {
    imageContainer.innerHTML = '<img src="cachorrofeliz.jpeg" alt="Cachorro com Buquê">';
    imageContainer.style.display = 'block';
});
