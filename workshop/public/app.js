const form = document.querySelector('form');

form.addEventListener("input", function () {

    fetch('/autocomplete')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })

})