function tickets(arr, str) {
    const newArr = [];
    class Ticket {
        constructor(destination, price, status) {
            Object.assign(this,
                {
                    destination,
                    price,
                    status
                })
        }
    }
    for (let ticket of arr) {
        let details = ticket.split('|');
        newArr.push(new Ticket(...details))
    }

    const finalArr = Array.from(newArr);

    if (str != 'price') {
        finalArr.sort((a, b) => a[str].localeCompare(b[str]));
    } else {
        finalArr.sort((a, b) => Number (a[str]) - Number (b[str]));
    }

    for (let element of finalArr) {
        let priceStr = element.price;
        element.price = Number (priceStr);
    }

    return finalArr;

}
console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|available',
    'Philadelphia|132.20|departed',
    'Chicago|140.20|available',
    'Dallas|144.60|sold',
    'New York City|206.20|sold',
    'New York City|240.20|departed',
    'New York City|305.20|departed'],
    'price'));
