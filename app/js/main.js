const input = document.querySelector('.input'),
  btn = document.querySelector('.btn'),
  result = document.querySelector('.result'),
  total = document.querySelector('.total');
let i = 0;

// animation
function animation({
  elem = '',
  animationClass = 'animated',
  nameOfAnimation = 'fadeIn'
} = {}){
  elem.classList.add(animationClass,nameOfAnimation);
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


  li.style.cursor = "pointer";
  animation({
    elem: li,
  });

  li.classList.add('li');
  li.textContent = value;

  btn.classList.add('btn');
  btn.textContent = 'Убрать';
  li.appendChild(btn);


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

  animation({elem: total,});
  total.textContent = i;
  result.appendChild(li);
}