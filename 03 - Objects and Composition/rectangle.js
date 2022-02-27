function rectangle(width, heigth, color) {
    let obj = {
        width,
        heigth,
        color: color.charAt(0).toUpperCase() + color.slice(1),
        calcArea() {
            return this.width * this.heigth;
        }

    }
    return obj;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.heigth);
console.log(rect.color);
console.log(rect.calcArea());