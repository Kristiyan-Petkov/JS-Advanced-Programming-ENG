function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMove);
    let output = document.getElementById('result');

    function onMove(ev) {
        const box = ev.target;
        // console.log(ev.offsetX, box.offsetWidth);
        // gradient.removeEventListener('mousemove', onMove);
        let percentage = (ev.offsetX / box.clientWidth) * 100;
        output.textContent = Math.floor(percentage) + '%';
    }
}