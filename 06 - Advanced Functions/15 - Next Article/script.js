function getArticleGenerator(articles) {
    let counter = 0;
    const div = document.querySelector("#content");
    function showNext(){
        if (counter < articles.length){
            const article = document.createElement('article');
            article.textContent = articles[counter];
            div.appendChild(article);
            console.log(articles[counter]);
            counter++
        }
    }
    return showNext
}
