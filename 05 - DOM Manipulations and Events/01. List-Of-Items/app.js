function addItem() {
    let ulElementsLocation = document.querySelector("#items");
    let newLiValue = document.getElementById('newItemText').value;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(newLiValue));
    ulElementsLocation.appendChild(li);
    document.getElementById('newItemText').value = '';
}