function objectFactory(library, orders){
    let products = [];
    for (let order of orders){
        let name = order['template']['name']
        let parts = order['parts'];
        const product = {
            name,
        }
        for (let i = 0; i < parts.length; i++){
            let part = parts[i];
            product[part] = library[part];
        }
        products.push(product);
    }
    return products;
}
objectFactory({
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
}, 
[{template: { name: 'ACME Printer'},
    parts: ['print']
  },
  {
    template: { name: 'Initech Scanner'},
    parts: ['scan']
  },
  {
    template: { name: 'ComTron Copier'},
    parts: ['scan', 'print']
  },
  {
    template: { name: 'BoomBox Stereo'},
    parts: ['play']
  }
])