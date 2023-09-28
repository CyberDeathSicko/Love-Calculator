window.onload = function() {
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateLove);
}

function calculateLove() {
    let yourName = document.getElementById("your-name").value.trim();
    let crushName = document.getElementById("crush-name").value.trim();

    if (yourName !== "" && crushName !== "") {
        let percentage = Math.floor(Math.random() * 101); // Random number between 0 and 100

        document.getElementById("result-message").innerText = `${yourName} and ${crushName}'s chance of love:`;
        document.getElementById("result-percentage").innerText = `${percentage}%`;
    } else {
        alert("Please enter both names.");
    }
}
