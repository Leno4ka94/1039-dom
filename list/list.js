let items = document.querySelectorAll('#list li');
items = Array.from(items);
const length = items.length;
for (let i = 0; i < length; ++i) {
    let currentItem;
    if (i % 2 === 0) {
        currentItem = items.shift();
    } else {
        currentItem = items.pop();
    }
    alert(currentItem.textContent);
};