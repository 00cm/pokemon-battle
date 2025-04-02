document.addEventListener("DOMContentLoaded", function() {
    let xhr = new XMLHttpRequest();
    let rand = Math.floor(Math.random() * 151) + 1;
    let url = "https://pokeapi.co/api/v2/pokemon/";

    xhr.open("GET", url + rand);
    xhr.send(); 

    const playerImg = document.getElementById("player-pokemon");
    const playerHP = document.getElementById("player-hp");
    const playerATK = document.getElementById("player-atk");
    const playerDEF = document.getElementById("player-def");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);  
            playerImg.src = data.sprites.front_default;
            playerHP.innerText = data.stats[0].base_stat;
            playerATK.innerText = Math.floor(Math.random() * 20) + 1;
            playerDEF.innerText = Math.floor(Math.random() * 20) + 1;
          } else if (xhr.readyState === 4 && xhr.status !== 200) {
            console.log("Error! ");
          }
    };

    let xhr1 = new XMLHttpRequest();

    let rand1 = Math.floor(Math.random() * 151) + 1;

    xhr1.open("GET", url + rand1);
    xhr1.send(); 

    const computerImg = document.getElementById("computer-pokemon");
    const computerHP = document.getElementById("computer-hp");
    const computerATK = document.getElementById("computer-atk");
    const computerDEF = document.getElementById("computer-def");

    xhr1.onreadystatechange = function () {
        if (xhr1.readyState === 4 && xhr1.status === 200) {
            var data = JSON.parse(xhr1.responseText);  
            computerImg.src = data.sprites.front_default;
            computerHP.innerText = data.stats[0].base_stat;
            computerATK.innerText = Math.floor(Math.random() * 20) + 1;
            computerDEF.innerText = Math.floor(Math.random() * 20) + 1;
          } else if (xhr1.readyState === 4 && xhr1.status !== 200) {
            console.log("Error! ");
          }
    };

    

    function addLogMessage(message) {
        const logContainer = document.querySelector('.log-messages');
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        logContainer.appendChild(messageElement);
        
        // Auto-scroll to bottom
        logContainer.scrollTop = logContainer.scrollHeight;
        
        // Example usage:
        // addLogMessage("Pikachu used Thunderbolt!");
    }
});