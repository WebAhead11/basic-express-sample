const inp = document.getElementById('inp')
const form = document.getElementById('form');
const ul = document.getElementById('options');
const result = document.getElementById('result');


function createPerson(data) {
    ul.innerText = "";
    const firstLi = document.createElement('li');
    const secondLi = document.createElement('li');
    const thirdLi = document.createElement('li');
    const fourthLi = document.createElement('li');
    const fifthLi = document.createElement('img');
    const div = document.getElementById('result');
    div.innerHTML = '';
    const dataValues = Object.values(data)
    console.log(dataValues);
    // div.append(sorted.innerHTML);
    div.append(firstLi)
    firstLi.append((dataValues[0]))
    div.append(secondLi)
    secondLi.append((dataValues[1]))
    div.append(thirdLi)
    thirdLi.append((dataValues[2]))
    div.append(fourthLi)
    fourthLi.append((dataValues[3]))
    div.append(fifthLi)
    fifthLi.src = dataValues[4];
    ul.classList.remove('show')
    inp.value = "";

}

form.addEventListener("input", function () {
    const inp = document.getElementById('inp')


    if (inp.value === "") {
        ul.innerHTML = '';

        return;
    }

    fetch(`/autocomplete?letter=${inp.value}`)
        .then(response => response.json())
        .then(data => {
            ul.innerText = '';
            data.forEach(element => {
                console.log(data.length);

                const li = document.createElement('li');
                const firstNameSpan = document.createElement('span');
                const lastNameSpan = document.createElement("span");

                li.addEventListener("click", function () {
                    createPerson(element)

                })
                firstNameSpan.textContent = 'First Name: ' + element.firstName
                lastNameSpan.textContent = 'Last Name: ' + element.lastName;
                li.appendChild(firstNameSpan);
                li.appendChild(lastNameSpan);
                ul.appendChild(li);
                li.classList.add('selecting')
            });
            if (inp.value === "") {
                ul.classList.remove("show")
            } else {
                ul.classList.add("show")
            }
        })
        .catch(error => {
            console.error(error);
            response.writeHead(404, { "content-type": "text/html" });
            response.end("<h1>Not found</h1>");
        })
    })
    
           