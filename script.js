'use strict';
function rain() {
  let cloud = document.querySelector('.cloud'),
    e = document.createElement('div'),
    left = Math.floor(Math.random() * 310),
    width = Math.random() * 5,
    height = Math.random() * 50,
    duration = Math.random() * 0.5;

  e.classList.add('drop');
  cloud.appendChild(e);
  e.style.left = left + 'px';
  e.style.width = 0.5 + width + 'px';
  e.style.height = 0.5 + height + 'px';
  e.style.animationDuration = 1 + duration + 's';

  setTimeout(function () {
    cloud.removeChild(e);
  }, 2000);
}

setInterval(function () {
  rain();
}, 20);
