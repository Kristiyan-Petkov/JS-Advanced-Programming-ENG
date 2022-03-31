function addItem() {
    let txt = document.getElementById('newItemText');
    let val = document.getElementById('newItemValue');
    let newOption = document.createElement('option');
    newOption.textContent = txt.value;
    newOption.value = val.value;
    let changeTarget = document.getElementById('menu');
    changeTarget.appendChild(newOption);
    txt.value = '';
    val.value = '';
}