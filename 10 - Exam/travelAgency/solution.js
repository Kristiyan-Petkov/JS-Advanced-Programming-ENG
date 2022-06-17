window.addEventListener('load', solution);

let personalDetails = [];
let listItemsNames = ['Full Name: ', 'Email: ', 'Phone Number: ', 'Address: ', 'Postal Code: ']

function solution() {
  const submitForm = document.querySelector("#form");
  submitForm.addEventListener('click', submit);
  const previewForm = document.querySelector("#information > div");
  previewForm.addEventListener('click', previewActions);
}

function previewActions(e) {
  if (e.target.value == 'Edit') {
    e.target.disabled = true;
    e.target.parentNode.children[1].disabled = true;
    let initialForm = document.querySelector("#form");
    initialForm.children[5].disabled = false;
    initialForm.children[0].children[1].value = personalDetails[0];
    initialForm.children[1].children[1].value = personalDetails[1];
    initialForm.children[2].children[1].value = personalDetails[2];
    initialForm.children[3].children[1].value = personalDetails[3];
    initialForm.children[4].children[1].value = personalDetails[4];
    let ulToEmpty = e.target.parentNode.parentNode.children[0].children;
    while (ulToEmpty[0]){
      ulToEmpty[0].remove();
    }
    personalDetails = [];
  }
  if (e.target.value == 'Continue') {
    let masterBlock = document.querySelector("#block");
    while (masterBlock.children.length > 0) {
      masterBlock.children[0].remove();
    }
    let finalMessage = 'Thank you for your reservaiton!';
    let newH3 = document.createElement('h3');
    newH3.textContent = finalMessage;
    masterBlock.appendChild(newH3); 
  }
}

function submit(e) {
  if (e.target.id == 'submitBTN') {
    const inputs = e.target.parentNode;
    let fullNameCheck = inputs.children[0].children[1].value;
    let emailCheck = inputs.children[1].children[1].value;

    if (fullNameCheck.length > 0 && emailCheck.length > 0) {
      personalDetails.push(fullNameCheck);
      personalDetails.push(emailCheck);
      personalDetails.push(inputs.children[2].children[1].value);
      personalDetails.push(inputs.children[3].children[1].value);
      personalDetails.push(inputs.children[4].children[1].value);
      inputs.children[5].disabled = true;
      let previewSection = document.querySelector("#information > div");
      previewSection.children[1].children[0].disabled = false;
      previewSection.children[1].children[1].disabled = false;
      let previewUlTarget = document.querySelector("#infoPreview");
      for (let i = 0; i < personalDetails.length; i++) {
        let newLi = document.createElement('li');
        newLi.textContent = `${listItemsNames[i]}${personalDetails[i]}`
        previewUlTarget.appendChild(newLi);
      }
    }

    inputs.children[0].children[1].value = '';
    inputs.children[1].children[1].value = '';
    inputs.children[2].children[1].value = '';
    inputs.children[3].children[1].value = '';
    inputs.children[4].children[1].value = '';
  }
}

