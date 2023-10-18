const btn = document.getElementById('switch');
let main = document.getElementById('main');




const changeColor = () =>{
  let randomOne = Math.floor(Math.random() * 256);
  let randomTwo = Math.floor(Math.random() * 256);
  let randomThree = Math.floor(Math.random() * 256);
  main.style.backgroundColor = `rgb(${randomOne},${randomTwo},${randomThree})`;
};


btn.addEventListener("click", changeColor);