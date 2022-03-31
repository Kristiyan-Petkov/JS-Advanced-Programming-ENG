function lockedProfile() {
    document.querySelector('main').addEventListener('click', showMore);

    function showMore (e){
        if (e.target.tagName == 'BUTTON'){
            let explore = e.target.parentElement.querySelector('input[value="unlock"]').checked;
            let hiddenPart = e.target.parentElement.querySelector('div');
            let buttonTxt = e.target.parentElement.querySelector('button');
            if (hiddenPart.style.display != 'inline' && explore){
                hiddenPart.style.display = 'inline';
                buttonTxt.textContent = 'Hide it';
            } else {
                if (explore){
                    hiddenPart.style.display = 'none';
                    buttonTxt.textContent = 'Show more';
                }
            }
        }
    }
}