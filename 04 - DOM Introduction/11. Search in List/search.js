function search() {
   let searchText = document.getElementById('searchText').value;
   let itemsBase = document.getElementsByTagName('li');
   let counter = 0;
   for (let item of itemsBase){
      let itemTxt = item.textContent;
      let match = itemTxt.match(searchText);
      if (match != null){
         item.style.fontWeight = 'bold';
         item.style.textDecoration = 'underline';
         counter++;
      }
   }
   let result = `${counter} matches found`;
   document.getElementById('result').textContent = result;
}
