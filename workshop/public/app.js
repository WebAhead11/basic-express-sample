const form = document.querySelector('form');

form.addEventListener("input", async function(event) {
    event.preventDefault();
    const inp = document.getElementById('inp')
    let search = await fetch('../data/data.json')
        .then(response => response.json())
        .then(data => console.log(data))
})