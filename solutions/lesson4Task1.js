const lesson4Task1Html = `<div id="lesson4Task1">
                            <div id="values">
                              <fieldset>
                                <legend>Values</legend>
                                <div>
                                  <label for="firstOperand">Input the first operand</label>
                                  <input id="firstOperand" type="number" value="0" step="1"/>
                                  <button id="setX">Set X</button>
                                </div>
                                <div>
                                  <label for="secondOperand">Input the second operand</label>
                                  <input id="secongOperand" type="number" value="0" step="1"/>
                                  <button id="setY">Set Y</button>
                                </div>
                              </fieldset>
                            </div>
                            <div id="buttons">
                              <fieldset>
                                <legend>Operations</legend>
                                <button id="sum">+</button>
                                <button id="multiple">*</button>
                                <button id="subtract">-</button>
                                <button id="divide">/</button>
                              </fieldset>
                            </div>
                            <p id="result">
                            X = <span id="x"></span> 
                            Y = <span id="y"></span>
                            Result:<span id="resultValue"></span>
                            </p>
                          </div>
`;

function lesson4Task1Logic() {
  class Calculator {
    constructor(x, y) {
      if (!Calculator.isValidNumber(x) || !Calculator.isValidNumber(y)) {
        throw new Error("Invalid numbers provided");
      }
      this.x = x;
      this.y = y;

      this.logSum = this.logSum.bind(this);
      this.logMul = this.logMul.bind(this);
      this.logSub = this.logSub.bind(this);
      this.logDiv = this.logDiv.bind(this);
    }

    static isValidNumber(num) {
      return typeof num === "number" && Number.isFinite(num);
    }

    setX(num) {
      if (!Calculator.isValidNumber(num)) {
        throw new Error("Invalid number");
      }
      this.x = num;
    }

    setY(num) {
      if (!Calculator.isValidNumber(num)) {
        throw new Error("Invalid number");
      }
      this.y = num;
    }

    logSum() {
      return this.x + this.y;
    }

    logMul() {
      return this.x * this.y;
    }

    logSub() {
      return this.x - this.y;
    }

    logDiv() {
      if (this.y === 0) {
        throw new Error("Division by zero");
      }
      return this.x / this.y;
    }
  }

  const firstOperandInput = document.getElementById("firstOperand");
  const secondOperandInput = document.getElementById("secongOperand");
  const setXButton = document.getElementById("setX");
  const setYButton = document.getElementById("setY");
  const sumButton = document.getElementById("sum");
  const multiplyButton = document.getElementById("multiple");
  const subtractButton = document.getElementById("subtract");
  const divideButton = document.getElementById("divide");
  const resultParagraph = document.getElementById("result");
  const spans = resultParagraph.getElementsByTagName("span");
  const xSpan = spans[0];
  const ySpan = spans[1];
  const resultValueSpan = spans[2];

  let calculator;
  try {
    const x = Number(firstOperandInput.value);
    const y = Number(secondOperandInput.value);
    calculator = new Calculator(x, y);
  } catch (error) {
    alert(`Initialization error: ${error.message}`);
    return;
  }

  function updateDisplay() {
    xSpan.textContent = calculator.x;
    ySpan.textContent = calculator.y;
  }

  updateDisplay();

  setXButton.addEventListener("click", () => {
    try {
      const x = Number(firstOperandInput.value);
      calculator.setX(x);
      updateDisplay();
    } catch (error) {
      alert(error.message);
    }
  });

  setYButton.addEventListener("click", () => {
    try {
      const y = Number(secondOperandInput.value);
      calculator.setY(y);
      updateDisplay();
    } catch (error) {
      alert(error.message);
    }
  });

  function handleOperation(operation) {
    try {
      const result = operation();
      resultValueSpan.textContent = result;
    } catch (error) {
      alert(error.message);
    }
  }

  sumButton.addEventListener("click", () => handleOperation(calculator.logSum));
  multiplyButton.addEventListener("click", () =>
    handleOperation(calculator.logMul)
  );
  subtractButton.addEventListener("click", () =>
    handleOperation(calculator.logSub)
  );
  divideButton.addEventListener("click", () =>
    handleOperation(calculator.logDiv)
  );
}

export { lesson4Task1Html, lesson4Task1Logic };
