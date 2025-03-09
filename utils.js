import hometasks from "./hometasks";
import { lesson1Task1Html, lesson1Task1Logic } from "./solutions/lesson1Task1";
import { lesson1Task2Html, lesson1Task2Logic } from "./solutions/lesson1Task2";
import { lesson2Task1Html, lesson2Task1Logic } from "./solutions/lesson2Task1";
import { lesson2Task2Html, lesson2Task2Logic } from "./solutions/lesson2Task2";
import { lesson2Task3Html, lesson2Task3Logic } from "./solutions/lesson2Task3";
import { lesson3Task1Html, lesson3Task1Logic } from "./solutions/lesson3Task1";
import { lesson3Task2Html, lesson3Task2Logic } from "./solutions/lesson3Task2";
import { lesson4Task1Html, lesson4Task1Logic } from "./solutions/lesson4Task1";

import images from "./assets/images";

const solutions = [
  [
    { html: lesson1Task1Html, logic: lesson1Task1Logic },
    { html: lesson1Task2Html, logic: lesson1Task2Logic },
  ],
  [
    { html: lesson2Task1Html, logic: lesson2Task1Logic },
    { html: lesson2Task2Html, logic: lesson2Task2Logic },
    { html: lesson2Task3Html, logic: lesson2Task3Logic },
  ],
  [
    { html: lesson3Task1Html, logic: lesson3Task1Logic },
    { html: lesson3Task2Html, logic: lesson3Task2Logic },
  ],
  [{ html: lesson4Task1Html, logic: lesson4Task1Logic }],
];

function showLastFinishedLesson(lastFinishedLesson) {
  const lesson = document.getElementById(`lesson${lastFinishedLesson}`);
  lesson.classList.add("active");
  const information = document.getElementById("information");
  if (hometasks[lastFinishedLesson - 1]) {
    information.innerHTML = showInformation(lastFinishedLesson);
    markFirstTask();
    const description = document.getElementById("text");
    description.innerHTML = hometasks[lastFinishedLesson - 1][0].description;
    showResult(lastFinishedLesson, 1);
  } else {
    information.innerHTML = showMockPage();
  }
  lesson.click();

  const taskButton = document.getElementById("task1");
  taskButton.click();
}

function showMockPage() {
  return `<div class="mock">
      <h2>Comming soon...</h2>
    </div>`;
}

function showInformation(currentLesson) {
  const tasksButtons = hometasks[currentLesson - 1]
    .map(
      (item, index) =>
        `<button id="task${index + 1}" class="task">Task ${index + 1}</button>`
    )
    .join("");
  return `<nav class="tasks">
            ${tasksButtons}
          </nav>
          <div id="assignment">
            <div id="description">
              <h3>Description</h3>
              <div id="text"></div>
            </div>
            <div id="result">
              <h3>Result</h3>
              <div class="solution"> 
              </div>
              <a href="#" target="_blank" id="github">Show code</a>
            </div>
          </div>
  `;
}

function markFirstTask() {
  const task = document.getElementById("task1");
  task.classList.add("active");
}

function showResult(lesson, task) {
  const solution = solutions[lesson - 1][task - 1];

  if (solution && solution.html && solution.logic) {
    const solutionBlock = document.querySelector(".solution");
    solutionBlock.innerHTML = solution.html;
    solution.logic();

    setImageSource(lesson, task);

    if (lesson == 7 && task == 2) setImageSource(8, 2, "timerResetIcon");

    if (lesson == 1 && task == 1) {
      images.lesson1.task1.quizess.forEach((imgUrl, index) => {
        document.getElementById(`lesson1Task1Quiz${index + 1}`).src = imgUrl;
      });
    }

    const githubLink = document.getElementById("github");
    githubLink.setAttribute("href", hometasks[lesson - 1][task - 1].githubLink);
  } else {
    console.warn(`No solution found for lesson${lesson}, task${task}.`);
  }
}

function setImageSource(lesson, task, elementIdOverride) {
  let elementId = "";
  let imageUrl = "";

  switch (`${lesson}-${task}`) {
    case "1-1":
      elementId = "lesson1Task1DescriptionImage";
      imageUrl = images.lesson1.task1.example;
      break;
    case "2-3":
      elementId = "lesson2Task3DescriptionImage";
      imageUrl = images.lesson2.task3.example;
      break;
    case "3-2":
      elementId = "lesson3Task2DescriptionImage";
      imageUrl = images.lesson3.task2.example;
      break;
    default:
      return;
  }

  if (elementIdOverride) {
    elementId = elementIdOverride;
  }

  if (elementId && imageUrl) {
    const imageElement = document.getElementById(elementId);
    if (imageElement) {
      imageElement.src = imageUrl;
    } else {
      console.warn(`Element with id ${elementId} not found.`);
    }
  }
}

export {
  showLastFinishedLesson,
  showMockPage,
  showInformation,
  markFirstTask,
  showResult,
  setImageSource,
};
