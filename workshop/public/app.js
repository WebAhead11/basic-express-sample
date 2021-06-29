const form = document.querySelector('form');

form.addEventListener("input", function(event) {
    const inp = document.getElementById('inp')
    let search = fetch('/autocomplete')
        .then(response => response.json())
        .then(data => {
            data.filter(element => {
                let arr = Array.from(element.firstName);
                console.log(arr);
                console.log(arr.includes(inp.value));
            });
        })

})