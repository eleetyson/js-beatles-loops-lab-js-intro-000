// add solution here
function theBeatlesPlay(musicians, instruments) {
  let arr = [];
  for (let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  } return arr;
}

function johnLennonFacts(anArr) {
  let i = 0;
  let toReturn = [];
  while (anArr[i]) {
    toReturn.push(`${anArr[i]} !!!`);
    i++;
  } return toReturn;
}