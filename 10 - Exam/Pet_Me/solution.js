function solve() {
    const addModule = document.querySelector("#container").children;
    const addBtn = addModule[4];
    addBtn.setAttribute("onclick", "return false");
    addBtn.addEventListener("click", extract);
    const forAdoption = document.querySelector("#adoption > ul");
    forAdoption.addEventListener("click", adopt);
    const adoptedList = document.querySelector("#adopted > ul");
    adoptedList.addEventListener("click", checked);

    function extract(e) {
        const name = addModule[0];
        const age = addModule[1];
        const kind = addModule[2];
        const currentOwner = addModule[3];

        if (Number(age.value) / 1 != NaN && name.value.length > 0 && age.value.length > 0 && kind.value.length > 0 && currentOwner.value.length > 0) {
            let newEntry = liBuilder(name.value, age.value, kind.value, currentOwner.value, 'add');
            forAdoption.appendChild(newEntry);
        }

        name.value = '';
        age.value = '';
        kind.value = '';
        currentOwner.value = '';
    }

    function liBuilder(name, age, kind, currentOwner, purpose) {
        if (purpose == 'add') {
            let li = document.createElement('li');
            let p = document.createElement('p');
            p.innerHTML = `<strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong>`;
            li.appendChild(p);
            let span = document.createElement('span');
            span.textContent = `Owner: ${currentOwner}`;
            li.appendChild(span);
            let button = document.createElement('button');
            button.textContent = "Contact with owner";
            li.appendChild(button);
            return li;
        } else {
            let li = document.createElement('li');
            let p = document.createElement('p');
            p.innerHTML = `<strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong>`;
            li.appendChild(p);
            let span = document.createElement('span');
            span.textContent = `New Owner: ${currentOwner}`;
            li.appendChild(span);
            let button = document.createElement('button');
            button.textContent = "Checked";
            li.appendChild(button);
            return li;
        }
    }

    function adopt(e) {
        if (e.target.tagName == "BUTTON") {
            if (e.target.textContent == 'Contact with owner') {
                let destination = e.target.parentNode;
                e.target.parentNode.removeChild(e.target);
                let div = document.createElement('div');
                let input = document.createElement('input');
                input.setAttribute('placeholder', 'Enter your names');
                div.appendChild(input);
                let newBtn = document.createElement('button');
                newBtn.textContent = "Yes! I take it!";
                div.appendChild(newBtn);
                destination.appendChild(div);
            } else {
                let adopter = e.target.parentNode.children[0].value;
                if (adopter.length > 0) {
                    let petDetails = Array.from(e.target.parentNode.parentNode.children[0].children);
                    let petName = petDetails[0].textContent;
                    let petAge = petDetails[1].textContent;
                    let petKind = petDetails[2].textContent;
                    e.target.parentNode.parentNode.remove();
                    let newlyAdopted = liBuilder(petName, petAge, petKind, adopter, 'adopted');
                    adoptedList.appendChild(newlyAdopted);
                }
            }
        }
    }

    function checked(e) {
        if (e.target.tagName == "BUTTON") {
            let elementToRemove = e.target.parentNode;
            elementToRemove.remove();
        }
    }
}

