//  Футбольный мяч

// let ball = document.getElementById("ball");
// let field = document.getElementById("field");

// field.addEventListener("click", (event) =>{
//     let half_ball = parseInt(getComputedStyle(ball).getPropertyValue("width")) / 2
//     let x = event.offsetX - half_ball;
//     let y = event.offsetY - half_ball;
//     if (x < half_ball){
//         x = half_ball - half_ball
//     }
//     if (x > field.offsetWidth - half_ball*3){
//         x = field.offsetWidth - half_ball*3
//     }
//     if (y < half_ball){
//         y = half_ball - half_ball
//     }
//     if (y > field.offsetHeight - half_ball*3){
//         console.log(y)
//         y = field.offsetHeight - half_ball*3
//     }
//     func(x, y)
// });

// function func(x, y){
//     ball.style.top = y + 'px';
//     ball.style.left = x + 'px';

// };


// Лошадки
// function func(){
//     let cards = document.getElementsByClassName('pane');    
//     for(let card of cards){
//         card.insertAdjacentHTML('afterbegin', '<button class="btn">[X]</button>');
//         card.addEventListener('click', function(e){
//             let targetItem = e.target;
//             if(targetItem.closest('.btn')){
//                 card.hidden = true;
//             };
//     })
//   }  
//  }