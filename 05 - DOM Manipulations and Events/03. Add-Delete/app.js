function addItem() {
    let ulElementsLocation = document.querySelector("#items");
    let newLiValue = document.getElementById('newItemText').value;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(newLiValue));
    // add delete button
    const button = document.createElement('a');
    button.href = '#'
    button.textContent = '[Delete]';
    button.addEventListener('click', removeElement);

    li.appendChild(button);

    ulElementsLocation.appendChild(li);
    document.getElementById('newItemText').value = '';
    function removeElement(ev){
        const parent = ev.target.parentNode;
        parent.remove();
    }
}