'use strict';
let inputText = document.querySelector('input');
console.log(inputText.value);

let outputPart = document.querySelector('.theOutputPart');
// the box that contains the every output lists
let tasksBox = document.querySelector('.tasksBox');
// console.log(tasksBox);

// console.log(outputPart);

let TaskText = document.querySelector('p');
// console.log(TaskText.textContent);

let tasksList = [];

console.log(tasksList);

let iconsBtns = document.querySelector('.iconsBtns');
// console.log(iconsBtns);

let addBtn = document.querySelector('.AddBtn');
let writeTextBtn = document.querySelector('.theTaskInput');
let deleteBtn = document.querySelector('.delBtn');
let upBtn = document.querySelector('.upBtn');
let downBtn = document.querySelector('.DownBtn');
// console.log(upBtn);

// tasksList.push(tasksBox.innerHTML);
const previousTasks = localStorage.getItem('previousTasks');
if (previousTasks) {
  tasksList.push(...JSON.parse(previousTasks));
}

// tasksList.push(...JSON.parse(localStorage.getItem('previousTasks')));

console.log(JSON.parse(localStorage.getItem('previousTasks')));
// let s = [2, 3, 3, 3, 3, 3];
// console.log(...s);
// let g = [];
// g.push(...s);
// console.log(g);

tasksBox.innerHTML = JSON.parse(localStorage.getItem('previousTasks'));
tasksBox.innerHTML = tasksBox.innerHTML.replaceAll(',', '');

// Add Btn
addBtn.addEventListener('click', function () {
  // let newOutputPart = outputPart.cloneNode(true);
  let newOutputPart = document.createElement('div');
  newOutputPart.className = 'theOutputPart';
  let outputPara = document.createTextNode(inputText.value);
  let newIconsBtns = iconsBtns.cloneNode(true);

  newOutputPart.appendChild(outputPara);
  newOutputPart.appendChild(newIconsBtns);

  let insertTasks = function () {
    // tasksBox.insertAdjacentElement('afterbegin', newOutputPart);
    tasksBox.appendChild(newOutputPart);
  };
  insertTasks();
  // tasksBox.insertAdjacentElement('afterbegin', newOutputPart);
  inputText.value = 'Write your new task';

  tasksList.push(newOutputPart.outerHTML);
  // tasksList.splice(0, 1);
  console.log(tasksList);
  // console.log(typeof newOutputPart.innerHTML);
  // console.log(typeof newOutputPart.outerHTML);
  // console.log(newOutputPart);

  // localStorage.setItem('previousTasks', JSON.stringify(tasksList));
  localStorage.setItem('previousTasks', JSON.stringify(tasksList));
});

console.log(tasksList.length);

let n = 'dfsakljf';
// console.log([n]);

// Write text Btn
writeTextBtn.addEventListener('click', function () {
  inputText.value = '';
});

// Delete Btn
tasksBox.addEventListener('click', function (e) {
  if (e.target.classList.contains('delBtn')) {
    let curretElementsArr = Array.from(tasksBox.children);
    let theSpecificElement = e.target.closest('.theOutputPart');
    let theIndex = curretElementsArr.indexOf(
      // e.target.closest('.theOutputPart')
      theSpecificElement
    );
    // console.log(theIndex);
    e.target.closest('.theOutputPart').remove();
    tasksList.splice(theIndex, 1);

    localStorage.setItem('previousTasks', JSON.stringify(tasksList));
  }
});
// console.log(tasksList);

let ss = 'soso';
// console.log(Array.from(ss));
// console.log(Array.from(tasksBox.children).indexOf());

// Up Btn
tasksBox.addEventListener('click', function (e) {
  if (e.target.classList.contains('upBtn')) {
    let currentTask = e.target.closest('.theOutputPart');
    let previousTask = currentTask.previousElementSibling;
    if (previousTask) {
      tasksBox.insertBefore(currentTask, previousTask);
    }
  }
});

// Down Btn
tasksBox.addEventListener('click', function (e) {
  if (e.target.classList.contains('DownBtn')) {
    let currentTask = e.target.closest('.theOutputPart');
    let nextTask = currentTask.nextElementSibling;
    if (nextTask) {
      tasksBox.insertBefore(nextTask, currentTask);
    }
    // console.log('down');
  }
});

console.log(document.querySelector('.theWholePart').clientHeight, 'its width');
