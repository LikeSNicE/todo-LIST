

const input = document.querySelector('#input'),
  btn = document.querySelector('.btn'),
  result = document.querySelector('.result'),
  total = document.querySelector('.total');
  let i = 0;

  let tasks = [];
  !localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

  let todoImemElems = [];

  function Task(description){
    this.description = description;
  }

  // update localstorage 

  const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

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
  tasks.push(new Task(input.value));
  updateLocal();

  console.log(tasks);
  if (input.value === "") {
    return;
  }

  createDeleteElements(input.value);
  input.value = '';
});


const completeTask = index => {
  if(tasks[index].description){

  }
};

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
    animation({
      elem: li
    });
    setTimeout(() => {
       i--;
       total.textContent = i;
       result.removeChild(li);
       updateLocal();
    }, 350);
  });

  // toggle class Active 
  li.addEventListener('click', (e) => {
    li.classList.toggle('li-active');
  });

  animation({elem: total,});
  total.textContent = i;
  result.appendChild(li);
}