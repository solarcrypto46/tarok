let players = [];

function addPlayer() {
    const nameInput = document.getElementById("playerName");
    const playerName = nameInput.value.trim();
    if (playerName === "") return;

    players.push({ name: playerName, score: 0 });
    nameInput.value = "";
    updateTable();
}

function updateScore(index, change) {
    players[index].score += change;
    updateTable();
}

function removePlayer(index) {
    players.splice(index, 1);
    updateTable();
}

function updateTable() {
    const tableBody = document.querySelector("#scoreTable tbody");
    tableBody.innerHTML = "";

    players.forEach((player, index) => {
        const row = `<tr>
            <td>${player.name}</td>
            <td>${player.score}</td>
            <td>
                <button class="add" onclick="updateScore(${index}, 10)">+10</button>
                <button class="add" onclick="updateScore(${index}, 1)">+1</button>
                <button class="delete" onclick="removePlayer(${index})">Remove</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}
