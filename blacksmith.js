{
  let gold = 10;
let ore = 2;
let wood = 4;
let fireLit = false;
let inventory = { sword: 4, axe: 4 };
}
// Variables
const fireStatus = false;
const wood = 3


// Functions

/**
 * fire
 * To start a fire:
 *    The fire must be out
 *    There must be at least 1 piece of wood
 * To stop a fire:
 *    The fire must be going
 */
function fire () {
  if (fireStatus === true && wood > 0){
    fireStatus = true
    wood = wood - 1
    console.log('You have started a fire.')
  }
  else if (fireStatus === true) {
    console.log('You have put out the fire')
    fireStatus = false
  }
  else {
    console.log('You do not have enough wood to start a fire')
  }
}

/**
 * buy
 */

function buy(item){
  if (item === 'ore' && gold >= 3 && fireStatus === false){
    ore = ore + 1
    gold = gold - 3
    console.log('You bought 1 ore')
  }
  if  (item === 'wood'){
    fireStatus = false
wood = wood + 1
gold = gold - 1
console.log('You bought 1 wood')
}
}


/**
 * make
 */
function make(item){
  const recipies = { sword: { ore: 2, wood: 1 }, axe: { ore: 1, wood: 2 } }
  if (item === 'ore' && wood >= 2) {
    fireStatus = true
    ore = ore - 2
    wood = wood - 1
    console.log('You have made 1 sword')
  }
  if (item === 'wood') {
    fireStatus = true
    ore = ore - 1
    wood = wood - 2
    console.log('You have made 1 axe')
  }
  if (recipes.hasOwnProperty(item)) {
    const recipe = recipes[item];
    const requiredOre = recipe.ore;
    const requiredWood = recipe.wood;

    if (ore >= requiredOre && wood >= requiredWood && fireLit) {
      ore -= requiredOre;
      wood -= requiredWood;
      inventory[item]++;
      return `You made a ${item}. You now have ${inventory[item]} ${item}s.`;
    } else {
      return `You don't have enough resources or the fire is not lit to make a ${item}.`;
    }
  }
  else {
    return "Invalid item.";
  }
}

/**
 * sell
 */
function sell(item){
  const prices = { sword: 5, axe: 4 };
  if (item === 'sword') {
    gold = gold + 5
    console.log('You have sold 1 sword')
  }
  if (item === 'axe') {
    gold = gold + 4
    console.log('You have now sold 1 axe')
  } else {
    return "Invalid item.";
  }
}


/**
 * inventory
 * Shows the players current inventory
 */

function displayInventory(){
  console.log('Current Inventory: Gold: X, Ore: X, Wood: X, Swords: X, Axes: X')
  return `Inventory:
  Gold: ${inventory.gold}
  Ore: ${inventory.ore}
  Wood: ${inventory.wood}
  Swords: ${inventory.sword}
  Axes: ${inventory.axe}`;
}



function executeCommand() {
  const commandInput = document.getElementById("commandInput");
  const outputElement = document.getElementById("output");

  const command = commandInput.value.toLowerCase();

  let output;
  switch (command) {
    case "buy ore":
    case "buy wood":
      output = buy(command.split(' ')[1]);
      break;
    case "make sword":
    case "make axe":
      output = make(command.split(' ')[1]);
      break;
    case "sell sword":
    case "sell axe":
      output = sell(command.split(' ')[1]);
      break;
    case "fire":
      output = fire();
      break;
    case "inventory":
      output = displayInventory();
      break;
    case "help":
      output = help();
      break;
      default:
      output = "Invalid command. Type 'help' for instructions.";
  }
  outputElement.textContent = output;
  commandInput.value = "";
}

/**
 * Help Command
 * Returns the instruction on how to play the game.
 */
function help () {
  return `INSTRUCTIONS:
  Blacksmith is a simple text base game. 
  
  As a blacksmith you convert ore and wood into swords and axes. You buy your resources using gold and sell your weapons for gold.
  
  COMMANDS:
  - buy(item)
  - make(item)
  - sell(item)
  - fire()
  - inventory()
  - help()`
}

// Log the help() function
console.log(help())