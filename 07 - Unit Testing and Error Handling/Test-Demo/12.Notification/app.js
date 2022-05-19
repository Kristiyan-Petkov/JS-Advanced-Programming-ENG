function notify(message) {
  const messageDiv = document.querySelector("#notification");
  console.log(messageDiv);
  messageDiv.textContent = message;
  messageDiv.style.display = "block";
  messageDiv.addEventListener('click', hideMessage);
  function hideMessage (){
    messageDiv.style.display = "none";
  }
}