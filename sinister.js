console.log('this is sinister');
const el = document.getElementById('main');

function clearElement () {
  el.className = '';
  el.textContent = '';
}

function welcome () {
  el.textContent = 'Welcome to Sinister';
  el.classList.add('step1a');
  el.classList.add('step1b');
}

function middle () {
  clearElement();
  console.log('dont look behind you');
}

function end () {
  console.log('damn that was scary');
}

const actions = [
  { exec: welcome, delay: 100 },
  { exec: middle, delay: 14000 },
  { exec: end, delay: 500 }
];

function processActions (list) {
  var totalDelay = 0;
  list.forEach(function (item) {
    totalDelay += item.delay;
    window.setTimeout(item.exec, totalDelay);
  });
}

processActions(actions);
