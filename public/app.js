const ul = document.getElementById('options');
const result = document.getElementById('result');
const log_out = document.getElementById('log_out');

function createPerson(data) {
    ul.innerText = "";
    const firstName = document.createElement('li');
    const lastName = document.createElement('li');
    const age = document.createElement('li');
    const salary = document.createElement('li');
    const img = document.createElement('img');
    const div = document.getElementById('result');
    div.innerHTML = '';
    const dataValues = Object.values(data)
    console.log(dataValues);
    // div.append(sorted.innerHTML);
    div.append(firstName)
    firstName.append((dataValues[0]))
    div.append(lastName)
    lastName.append((dataValues[1]))
    div.append(age)
    age.append((dataValues[2]))
    div.append(salary)
    salary.append((dataValues[3]))
    div.append(img)
    img.src = dataValues[4];
    ul.classList.remove('show')

}
log_out.addEventListener('click', () => window.location.href = '/logout')

fetch('/autocomplete')
    .then(response => response.json())
    .then(data => {
        createPerson(data)
    }).catch(error => {
        console.error(error);
    });