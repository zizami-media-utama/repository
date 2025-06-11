function simulateKeyPress(key) {
  const event = new KeyboardEvent('keydown', { key });
  textField.dispatchEvent(event);
}


let inputElement = document.getElementById('next-slide');
let keyPressEvent = new KeyboardEvent('keydown', { key: 'KeyRight' });
inputElement.dispatchEvent(keyPressEvent);