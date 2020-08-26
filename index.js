/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

/***** Deliverable 2 *****/
header.style.color = 'red'

/***** Deliverable 3 *****/

const playerList = document.getElementsByClassName('player-container')[0]

for (let i = 0; i < PLAYERS.length; i++) {
    const playerDiv = document.createElement('div')
    playerDiv.className = 'player'
    playerDiv.dataset.number = PLAYERS[i].number

    playerDiv.innerHTML = 
    `<h3>
    ${PLAYERS[i].name} (<em>${PLAYERS[i].nickname}</em>) </h3>
    <img src="${PLAYERS[i].photo}" alt="${PLAYERS[i].name}">`

    playerList.append(playerDiv);

   // console.log("PLAYERS array looks like this:", PLAYERS)

}

/***** Deliverable 4 *****/

const playersDivision = document.getElementsByClassName('player')

for (let i = 0; i < playersDivision.length; i++) { 
    if (playersDivision[i].dataset.number === '7') {
        playersDivision[i].remove();
    }};