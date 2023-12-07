function imageDisplay(num) {
let section = document.querySelector('#gallery');
section.innerHTML += '<img width="400px" src="./assets/img/vivek-v-yPlyDFhGwb8-unsplash.jpg"/>'
section.innerHTML += `<p>Fig.${num}</p>`
}

imageDisplay(1)

imageDisplay(2)

imageDisplay(3)
