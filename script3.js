let happiness = 100;
let health = 100;
const happinessDisplay = document.getElementById("happiness");
const healthDisplay = document.getElementById("health");
const petImage = document.getElementById("pet-image");
const moodOutput = document.getElementById("mood-output");

const moods = {
    happy: "buddy waving.gif",
    sad: "buddy sad.gif",
    playing: "buddy walking.gif",
    eating: "buddy eating.gif",
    sleeping: "buddy sleeping.gif",
    Dead    : "buddy dead.gif",
};

function updatePetImage() {
    if (happiness > 70) {
        petImage.src = moods.happy; // Happy state
    } else if (happiness > 40) {
        petImage.src = moods.playing; // Playing state
    } else {
        petImage.src = moods.sad; // Sad state
    }
}

function feedPet() {
    happiness += 10;
    health += 5;
    petImage.src = moods.eating; // Show eating GIF
    moodOutput.textContent = "You fed your pet!";
    updatePetStatus();
}

function playWithPet() {
    happiness += 15;
    health -= 5;
    petImage.src = moods.playing; // Show playing GIF
    moodOutput.textContent = "You played with your pet!";
    updatePetStatus();
}

function sleepPet() {
    health += 10; // Sleeping improves health
    petImage.src = moods.sleeping; // Show sleeping GIF
    moodOutput.textContent = "Your pet is sleeping!";
    updatePetStatus();
}

function updatePetStatus() {
    happiness = Math.min(happiness, 100);
    health = Math.min(health, 100);
    
    happinessDisplay.textContent = `Happiness: ${happiness}`;
    healthDisplay.textContent = `Health: ${health}`;
    updatePetImage();

    if (happiness <= 0 || health <= 0) {
        petImage.src = moods.dead;
        moodOutput.textContent = "Your pet has passed away. Please reset the game.";
        document.getElementById("controls").style.display = "none"; // Hide controls
    }
}

// Reset game state
function resetGame() {
    happiness = 100;
    health = 100;
    updatePetStatus();
    moodOutput.textContent = "";
    document.getElementById("controls").style.display = "block"; // Show controls
}

// Event listeners for buttons
document.getElementById("feed").addEventListener("click", feedPet);
document.getElementById("play").addEventListener("click", playWithPet);
document.getElementById("sleep").addEventListener("click", sleepPet);
document.getElementById("reset").addEventListener("click", resetGame);

// Decrease happiness and health over time
setInterval(() => {
    happiness -= 1;
    health -= 1;
    updatePetStatus();
}, 5000); // Adjust time as needed
