const circles = document.querySelectorAll('.circle');

circles.forEach(el => {
    const dataAnimValue = el.getAttribute('data-anim');
    el.classList.add(dataAnimValue);
});
if (circles.length > 0) {
    const firstCircle = circles[0];
    const firstCircleClass = firstCircle.classList.value;

    console.log(`Class of the first circle: ${firstCircleClass}`);
} else {
    console.error('No elements with the class "circle" found');
}