// 'use strict';
const defaults = {
  delay: 650
};
const body = document.getElementsByTagName('body')[0];

function setToCenterPoint ($el) {
  const winHeight = window.innerHeight;
  const winWidth = window.innerWidth;
  const y = winHeight / 3;
  const x = winWidth / 3;
  const diameter = (winWidth < winHeight ? winWidth : winHeight);
  const t = Math.random(0, 2 * 3.15159);
  const r = diameter / 2;

  const distance = Math.random(0, 1) * r;
  const newX = (distance * Math.cos(t)) + x;
  const newY = (distance * Math.sin(t)) + y;
  $el.style.top = newY;
  $el.style.left = newX;
}

function sayThing (phrase) {
  const newDiv = document.createElement('div');
  newDiv.textContent = phrase;
  body.appendChild(newDiv);
  setToCenterPoint(newDiv);
  newDiv.classList.add('simplesay');
  setTimeout(function () {
    newDiv.classList.add('simplesay2');
  }, 0);

  setTimeout(body.removeChild.bind(body, newDiv), defaults.delay + 100);
}

const actions = [
  { text: 'Hello' },
  { text: 'and welcome!' },
  { text: 'These should' },
  { text: 'all be read in order' },
  { text: 'it might not work' },
  { text: 'and if it doesn\'t we need' },
  { text: 'to adjust it' }
];

function processActions (list) {
  var totalDelay = 0;
  list.forEach(function (item) {
    const delay = item.delay || defaults.delay;
    totalDelay += delay;
    window.setTimeout(function () {
      if (item.exec) item.exec();
      if (item.text) sayThing(item.text);
    }, totalDelay);
  });
}

processActions(actions);
