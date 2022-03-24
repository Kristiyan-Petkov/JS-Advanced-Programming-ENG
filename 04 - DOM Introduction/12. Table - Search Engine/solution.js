function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let classCleaner = document.getElementsByTagName('tr');
      for (let row of classCleaner){
         row.className = '';
      }
      let searchTxt = document.getElementById('searchField').value;
      let itemsBase = document.getElementsByTagName('tr');
      let counter = 0;
      for (let item of itemsBase) {
         counter++;
         if (counter >= 2) {
            let match = item.textContent.match(searchTxt);
            if (match != null) {
               item.className = "select";
            }
         }
      }
   }
}