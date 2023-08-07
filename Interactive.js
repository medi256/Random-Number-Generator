// // const container = document.getElementById('container');


// // container.style.backgroundColor='red';

// // // const peel =  document.querySelectorAll('.item');

// // // for(let  i=0 ; i < peel.length; i++ ){
// // // peel[i].style.color = "yellow";
// // // }

// // const  ul = document.querySelector('ul');
// // const li = document.createElement('li');
// // const text = document.createTextNode('Liverpool');
// // li.appendChild(text);
// // ul.append(li);
// // ul.childNodes[1].style.color ='blue';



// // console.log(container);

// // const bless = document.getElementById('gang');
// // bless.setAttribute('href', 'https://sololearn.com');
// // bless.classList.add('take');

// const button1 = document.getElementById('kids');
// function first(){
//     alert('I love javascript');
// }
// button1.addEventListener('click', first);






// let second = document.getElementById('kid2');
// function step(){
//     second.style.backgroundColor='red';
// }
// second.addEventListener('click', step);




// let next = document.getElementById('kid3');
// function manager(){
//         next.style.backgroundColor = "blue";
// }
// next.addEventListener('mouseover', manager);


let num = document.getElementById('press');
let one1 = document.getElementById('one');
function start(){
    let random1 = Math.floor(Math.random() * 100);
    one1.innerText = random1
}
num.addEventListener('mouseover', start);
