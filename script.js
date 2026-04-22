console.log("Status Manager Started");

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
mainTitle.innerHTML="DOM Project: Ready!"

/* ======================================= */
// --- Task 4: Attribute Modification ---
toggleButton.setAttribute("data-action", "status-toggle");
/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
function highlightListItems() {
    var items = document.querySelectorAll('li');
    items.forEach(function(item) {
        item.style.color = "blue";
    });
}

highlightListItems();

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
function toggleStatus(e) {
    e.preventDefault();
    statusOutput.classList.toggle("hidden");
    if (!statusOutput.classList.contains("hidden")) {
        mainTitle.style.backgroundColor = "yellow";
        createTimestamp();
    } else {
        mainTitle.style.backgroundColor = "";
    }
}

function createTimestamp() {
    var span = document.createElement("span");
    span.innerHTML = new Date().toLocaleTimeString();
    statusOutput.appendChild(span);
}

toggleButton.addEventListener("click", toggleStatus);
/* ======================================= */
// --- Task 10: Timed Animation ---
function startFlashing() {
    clearInterval(intervalId);
    intervalId = setInterval(function() {
        controlPanel.classList.toggle("hidden");
    }, 500);
}

function stopFlashing() {
    clearInterval(intervalId);
}

timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);
