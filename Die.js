var die = Math.floor((Math.random()*6)+1);
function roll() {
  document.getElementById(one);
  one.innerHTML = 'You rolled ' + die;
}
var twoDice = Math.floor((Math.random()*6)+1) + Math.floor((Math.random()*6)+1);
function rollTwo() {
  document.getElementById(two);
  two.innerHTML = 'You rolled ' + twoDice;
}