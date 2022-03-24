function toggle() {
    if (document.getElementById('extra').style.display == 'block') {
        document.getElementById('extra').style.display = 'none';
        document.querySelector("#accordion > div.head > span").textContent = 'More'
    } else {
        document.getElementById('extra').style.display = 'block';
        document.querySelector("#accordion > div.head > span").textContent = 'Less'
    }
}