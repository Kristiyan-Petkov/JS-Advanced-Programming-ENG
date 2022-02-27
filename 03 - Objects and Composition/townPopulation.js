function townPopulation(towns){
    let populations = {};
    for (let town of towns){
        let [city, population] = town.split(' <-> ');
        if (populations[city] == undefined){
            populations[city] = Number (population);
        } else {
            populations[city] += Number (population);
        }  
    }
    let finalPopulations = Object.entries(populations);
    for (let finalPop of finalPopulations){
        console.log(finalPop.join(' : '));
    }
}
townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
    'New York <-> 10000000'])