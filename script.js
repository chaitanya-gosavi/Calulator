const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "0";

function updateDisplay() {
  display.textContent = currentInput;
}

function handleInput(value) {
  if (value === "C") {
    currentInput = "0";
  } else if (value === "=") {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = "Error";
    }
  } else {
    if (currentInput === "0" && !isNaN(value)) {
      currentInput = value;
    } else {
      currentInput += value;
    }
  }
  updateDisplay();
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    handleInput(btn.textContent);
  });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  const allowedKeys = "0123456789+-*/.=EnterBackspace";
  if (!allowedKeys.includes(e.key)) return;

  if (e.key === "Enter") {
    handleInput("=");
  } else if (e.key === "Backspace") {
    currentInput = currentInput.slice(0, -1) || "0";
    updateDisplay();
  } else {
    handleInput(e.key);
  }
});

updateDisplay();
