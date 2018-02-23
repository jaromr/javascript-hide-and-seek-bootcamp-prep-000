function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(target, nested){
 return document.querySelector('#nested.target')
}
function increaseRankBy(n){
  const elements = document.querySelectorAll('ul.ranked-list')
  for (let i =0; i < elements.length; i++){
    elements[i]=parseInt(elements[i],10)+1
  }
}