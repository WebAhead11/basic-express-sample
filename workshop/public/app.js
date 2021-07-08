// const { response } = require("express");

const inp = document.getElementById('inp')
const form = document.getElementById('form');
const ul = document.getElementById('options');
const result = document.getElementById('result');
const log_out = document.getElementById('log_out');

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
        // inp.value = "";

}
const out = () => {
    fetch('/log_out')
        .then(response => response.json())
        .then(data => console.log(data))

    window.location.href = '/';
}

log_out.addEventListener('click', out);

fetch('/autocomplete')
    .then(response => response.json())
    .then(data => {
        ul.innerText = '';

        console.log(data.length);

        // // const li = document.createElement('li');
        // const firstNameSpan = document.createElement('span');
        // const lastNameSpan = document.createElement("span");


        createPerson(data)


        // firstNameSpan.textContent = 'First Name: ' + data.firstName
        // lastNameSpan.textContent = 'Last Name: ' + data.lastName;
        // li.appendChild(firstNameSpan);
        // li.appendChild(lastNameSpan);
        // ul.appendChild(li);
        // li.classList.add('selecting')

        // if (inp.value === "") {
        //     ul.classList.remove("show")
        // } else {
        //     ul.classList.add("show")
        // }
    }).catch(error => {
        console.error(error);
        response.writeHead(404, { "content-type": "text/html" });
        response.end("<h1>Not found</h1>");
    });