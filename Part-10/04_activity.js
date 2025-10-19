let btn3 = document.querySelector(".colorBtn");

btn3.addEventListener('click',function (){
    let head2= document.querySelector('h2');
    let randomColor = getRandomColor();
    head2.innerText = randomColor;

    let container = document.querySelector('.colorContainer');
    container.style.backgroundColor = randomColor;
})

function getRandomColor() {
    // We multiply by 256 (not 255) because Math.random() generates numbers from 0 up to but not including 1.
    // So multiplying by 256 allows possible values 0–255 (inclusive), covering the full RGB range.
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red}, ${green}, ${blue})`;

    return color;
}