const woodHead = document.getElementById("wood") 
const woodUpgBtn = document.getElementById("perClickUpgrade")
const woodcuttersBtn = document.getElementById("autoWood")
const woodcuttersHead = document.getElementById("woodcutters") 
const foodHead = document.getElementById("food")
const farmerBtn = document.getElementById("farmer")

var gameData = {
  //Wood
  wood: 0,
  woodPerClick: 1,
  woodPerSecond: 0,
  woodPerClickCost: 10,
  woodcutters: 0,
  woodPerFarm: 400,
  //Food
  food: 0,
  foodPerSecond: 0,
  foodPerCutters: 50,
  farms: 0
}

function cutWood() {
  gameData.wood += gameData.woodPerClick
  woodHead.innerHTML = gameData.wood + " Wood"
}

function upgradeAxe() {
  if (gameData.wood >= gameData.woodPerClickCost){
    gameData.wood -= gameData.woodPerClickCost;
    gameData.woodPerClick += 1;
    gameData.woodPerClickCost += 10; 
    woodUpgBtn.innerHTML = "🪓 Upgrade Axe (Currently Level: " + gameData.woodPerClick + " ) Cost: " + gameData.woodPerClickCost + " wood";
  }else{
    console.log("Nope")
  }
}

function farm() {
  if (gameData.wood >= gameData.woodPerFarm) {
    gameData.wood -= gameData.woodPerFarm;
    gameData.woodPerFarm += gameData.woodPerFarm;
    gameData.foodPerSecond += 1;
    console.log(gameData.foodPerSecond);
    console.log(gameData.woodPerSecond);
  }else{
    console.log(gameData.wood);
    console.log(gameData.woodPerSecond);
  }
}

function autoWood() {
  if (gameData.food >= gameData.foodPerCutters) {
    gameData.food -= gameData.foodPerCutters;
    gameData.foodPerCutters += gameData.foodPerCutters;
    gameData.woodcutters += 1;
    gameData.woodPerSecond += gameData.woodcutters * gameData.woodPerClick;
  }else{
    console.log("Nope")
  }
}

var mainGameLoop = window.setInterval(function() {
  gameData.wood += gameData.woodPerSecond;
  gameData.food += gameData.foodPerSecond;
  woodcuttersBtn.innerHTML = "🪚 Buy Woodcutter || Cost: " + gameData.foodPerCutters + " Food";
  woodHead.innerHTML = gameData.wood + " Wood";
  woodcuttersHead.innerHTML = gameData.woodcutters + " Woodcutters || Wood Per Second:" + gameData.woodPerSecond;

  //food
  foodHead.innerHTML = gameData.food + " Food"
  farmerBtn.innerHTML = "🚜 Buy Farm || Cost: " + gameData.woodPerFarm + " Wood"; 
}, 1000)
