const loadUser = () => {

    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayUser(data.results))

}

const displayUser = (users) => {

    const userContainer = document.getElementById('users');
    for (const user of users) {

        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
        <h3>user name : ${user.name.first} </h3>
        <h3>email: ${user.email}</h3>
        <h4>location: ${user.location.city} </h4>
        `

        userContainer.appendChild(userDiv);


    }

}

loadUser();