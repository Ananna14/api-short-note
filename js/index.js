
// posts 
function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayData(data));
}

function displayData(data) {
    const createLi = document.getElementById('list');
    for (const post of data) {
        console.log(post);
        const li = document.createElement('li');
        li.innerText = `ID: ${post.id}`;
        createLi.appendChild(li)
    }
}

//comment
function dataComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => displayCommit(data));
}

function displayCommit(data) {
    const create = document.getElementById('comment');
    for (const comment of data) {
        // console.log(comment);
        const li = document.createElement('li');
        li.innerText = `name: ${comment.name}`;
        create.appendChild(li);
    }
}

