function solve() {
  let txt = document.querySelector("#text").value;
  let convention = document.querySelector("#naming-convention").value;
  let resultArray = [];
  let txtSplit = txt.split(' ');
  switch (convention) {
    case "Camel Case":
      let counter = 0;
      for (let word of txtSplit){
        if (counter == 0){
          resultArray.push(word.toLowerCase())
          counter++;
        } else {
          let first = word[0].toUpperCase();
          let rest = word.slice(1).toLowerCase();
          resultArray.push(first+rest);
        }
      }
      break;
    case "Pascal Case":
      for (let word of txtSplit){
        let first = word[0].toUpperCase();
        let rest = word.slice(1).toLowerCase();
        resultArray.push(first+rest);
      }
      break;
    default:
      resultArray = 'Error!'
      break;
  }
  const result = document.getElementById('result');
  if (resultArray.length == 1){
    result.innerHTML = resultArray;
  } else if (resultArray == 'Error!'){
    result.innerHTML = resultArray;
  } else {
    result.innerHTML = resultArray.join('');
  }
}