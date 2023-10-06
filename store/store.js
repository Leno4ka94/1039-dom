const colors = document.querySelector('.colors');
const gradient = document.querySelectorAll('.gradient');
const price = document.getElementById('outprice');
const shoes = document.querySelectorAll('.shoe');

colors.addEventListener('click', (e) => {
    const chooseColor = e.target;

    if (chooseColor.classList.contains('color') ) {
        colors.querySelectorAll('.color').forEach(color => {
            color.classList.remove('active');
        });

        chooseColor.classList.add('active');
        const newPrice = chooseColor.getAttribute('data-price');
        price.textContent = newPrice;
    }

    const colorAttribute = chooseColor.getAttribute('color');
    const chooseGrad = document.querySelector(`.gradient[color="${colorAttribute}"]`);
    const correspondingShoe = document.querySelector(`.shoe[color="${colorAttribute}"]`);
    if (correspondingShoe) {
        shoes.forEach(shoe => {
            shoe.classList.remove('show');
        });
        gradient.forEach(g => {
            g.classList.remove('second');
        });
        correspondingShoe.classList.add('show');
        chooseGrad.classList.add('second');
    }
});
