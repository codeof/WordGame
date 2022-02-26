let array = ['computer','bird','move','early','focus','playing'];

let start_word = document.getElementById("moving_word1");


let array_generated = array[Math.floor(Math.random()*array.length)];

console.log(array_generated);

start_word.innerText=array_generated;