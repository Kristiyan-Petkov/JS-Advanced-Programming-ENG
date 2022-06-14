class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = ticketPrice;
        this.screenings = [];
        this.totalProfit = 0;
        this.totalTicketsSold = 0;
    }

    newScreening(date, hall, description) {
        const hallAndDateStr = `${hall}_${date}`;
        const hallAndDateObj = {
            hallAndDate: hallAndDateStr,
            hall: hall,
            date: date,
            description: description
        }
        if (this.screenings.find(a => a.hallAndDate === hallAndDateStr) == undefined) {
            this.screenings.push(hallAndDateObj);
            return `New screening of ${this.movieName} is added.`
        } else {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`)
        };
    }

    endScreening(date, hall, soldTickets) {
        const hallAndDateString = `${hall}_${date}`;
        const movieInArray = this.screenings.find(a => a.hallAndDate == hallAndDateString);
        if (movieInArray == undefined) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
        } else {
            let currentProfit = soldTickets * this.ticketPrice;
            this.totalProfit += currentProfit;
            this.totalTicketsSold += soldTickets;
            let result = `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`;
            let screeningIndex = this.screenings.indexOf(movieInArray);
            this.screenings.splice(screeningIndex, 1);
            return result;
        }
    }

    toString() {
        let result = `${this.movieName} full information:\nTotal profit: ${this.totalProfit}$\nSold Tickets: ${this.totalTicketsSold}`;
        if (this.screenings.length == 0){
            result += `\nNo more screenings!`;
        } else {
            result += `\nRemaining film screenings:`;
            let sorted = this.screenings.sort((a,b) => a.hall.localeCompare(b.hall));
            for (let screening of sorted){
                result += `\n${screening.hall} - ${screening.date} - ${screening.description}`
            }
        }
        return result;
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());


// let Movie = result;
//         let m = new Movie('Wonder Woman 1984', '10.00');
//         m.newScreening('October 2, 2020', 'IMAX 3D', `3D`);
//         m.newScreening('October 3, 2020', 'Main', `regular`);
//         m.newScreening('October 4, 2020', 'IMAX 3D', `3D`);
//         m.endScreening('October 2, 2020', 'IMAX 3D', 150);
//         m.endScreening('October 3, 2020', 'Main', 78);

//         let outputFirst = `Wonder Woman 1984 full information:
// Total profit: 2280$
// Sold Tickets: 228
// Remaining film screenings:
// IMAX 3D - October 4, 2020 - 3D`;
//         expect(m.toString()).to.be.equal(outputFirst, 'Incorrect output');
//         m.newScreening('October 4, 2020', '235', `regular`);
//         m.newScreening('October 5, 2020', 'Main', `regular`);
//         m.newScreening('October 3, 2020', '235', `regular`);
//         m.newScreening('October 4, 2020', 'Main', `regular`);
//         let outputSecond = `Wonder Woman 1984 full information:
// Total profit: 2280$
// Sold Tickets: 228
// Remaining film screenings:
// 235 - October 4, 2020 - regular
// 235 - October 3, 2020 - regular
// IMAX 3D - October 4, 2020 - 3D
// Main - October 5, 2020 - regular
// Main - October 4, 2020 - regular`;
//         expect(m.toString()).to.be.equal(outputSecond, 'Incorrect output');
