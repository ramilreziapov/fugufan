let accessButton = document.getElementById("choose-button");

let newFriend = document.getElementById("choose-image-friend");


function showFriend() {
  newFriend.style.display = "block";
  accessButton.innerHTML = 'good choice!';
  accessButton.style.color = 'red';
  accessButton.style.cursor = 'default';
  accessButton.style.border = 'none';
  accessButton.style.fontSize = '1.4rem';
  accessButton.style.backgroundColor = '#141E30';
}

accessButton.addEventListener("click", showFriend);