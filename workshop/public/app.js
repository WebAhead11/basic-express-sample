const form = document.getElementById('form');
const ul = document.getElementById('options')

function createPerson(data) {
    console.table(data)
    
}

form.addEventListener("input", function (event) {

    const inp = document.getElementById('inp')

    if (inp.value === "") {
        ul.innerHTML = '';
        // ul.classList.remove("show")
        return;
    }

    let search = fetch(`/autocomplete?letter=${inp.value}`)
        .then(response => response.json())
        .then(data => {
            ul.innerText = '';
            data.forEach(element => {
                console.log(data.length);

                const li = document.createElement('li');
                const span = document.createElement('span');
                const span1 = document.createElement("span");

                li.addEventListener("click", function () {
                    createPerson(element)

                })

                span.textContent = 'First Name: ' + element.firstName
                span1.textContent = 'Last Name: ' + element.lastName;
                li.appendChild(span);
                li.appendChild(span1);
                ul.appendChild(li);
            });
            if (inp.value === "") {
                ul.classList.remove("show")
            } else {
                ul.classList.add("show")
            }
        })
});
form.addEventListener("submit", function (event) {
    event.preventDefault()

})