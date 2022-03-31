function solve() {
  let generateBtn = document.querySelector("#exercise > button:nth-child(3)");
  let buyBtn = document.querySelector("#exercise > button:nth-child(6)");
  let itemsList = document.querySelector("#exercise > div > div > div > div > table > tbody");
  generateBtn.addEventListener('click', gen);
  buyBtn.addEventListener('click', buy);

  function gen(e) {
    let entryJSON = e.target.previousElementSibling.value;
    let parsed = JSON.parse(entryJSON);
    for (let item of parsed){
      let row = document.createElement('tr');
      let td1 = document.createElement('td');
      let im = document.createElement('img');
      im.src = item.img
      td1.appendChild(im);
      row.appendChild(td1);

      let td2 = document.createElement('td');
      let p1 = document.createElement('p');
      p1.textContent = item.name;
      td2.appendChild(p1);
      row.appendChild(td2);

      let td3 = document.createElement('td');
      let p2 = document.createElement('p');
      p2.textContent = item.price;
      td3.appendChild(p2);
      row.appendChild(td3);

      let td4 = document.createElement('td');
      let p3 = document.createElement('p');
      p3.textContent = item.decFactor;
      td4.appendChild(p3);
      row.appendChild(td4);

      let td5 = document.createElement('td');
      let inp = document.createElement('input');
      inp.type = "checkbox";
      td5.appendChild(inp);
      row.appendChild(td5);

      itemsList.appendChild(row);
    }
  }

  function buy(e) {
    let boxes = document.querySelectorAll("#exercise > div > div > div > div > table > tbody > tr > td > input[type=checkbox]");
    let total = 0;
    let boughtFurniture = [];
    let decFactors = [];
    for (let box of boxes){
      if (box.checked){
        let furnitureName = box.parentElement.parentElement.querySelector("td > p").textContent;
        let itemPrice = box.parentElement.parentElement.querySelector("td:nth-child(3) > p").textContent
        let decoFactor = box.parentElement.parentElement.querySelector("td:nth-child(4) > p").textContent
        total += Number (itemPrice);
        boughtFurniture.push(furnitureName);
        decFactors.push(Number (decoFactor));
      }
    }
    document.querySelector("#exercise > textarea:nth-child(5)").textContent = `Bought furniture: ${boughtFurniture.join(', ')}\nTotal price: ${total.toFixed(2)}\nAverage decoration factor: ${decFactors.reduce((a,b) => a + b) / decFactors.length}`
  }
}