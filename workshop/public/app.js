const form = document.querySelector('form');

form.addEventListener("input",function (event) {
    const inp = document.getElementById('inp')
    let search = fetch('/autocomplete')
    .then(response => response.json())
    .then(data => console.log(data))
    // console.log(search);
    
})