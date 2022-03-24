function solve() {
  let initialTxt = document.getElementById('input').value.split('.');
  let paragraphs = [];
  let paragraph = [];
  let counter = 0;
  let parameter = /\w+/g
  for (let i = 0; i < initialTxt.length; i++) {
    let containsCharacter = initialTxt[i].match(parameter)
    if (initialTxt[i].length >= 1 && containsCharacter != null) {
      counter++;
      paragraph.push(initialTxt[i]);
      if (paragraph.length == 3) {
        counter = 0;
        paragraphs.push(paragraph);
        paragraph = [];
      }
    }
  }
  if (paragraph.length < 3 && paragraph.length > 0) {
    paragraphs.push(paragraph);
  }
  for (let element of paragraphs) {
    let toInput = element.join('.') + '.';
    let output = document.getElementById('output');
    output.innerHTML += `<p> ${toInput} </p>`
  }
}