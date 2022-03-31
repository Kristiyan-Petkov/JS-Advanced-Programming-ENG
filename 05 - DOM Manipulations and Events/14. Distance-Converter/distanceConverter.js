function attachEventsListeners() {
    const btn = document.querySelector("#convert")
    btn.addEventListener('click', conveter);

    const ratios = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    function conveter(e){
        let initialValue = document.querySelector("#inputDistance").value;
        let initialUnit = document.querySelector("#inputUnits").value;
        let valueInM = Number (initialValue) * ratios[initialUnit];
        let targetUnit = document.querySelector("#outputUnits").value;
        let result = valueInM / ratios[targetUnit];
        document.querySelector("#outputDistance").value = result;
    }
}