const lesson2Task1Html = `<div id="lesson2Task1">
                            <fieldset>
                              <legend>Add operation</legend>
                              <label for="firstValue">Input a first value</label>
                              <input id="firstValue" type="number" value="0" step="1"/>
                              <label for="secondValue">Input a second value</label>
                              <input id="secondValue" type="number" value="0" step="1"/>
                              <button id="add">Add</button>
                            </fieldset>
                            <fieldset>
                              <legend>Result</legend>
                              <p id="firstOutput"></p>
                              <p id="secondOutput"></p>
                            </fieldset>
                          </div>`;

function lesson2Task1Logic() {
  const firstValueInput = document.getElementById("firstValue");
  const secondValueInput = document.getElementById("secondValue");
  const addButton = document.getElementById("add");
  const firstOutput = document.getElementById("firstOutput");
  const secondOutput = document.getElementById("secondOutput");

  function add(firstValue, secondValue) {
    if (secondValue === undefined) {
      return function (thirdValue) {
        return Number(firstValue) + Number(thirdValue);
      };
    }

    return Number(firstValue) + Number(secondValue);
  }

  addButton.addEventListener("click", () => {
    const firstValue = firstValueInput.value;
    const secondValue = secondValueInput.value;

    const firstApproach = add(firstValue, secondValue);
    const secondApproach = add(firstValue)(secondValue);

    firstOutput.innerText = `The result of add(${firstValue}, ${secondValue}) = ${firstApproach}`;
    secondOutput.innerText = `The result of add(${firstValue})(${secondValue}) = ${secondApproach}`;
  });
}

export { lesson2Task1Html, lesson2Task1Logic };
