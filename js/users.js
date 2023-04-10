
function userLoad() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => display(data))

}

function display(data) {

    // console.log(data);

    const ol = document.getElementById('users');

    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;

        ol.appendChild(li);


    }

}