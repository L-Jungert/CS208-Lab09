// Grab the form element
const form = document.getElementById("lineupForm");

/**
 * myLineUp
 * Runs when the form is submitted. Reads all the form data,
 * prints it to the console, concatenates it into one string,
 * and displays that string on the web page.
 */
function myLineUp(event) {
  event.preventDefault(); // stop the page from reloading

  // Status radio
  const status = document.querySelector('input[name="status"]:checked').value;

  // Date drop-down
  const gameDate = document.getElementById("gameDate").value;

  // Checked players
  const checkedPlayers = document.querySelectorAll('input[name="players"]:checked');
  const players = [];
  checkedPlayers.forEach(function (box) {
    players.push(box.value);
  });

  // Print to console
  console.log("Status:", status);
  console.log("Date:", gameDate);
  console.log("Players:", players);

  let result = "Status: " + status + " | Date: " + gameDate + " | Players: ";
  result += players.length > 0 ? players.join(", ") : "None selected";
  console.log(result);

  // Display on the page
  document.getElementById("output").textContent = result;
}

form.addEventListener("submit", myLineUp);
