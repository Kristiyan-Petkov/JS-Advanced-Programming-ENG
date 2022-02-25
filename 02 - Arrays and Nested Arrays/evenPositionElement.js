function evenPositionElement(arr){
    console.log(arr.filter(a => arr.indexOf(a) % 2 === 0).join(' '))
}
evenPositionElement(['20', '30', '40', '50', '60'])