function create(words) {
   let parent = document.getElementById('content');

   for (let word of words){
      let div = document.createElement('div');
      let para = document.createElement('p');
      para.textContent = word;
      para.style.display = 'none';
      div.appendChild(para);
      parent.appendChild(div);
   }
   
   parent.addEventListener('click', show)

   function show(ev){
      let element = ev.target.getElementsByTagName('p')[0];
      element.style.display = '';
   }
}