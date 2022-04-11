function solve() {
    let btnTarget = document.querySelector("body > main > div > section:nth-child(1) > div:nth-child(2) > form > button");
    // btnTarget.setAttribute("onclick", "return false");
    document.querySelector(btnTarget.addEventListener('click', adding));
    let datePattern = /\d+.\d\d.\d\d/g;
    let openSection = document.querySelector("body > main > div > section:nth-child(2) > div:nth-child(2)");
    openSection.addEventListener('click', openButtons);
    let progressSection = document.querySelector("body > main > div > section:nth-child(3) > div:nth-child(2)");
    progressSection.addEventListener('click', progButtons);
    let finishSection = document.querySelector("body > main > div > section:nth-child(4) > div:nth-child(2)");

    function adding(e) {
        e.preventDefault();
        let [task, description, date] = e.target.parentNode;

        let dateCheck = (Array.from(date.value.matchAll(datePattern))).length;
        if (task.value.length > 0 && description.value.length > 0 && dateCheck > 0) {
            let articleEl = document.createElement('article');
            articleEl.innerHTML = `
                <h3>${task.value}</h3>
                <p>Description: ${description.value}</p>
                <p>Due date: ${date.value}</p>
                <div class="flex">
                    <button class="green">Start</button>
                    <button class="red">Delete</button>
                </div>`;
            openSection.appendChild(articleEl);
            task.value = '';
            description.value = '';
            date.value = '';
        }
    }

    function openButtons(ev) {
        if (ev.target.tagName == 'BUTTON') {
            if (ev.target.textContent == 'Delete') {
                openSection.removeChild(ev.target.parentElement.parentElement);
            } else {
                let inProgEl = document.createElement('article');
                let art = (ev.target.parentElement.parentElement).children;
                inProgEl.innerHTML = `
                    <h3>${art[0].textContent}</h3>
                    <p>${art[1].textContent}</p>
                    <p>${art[2].textContent}</p>
                    <div class="flex">
                        <button class="red">Delete</button>
                        <button class="orange">Finish</button>
                    </div>`;
                progressSection.appendChild(inProgEl);
                openSection.removeChild(ev.target.parentElement.parentElement);
            }
        }
    }

    function progButtons(event) {
        if (event.target.tagName == 'BUTTON'){
            if (event.target.textContent == 'Delete') {
                progressSection.removeChild(event.target.parentElement.parentElement);
            } else {
                console.log('finish');
                let finishEl = document.createElement('article');
                let artic = (event.target.parentElement.parentElement).children;
                finishEl.innerHTML = `
                    <h3>${artic[0].textContent}</h3>
                    <p>${artic[1].textContent}</p>
                    <p>${artic[2].textContent}</p>`;
                finishSection.appendChild(finishEl);
                progressSection.removeChild(event.target.parentElement.parentElement);
            }
        }
    }
}