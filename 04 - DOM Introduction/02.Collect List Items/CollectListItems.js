function extractText() {
    const elements = document.getElementById('items').children;
    let result = [];
    for (const item of Array.from(elements)){
        result.push(item.textContent);
    }
    document.getElementById('result').textContent = result.join('\n')
}

// function extractText() {
//     let itemNodes =
//         document.querySelectorAll("ul#items li");
//     let textarea =
//         document.querySelector("#result");
//     for (let node of itemNodes) {
//         textarea.value += node.textContent + "\n";
//     }
// }