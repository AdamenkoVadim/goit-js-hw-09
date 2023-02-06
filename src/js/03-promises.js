import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formInput = document.querySelector('.form');

formInput.addEventListener('submit', formSubmin)

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise ((res,rej) => {
    setTimeout(() => {
        if (shouldResolve) {
    res({ position, delay });
  } else {
    rej({ position, delay });
  }

    }, delay);
  })
}

function formSubmin(elem) {
elem.preventDefault();
let delay = Number(elem.target.elements.delay.value);
let step = Number(elem.target.elements.step.value);
let amount = Number(elem.target.elements.amount.value);

for (let i = 1; i <= amount; i += 1) {
  createPromise(i, delay)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  delay+=step;
};
}