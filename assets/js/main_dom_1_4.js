document.getElementById("container").innerHTML = "<p>start of the element</p>";

document.getElementById("info").innerHTML = "<h1>Hello World!</h1><h2>How are you?</h2>";

document.write("end of the element");

console.log(new Date().toString());
document.querySelector('#info').innerHTML += (new Date().toString());


function display() {
    let val = document.querySelector("input").value;
    console.log(val);
    let body = document.querySelector('#inputfield');
    body.innerHTML += `<p>${val}</p>`
}