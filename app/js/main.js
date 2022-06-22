const input = document.querySelector('.input'),
  btn = document.querySelector('.btn'),
  result = document.querySelector('.result'),
  total = document.querySelector('.total');
let i = 0;

// animation
// function animation({
//   elem = '',
//   animationClass = 'animation',
//   nameOfAnimation = 'fadeIn'
// } = {}){
//   elem.classList.add(animationClass,nameOfAnimation);
// }

function animation(elem = '', animationClass = 'animation',
  nameOfAnimation = 'fadeIn') {
    elem.classList.add(animationClass, nameOfAnimation);
}

// add event 
btn.addEventListener('click', () => {
  if (input.value === "") {
    return;
  }
  createDeleteElements(input.value);
  input.value = '';
});

// create and deleme elem todo
function createDeleteElements(value) {
  i++;

  const li = document.createElement('li');
  const btn = document.createElement('button');

  // const btnChangeValue = document.createElement('button');

  li.classList.add('animated', 'fadeIn');
  li.classList.add('li');
  li.textContent = value;

  // animation({
  //   elem: btn,
  //   nameOfAnimation: 'fadeIn',
  //   animationClass: ''
  // });
  animation(btn,'animated','fadeIn');
  btn.classList.add('btn');
  btn.textContent = 'Убрать';
  li.appendChild(btn);

  // change todo 
  // btnChangeValue.classList.add('btn');
  // btnChangeValue.textContent = 'Изменить';
  // li.appendChild(btnChangeValue);

  // btnChangeValue.addEventListener('input', (e) => {

  // });

  // remove todo
  btn.addEventListener('click', (e) => {
    i--;
    total.textContent = i;
    result.removeChild(li);
  });

  // toggle class Active 
  li.addEventListener('click', (e) => {
    li.classList.toggle('li-active');
  });

  total.textContent = i;
  result.appendChild(li);
}