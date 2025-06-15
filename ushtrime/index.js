const loginBTN = document.querySelector('#loginBTN');
const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const login = document.querySelector('#login');

const dashboard = document.querySelector('#dashboard');
const errorMsg = document.querySelector('#errorMsg');
const gameList = document.querySelector('#gameList');
const editName = document.querySelector('#editName');
const editThumbnail = document.querySelector('#editThumbnail');
const editURL = document.querySelector('#editURL');
const editViews = document.querySelector('#editViews');
const editLikes = document.querySelector('#editLikes');
const saveChanges = document.querySelector('#saveChanges');
const closeModal = document.querySelector('#closeModal');
const editModal = document.querySelector('#editModal');
const removeModal = document.querySelector('#removeModal');
const confirmRemove = document.querySelector('#confirmRemove');
const cancelRemove = document.querySelector('#cancelRemove');

let data = { username: 'admin', password: '123' };

let games = [
    {
        name: "CG FC 24",
        thumbnail: "images/cgfc.avif",
        url: "https://www.crazygames.com/game/cg-fc-24",
        likes: 150,
        views: 2000,
    },
    {
        name: "Supermarket sort",
        thumbnail: "images/supermarket.avif",
        url: "https://www.crazygames.com/game/supermarket-sort-grocery-game",
        likes: 250,
        views: 5000,
    },
    {
        name: "Gun Strike Runner",
        thumbnail: "images/gun-strike-runner.avif",
        url: "https://www.crazygames.com/game/gun-strike-runner",
        likes: 188,
        views: 4800,
    },
];

let addingGame = false;
let currentGame = null;

loginBTN.addEventListener('click', (event) => {
    event.preventDefault();
    if (username.value === data.username && password.value === data.password) {
        login.style.display = 'none';
        dashboard.style.display = 'block';
    }
    else {
        errorMsg.style.display = 'block';
    }
})

loadGame();

function loadGame() {
    for (let i = 0; i < games.length; i++) {
        gameList.innerHTML += `
        <tr>
            <td>${games[i].name}</td>
            <td>${games[i].thumbnail}</td>
            <td><a href="${games[i].url} target="_blank"">Link</a></td>
            <td>${games[i].likes}</td>
            <td>${games[i].views}</td>
            <td><button id="editBTN" class="edit" onclick="editGame(${i})">Edit</button></td>
            <td><button id="removeBTN" class="remove" onclick="removeGame(${i})">Remove</button></td>
        </tr>
        `;
    }
}

function addedGame() {
    editModal.style.display = 'block';
    editName.value = '';
    editThumbnail.value = '';
    editURL.value = '';
    editLikes.value = '';
    editViews.value = '';
}

saveChanges.addEventListener('click', (event) => {
    event.preventDefault();
    editModal.style.display = 'block';
    if (!addingGame) {
        let newGames = {
            name: editName.value,
            thumbnail: editThumbnail.value,
            url: editURL.value,
            likes: editLikes.value,
            views: editViews.value,
        }
        games.push(newGames);
    }
    else {
        games[currentGame].name = editName.value;
        games[currentGame].thumbnail = editThumbnail.value;
        games[currentGame].url = editURL.value;
        games[currentGame].likes = editLikes.value;
        games[currentGame].views = editViews.value;
        addingGame = false;
    }
    gameList.innerHTML = '';
    loadGame();
    editModal.style.display = 'none';
})

function editGame(index) {
    editName.value = games[index].name;
    editThumbnail.value = games[index].thumbnail;
    editURL.value = games[index].url;
    editLikes.value = games[index].likes;
    editViews.value = games[index].views;
    currentGame = index;
    addingGame = true;
    editModal.style.display = 'block';
    gameList.innerHTML = '';
    loadGame();
}

closeModal.addEventListener('click', () => {
    editModal.style.display = 'none';
    removeModal.style.display = 'none';
})

function removeGame(index) {
    games.splice(index, 1);
    gameList.innerHTML = '';
    loadGame();
}

