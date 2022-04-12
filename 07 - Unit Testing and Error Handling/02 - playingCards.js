function createCard(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }

    if (faces.includes(face) == false) {
        throw new Error('Invalid face ' + face);
        // return 'Error';
    }
    if (Object.keys(suits).includes(suit) == false) {
        throw new Error('Invalid suit ' + suit);
        // return 'Error';
    }

    const result = {
        face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit
        }
    }

    return result.toString();
}

console.log(createCard('A', 'S'));
console.log(createCard('4', 'C'));
// console.log(createCard('13', 'H'));
// console.log(createCard('2', 'Y'));