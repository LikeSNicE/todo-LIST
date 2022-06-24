const input = document.querySelector('#input'),
btn = document.querySelector('.btn'),
result = document.querySelector('.result'),
total = document.querySelector('.total');
let i = 0;

// animation
function animation({
  elem = '',
  animationClass = 'animated',
  nameOfAnimation = 'fadeIn'
} = {}) {
  elem.classList.add(animationClass, nameOfAnimation);
}


// add event 
btn.addEventListener('click', () => {

  if (input.value === ""){
    return;
  }

  createDeleteElements(input.value);
  input.value = '';
});


// create and deleme elem todo
function createDeleteElements(value) {

  i++;
  const li = document.createElement('li');
  const btnDelete = document.createElement('button');

  animation({
    elem: li,
  });

   function addSomeStylesElem(elem, className, valueName) {
     elem.style.cursor = "pointer";
     elem.classList.add(className);
     elem.textContent = valueName;
   }

  addSomeStylesElem(li,'li',value);
  addSomeStylesElem(btnDelete,'btn','Убрать');

  li.appendChild(btnDelete);

  // remove todo
  btnDelete.addEventListener('click', (e) => {
    animation({
      elem: li
    });
    setTimeout(() => {
      i--;
      total.textContent = i;
      result.removeChild(li);
    }, 350);
  });

  // toggle class Active 
  li.addEventListener('click', (e) => {
    li.classList.toggle('li-active');
  });

  animation({
    elem: total,
  });
  total.textContent = i;
  result.appendChild(li);

  miniAchievements(20);

  function miniAchievements(i) {
    if (document.querySelectorAll('.result li').length == i) {
       alert('Вы как Дамир, идите отдохните');
    }
  }
}

