function heroicInventory(arr) {
    let heroesRegistry = [];

    for (let heroe of arr) {
        let [name, level, items] = heroe.split(' / ');
        let hero = {
            name,
            level: Number(level),
            items: items ? items.split(', ') : []
        }
        heroesRegistry.push(hero)
    }
    console.log(JSON.stringify(heroesRegistry));
}
heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1'])