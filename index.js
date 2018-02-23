function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(target, nested){
 return document.querySelector('#nested .target')
}
function increaseRankBy(n){
  var elements = document.querySelectorAll('.ranked-list')
  for (var i =0; i < elements.length; i++){
    elementsparseInt(elements[i],10)
  }
}