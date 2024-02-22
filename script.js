let userName = prompt('Enter username:');

let name = `${userName}`;

let usernameDiv = document.getElementById('username');

usernameDiv.innerHTML = `<p> User:${userName}</p>`;
function rock() {
  document.getElementById("icons").src = 'rock-stone-boulders-cartoon-isometric-vector-35351659-removebg-preview.png'
}