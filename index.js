
function getFirstSelector(selector){
  var vv = document.querySelector(selector);
  return vv;
}
function nestedTarget() {
  return document.querySelector('#nested .target')
}
function increaseRankBy(n){
  n = parseInt(n)
 var pos =  document.querySelector('ul.ranked-list li')
 for(var i = 0; i<pos.length; i++){
   pos[i].innerHTML = (i+n);
 }
}
function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}