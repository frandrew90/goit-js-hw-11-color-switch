"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

refs.startBtn.addEventListener("click", onStartBtn);
refs.stopBtn.addEventListener("click", onStopBtn);

const min = 0;
const max = colors.length - 1;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;

function onStartBtn() {
  refs.startBtn.disabled = true;
  intervalId = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(min, max)];
  }, 1000);
}

function onStopBtn() {
  refs.startBtn.disabled = false;
  clearInterval(intervalId);
}
