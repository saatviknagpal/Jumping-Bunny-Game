score = 0;
cross = true;

audio = new Audio('music.mp3');
setTimeout(() => {
  audio.play();
}, 1000);
audiogo = new Audio('gameover.wav');
document.onkeydown = function(e){
  console.log("Key code is: ", e.keyCode);
  if(e.keyCode == 38)
  {
    bunny = document.querySelector('.bunny');
    bunny.classList.add('animatebunny');
    setTimeout(function () {
      bunny.classList.remove('animatebunny');
    }, 700);
  }
  if(e.keyCode == 39)
  {
    bunny = document.querySelector('.bunny');
    bunnyX = parseInt(window.getComputedStyle(bunny, null).getPropertyValue('left'));
    bunny.style.left = bunnyX + 120 + "px";
    bunny.style.transform = "scaleX(1)";
  }
  if(e.keyCode == 37)
  {
    bunny = document.querySelector('.bunny');
    bunnyXR = parseInt(window.getComputedStyle(bunny, null).getPropertyValue('left'));
    bunny.style.left = bunnyXR - 120 + "px";
    bunny.style.transform = "scaleX(-1)";
  }

}
setTimeout(() => {
  gameOver.style.visibility = 'hidden';
}, 3000);

setInterval(() => {
  bunny = document.querySelector('.bunny');
  obstacle = document.querySelector('.obstacle')
  gameOver = document.querySelector('.gameOver')

  dx = parseInt(window.getComputedStyle(bunny, null).getPropertyValue('left'));
  dy = parseInt(window.getComputedStyle(bunny,null).getPropertyValue('top'));

  ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
  oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  console.log(offsetX, offsetY);
  
  if(offsetX < 90 && offsetY < 89){
    gameOver.style.visibility = 'visible';
    
      gameOver.innerHTML = "Game Over - Reload to Play Again";
    
    obstacle.classList.remove('obstacleAni');
    audiogo.play();
     setTimeout(() => {
       audio.pause();
    }, 100);

    setTimeout(() => {
      audiogo.pause();
     
    }, 3000);
  }
  else if(offsetX < 145 && cross){
    score+=1;
    
    calcScore(score);
    
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    
    setTimeout(() => {
      aniObst = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
      newAni = aniObst - 0.05;
      obstacle.style.animationDuration = newAni + 's';

    }, 500);
  }

},10);

function calcScore(score){
  scoreCont.innerHTML = 'Your Score : ' + score;
  }
