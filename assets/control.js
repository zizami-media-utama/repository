function simulateKeyPress(key) {
  const event = new KeyboardEvent('keydown', { key });
  textField.dispatchEvent(event);
}

let inputElement = document.getElementById('next-slide');

inputElement.addEventListener("click", ()=>{
    let inputElement = document.getElementById('impress');
    let keyPressEvent = new KeyboardEvent('keydown', { key: 'KeyRight' });
    inputElement.dispatchEvent(keyPressEvent);

})

