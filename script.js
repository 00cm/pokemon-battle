document.addEventListener("DOMContentLoaded", function() {
    let player_move1 = document.getElementById("player-move1");

    player_move1.dataset.move = "test";
    player_move1.innerText= "test";



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