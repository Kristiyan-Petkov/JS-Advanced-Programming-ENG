class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        if (!this.possibleArticles[articleModel]) {
            return `This article model is not included in this gallery!`
        }
        let articleIsPresent = false;
        for (let i = 0; i < this.listOfArticles.length; i++) {
            if (this.listOfArticles[i].articleName == articleName && this.listOfArticles[i].articleModel == articleModel) {
                this.listOfArticles[i].quantity += quantity;
                articleIsPresent = true;
            }
        }
        if (!articleIsPresent) {
            this.listOfArticles.push({ articleModel, articleName, quantity });
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }
    inviteGuest(guestName, personality) {
        if (this.guests.findIndex((guest) => guest.guestName == guestName) != -1) {
            throw new Error(`${guestName} has already been invited.`)
        };
        let points = 50;
        if (personality === 'Vip') {
            points += 450;
        } else if (personality === 'Middle') {
            points += 200;
        }
        this.guests.push({ guestName, points, purchaseArticle: 0 });
        return `You have successfully invited ${guestName}!`
    }
    buyArticle(articleModel, articleName, guestName) {
        let articleIndex = this.listOfArticles.findIndex((article) => article.articleName == articleName)
        if (articleIndex == -1 || this.listOfArticles[articleIndex].articleModel != articleModel) {
            throw new Error('This article is not found.');
        }
        if (this.listOfArticles[articleIndex].quantity == 0) {
            return `The ${articleName} is not available.`;
        }
        let guestIndex = this.guests.findIndex((guest) => guest.guestName == guestName);
        if (guestIndex == -1) {
            return 'This guest is not invited.'
        }
        let pointsNeeded = this.possibleArticles[articleModel];
        let guestPoints = this.guests[guestIndex].points;
        if (pointsNeeded > guestPoints) {
            return 'You need more points to purchase the article.'
        } else {
            this.guests[guestIndex].points -= pointsNeeded;
            this.guests[guestIndex].purchaseArticle++;
            this.listOfArticles[articleIndex].quantity--;
            return `${guestName} successfully purchased the article worth ${pointsNeeded} points.`
        }
    }
    showGalleryInfo(criteria) {
        if (criteria == 'guest') {
            let finalMessageGuests = `Guests information:`;
            for (let i = 0; i < this.guests.length; i++) {
                finalMessageGuests += `\n${this.guests[i].guestName} - ${this.guests[i].purchaseArticle}`
            }
            return finalMessageGuests;
        } else if (criteria == 'article') {
            let finalMessageArticles = `Articles information:`;
            for (let i = 0; i < this.listOfArticles.length; i++) {
                finalMessageArticles += `\n${this.listOfArticles[i].articleModel} - ${this.listOfArticles[i].articleName} - ${this.listOfArticles[i].quantity}`
            }
            return finalMessageArticles;
        }
    }
}

// const artGallery = new ArtGallery('Curtis Mayfield'); 
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));


let art = new ArtGallery("Curtis Mayfield");

console.log(art.addArticle('picture', 'Mona Liza', 3));
console.log(art.addArticle('Item', 'Ancient vase', 2));
console.log(art.addArticle('picture', 'Mona Liza', 1));

console.log(art.inviteGuest('John', 'Vip'));
console.log(art.inviteGuest('Peter', 'Middle'));

console.log(art.buyArticle('picture', 'Mona Liza', 'John'))  //"John successfully purchased the article worth 200 points.");
console.log(art.buyArticle('item', 'Ancient vase', 'Peter')) //"Peter successfully purchased the article worth 250 points.");
console.log(art.buyArticle('item', 'Mona Liza', 'John')) //to.throw(Error,"This article is not found.");