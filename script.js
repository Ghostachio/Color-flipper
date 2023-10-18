const btn = document.getElementById('switch');
let main = document.getElementById('main');




const changeColor = () =>{
  let colorPalette  = { 
    randomOne : Math.floor(Math.random() * 256),
    randomTwo : Math.floor(Math.random() * 256),
    randomThree : Math.floor(Math.random() * 256),
  }
  
  let {randomOne, randomTwo, randomThree} = colorPalette;

  main.style.backgroundColor = `rgb(${randomOne},${randomTwo},${randomThree})`;
};


btn.addEventListener("click", changeColor);