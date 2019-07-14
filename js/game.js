const WIDTH = 400;
const HEIGH = 400;

let targetTreasure = {
     x:getRandomNumber(WIDTH),
     y:getRandomNumber(HEIGH)
}

let $map = document.getElementById('map');
let $distance = document.getElementById('distance');
let clicks = 0;

$map.addEventListener('click',function(e){
     clicks++
     let distance = getDistance(e,targetTreasure);
     let distanceHint = getDistanceHint(distance);
     $distance.innerHTML = `<h1>${distanceHint}</h1>`;
     if(distance<20){
          alert(`Found the treasure in ${clicks} click`);
          location.reload();
     }
     
})