function simulateKeyPress(key) {
  const event = new KeyboardEvent('keydown', { key });
  textField.dispatchEvent(event);
}

let inputElement = document.getElementById('next-slide');

inputElement.addEventListener("click", ()=>{
    impress().next();

})

