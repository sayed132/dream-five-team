

document.getElementById("player-container").addEventListener("click", function(event) {

if (event.target.innerText == 'Select') {

const playerName = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
const playerCount = document.querySelectorAll("#players li");

if (playerCount.length > 4) {
    return alert("You can't select more than five!");
}

const playerList = document.getElementById("players");
const li = document.createElement("li");
li.append(playerName);
playerList.append(li);
event.target.setAttribute("disabled", "true");


}

});