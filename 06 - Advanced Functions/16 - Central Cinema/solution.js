function solve() {
    // SETTING UP MAIN TARGETS AND EVENT LISTENERS
    const addModule = document.querySelector('#container').children;
    const addBtn = addModule[3];
    addBtn.addEventListener('click', extract);
    const moviesList = document.querySelector("#movies > ul");
    moviesList.addEventListener('click', archive);
    const archiveModule = document.querySelector("#archive");
    archiveModule.addEventListener('click', clean);

    // HARDCODED below to see how mid-section should look in the browser
    // let li = document.createElement('li');
    // let span = document.createElement('span');
    // span.textContent = 'movieName';
    // li.appendChild(span);
    // let strong1 = document.createElement('strong');
    // strong1.textContent = 'hall';
    // li.appendChild(strong1);
    // let div = document.createElement('div');
    // let strong2 = document.createElement('strong');
    // strong2.textContent = (Number(11)).toFixed(2);
    // div.appendChild(strong2);
    // let input = document.createElement('input');
    // input.placeholder = "Tickets Sold";
    // div.appendChild(input);
    // let button = document.createElement('button');
    // button.textContent = "Archive";
    // div.appendChild(button);
    // li.appendChild(div);
    // moviesList.appendChild(li);

    // EXTRACTING FROM ADD MODULE AND POPULATING MOVIES MODULE
    function extract(e) {
        const movieName = addModule[0].value;
        const hall = addModule[1].value;
        const price = Number(addModule[2].value);
        if (movieName.length > 0 && hall.length > 0 && price / 1 != NaN) {
            let newItem = liBuilder(movieName, price, hall);
            moviesList.appendChild(newItem);
        }
    }

    // MANAGING MOVING MOVIES FROM ACTIVE LIST INTO ARCHIVE
    function archive(ev) {
        if (ev.target.tagName == 'BUTTON') {
            let sourceLi = ev.path[2];
            let tSold = Number(sourceLi.querySelector('div > input').value);
            if (tSold > 0) {
                //migrate to Archive
                let mName = sourceLi.querySelector('span').textContent;
                let tPrice = Number(sourceLi.querySelector('div > strong').textContent);
                let totalSales = tSold * tPrice;
                let archiveLi = liBuilder(mName, totalSales);
                let archiveUl = archiveModule.querySelector('ul');
                archiveUl.appendChild(archiveLi);
                // remove from active movies list
                moviesList.removeChild(ev.target.parentNode.parentNode);
            }
        }


    }

    // MANAGING ARCHIVE BUTTONS 'DELETE' AND 'CLEAR'
    function clean(e) {
        if (e.target.tagName == 'BUTTON') {
            if (e.target.textContent == 'Delete') {
                e.target.parentNode.parentNode.removeChild(e.target.parentNode);
            } else {
                let fullArchiveList = e.target.parentNode.children[1].children;
                while (fullArchiveList.length > 0) {
                    e.target.parentNode.children[1].removeChild(fullArchiveList[0]);
                }
            }
        }
    }

    // BUILDING 'LI' ELEMENTS FOR FUNCITONS 'extract' and 'archive'
    function liBuilder(name, pr, ha) {
        if (ha == undefined) {
            //building LI for archive
            let liArch = document.createElement('li');
            let spanArch = document.createElement('span');
            spanArch.textContent = name;
            liArch.appendChild(spanArch);
            let strongArch = document.createElement('strong');
            strongArch.textContent = pr;
            liArch.appendChild(strongArch);
            let buttonArch = document.createElement('button');
            buttonArch.textContent = "Delete";
            liArch.appendChild(buttonArch);
            return liArch;
        } else {
            //building LI for extract
            let li = document.createElement('li');
            let span = document.createElement('span');
            span.textContent = name;
            li.appendChild(span);
            let strong1 = document.createElement('strong');
            strong1.textContent = ha;
            li.appendChild(strong1);
            let div = document.createElement('div');
            let strong2 = document.createElement('strong');
            strong2.textContent = (Number(pr)).toFixed(2);
            div.appendChild(strong2);
            let input = document.createElement('input');
            input.placeholder = "Tickets Sold";
            div.appendChild(input);
            let button = document.createElement('button');
            button.textContent = "Archive";
            div.appendChild(button);
            li.appendChild(div);

            return li;
        }
    }
}