function solve() {
   const addButtons = Array.from(document.getElementsByClassName('add-product'));
   for (let addButton of addButtons) {
      addButton.addEventListener('click', basketAdd);
   }
   const checkOutButton = document.getElementsByClassName('checkout')[0];
   checkOutButton.addEventListener('click', checkOut);

   let basketSelectBox = document.querySelector("body > div > textarea");

   function basketAdd(ev) {
      let productNameTarget = ev.target.parentNode.previousElementSibling;
      let productName = Array.from(productNameTarget.getElementsByTagName('div'))[0].textContent;
      let productPrice = Number(ev.target.parentNode.nextElementSibling.textContent);
      basketSelectBox.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
   }

   function checkOut() {
      let itemsPrices = [];
      let totalPrice = Number.MIN_SAFE_INTEGER;
      let itemsList = [];
      let items = basketSelectBox.textContent.split('\n');
      for (let item of items) {
         let itemPrice = Number(item.split(' ')[3]);
         itemsPrices.push(itemPrice);
         let itemName = item.split(' ')[1];
         itemsList.push(itemName)
      }
      itemsPrices.pop();
      itemsList.pop();
      totalPrice = itemsPrices.reduce((a, b) => a + b);
      let finalItemsList = Array.from(new Set(itemsList));
      basketSelectBox.textContent += `You bought ${finalItemsList.join(', ')} for ${totalPrice.toFixed(2)}.`;
      
      let buttons = document.getElementsByTagName('button');
      for (let button of buttons) {
         button.disabled = 'true'
      }
   }
}