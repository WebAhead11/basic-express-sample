const form = document.getElementById('form');
const ul = document.getElementById('options');

function arraySort(arr) {
    arr.forEach(e => {
        let span = document.createElement('span');
        span.innerText = e
        return span
    });
}

function createPerson(data) {
    ul.innerText = "";
    const li = document.createElement('li');
    const dataValues = Object.values(data)
    ul.appendChild(li)
    li.append(arraySort(dataValues))


}

form.addEventListener("input", function () {

    const inp = document.getElementById('inp')

    if (inp.value === "") {
        ul.innerHTML = '';

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
                li.classList.add('selecting')
            });
            if (inp.value === "") {
                ul.classList.remove("show")
            } else {
                ul.classList.add("show")
            }
        })
});