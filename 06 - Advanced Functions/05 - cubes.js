function cubes(area, vol, str) {
    const cubes = JSON.parse(str);
    const result = cubes.map(cube => ({
        area: area.apply(cube),
        volume: vol.apply(cube)
    }));
    return result;
}
console.log(cubes(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`));

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};