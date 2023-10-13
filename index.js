// Write your solution here!
const cats = ["Milo","Otis", "Garfield"];
function destructivelyAppendCat(name){
  cats.push(name);
}
function destructivelyPrependCat(name){
  cats.unshift(name)
}
function destructivelyRemoveLastCat(){
  cats.pop()
}
function  destructivelyRemoveFirstCat(){
  cats.shift()
}
function appendCat(name){
  
  let newcats = [...cats, name];
  return newcats;
}
function prependCat(name){
 
  let newcats = [name, ...cats];
  return newcats;
}
function removeLastCat(){
  let newcats = [ ...cats];
  newcats.pop();
  return newcats;
}
function removeFirstCat(){
  let newcats = [...cats]
  newcats.shift();
  return newcats;
}
console.log(removeLastCat())
