function todoContain() {


    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => display(data))

}

todoContain();
function display(data) {
    const todoContainer = document.getElementById('todo-container')

    for (const user of data) {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('cl');
        todoDiv.innerHTML = `
        <h3>id: ${user.id} </h3>
        <p>title: ${user.title} </p>
          
        `
        todoContainer.appendChild(todoDiv);



    }

}


// comments 

function commentsContainer() {


    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => display2(data))

}

commentsContainer();
function display2(data) {
    const commentContainer = document.getElementById('comments')

    for (const user of data) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('cl2');
        commentDiv.innerHTML = `
        <h3>id: ${user.id} </h3>
        <p>name: ${user.name} </p>
        <p>email: ${user.email} </p>

          
        `
        commentContainer.appendChild(commentDiv);



    }

}
