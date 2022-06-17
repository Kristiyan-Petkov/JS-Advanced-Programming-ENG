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
            if (this.listOfArticles[i].articleName == articleName) {
                this.listOfArticles[i].quantity += quantity;
                articleIsPresent = true;
            } else {
                this.listOfArticles.push({ articleModel, articleName, quantity });
                return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
            }
        }
        if (!articleIsPresent) {
            this.listOfArticles.push({ articleModel, articleName, quantity });
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
        }
    }
    inviteGuest(guestName, personality) {

    }
    buyArticle(articleModel, articleName, guestName) {

    }
    showGalleryInfo(criteria) {

    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICture', 'Mona Liza', 1));
console.log(artGallery.addArticle('PICture', 'Debaliza', 1));