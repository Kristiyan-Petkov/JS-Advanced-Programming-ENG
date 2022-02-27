function townsToJSON(arr) {
    arr.shift();
    let towns = [];
    for (let item of arr){
        let [na, town, latitude, longitude] = item.split('|');
        latitude = Number (latitude).toFixed(2);
        longitude = Number (longitude).toFixed(2);
        let obj = {
            Town: town.trim(),
            Latitude: Number (latitude.trim()),
            Longitude: Number (longitude.trim()),
        }
        
        towns.push(obj)
    }
    return JSON.stringify(towns);
}
townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])