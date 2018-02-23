function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(target, nested){
 return document.querySelector('#nested .target')
}
function increaseRankBy(n){
  const elements = document.querySelectorAll('ul.ranked-list')
  for (let i =0; i < elements.length; i++){
    elements[i].innerHTML=parseInt(elements[i],10) + n
  }
}
function deepestChild(){
  var current = document.querySelector('div#grand-node')
  while (typeof current === 'object'){
 
   current = current.children[0] 
  }
}