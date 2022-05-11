const BODY = document.querySelector('body');
const TEXTAREA_INPUT = document.createElement('textarea');
const CONTAINER = document.createElement('div');
const KEYBOARD = document.createElement('div');
const keyboardKeys = document.createElement('div');
let row;
let item;

let keysArr = [];

const createRow = () => {
   row = document.createElement('div');
   row.classList.add('row');
};

createRow();

class KeyName {
   constructor(key) {
      this.key = key;
      this.className = 'keys';
   }
}

let keys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&#5130', '&#9660', '&#5125', 'Ctrl'];

let keysRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#5130', '&#9660', '&#5125', 'Ctrl'];

let otherSymbolsEn = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '&#9650', 'Shift', 'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&#5130', '&#9660', '&#5125', 'Ctrl'];

let otherSymbolsRu = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '&#9650', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#5130', '&#9660', '&#5125', 'Ctrl'];

function longKey(key) {
   return item.classList.add(`${key}-key`);
}

for (let i = 0; i < keys.length; i += 1) {
   item = document.createElement('div');
   let keyDetails = new KeyName(keys[i]);
   item.classList.add(keyDetails.className);
   item.innerHTML = keyDetails.key;
   item.setAttribute('keyName', item.innerHTML.toUpperCase());
   item.setAttribute('lowerName', item.innerHTML.toLowerCase());
   item.setAttribute('keyCode', `Key${item.innerHTML.toUpperCase()}`);

   keysArr.push(item);
   row.append(item);
   if (keys[i] === 'Backspace') {
      keyboardKeys.append(row);
      createRow();
   } else if (keys[i] === '\\') {
      keyboardKeys.append(row);
      createRow();
   } else if (keys[i] === 'Enter') {
      keyboardKeys.append(row);
      createRow();
   } else if (keys[i] === 'Shift' && i === 53) {
      item.classList.add('shift-key');
      item.classList.add('shift-right');
      keyboardKeys.append(row);
      createRow();
   } else if (keys[i] === 'Ctrl' && i === 62) {
      item.classList.add('ctrl-key');
      item.classList.add('ctrl-right');
      keyboardKeys.append(row);
      createRow();
   }

   if (keys[i] === 'Shift' && i !== 53) {
      item.classList.add('shift-key');
      item.classList.add('shift-left');
   }
   if (keys[i] === 'Ctrl' && i !== 62) {
      item.classList.add('ctrl-key');
      item.classList.add('ctrl-left');
   }
   if (keys[i] === 'Alt' && i !== 58) {
      item.classList.add('alt-left');
   }
   if (keys[i] === 'Alt' && i === 58) {
      item.classList.add('alt-key');
      item.classList.add('alt-right');
   }

   if (keys[i].length > 1) {
      longKey(keys[i].toLowerCase().replace(/\s/g, ''));
   }

   if (keys[i] === '\\') {
      item.classList.add('slash-key');
   }
   if (keys[i] === '') {
      item.classList.add('space-key');
   }
}

let lang = localStorage.getItem('lang');

const keyDownEvent = (e) => {
   lang = localStorage.getItem('lang');
   let changedLang = lang;
   if (e.ctrlKey && e.altKey) {
      for (let i = 0; i < keysArr.length; i++) {
         if (keysArr[i].innerHTML === keys[i]) {
            keysArr[i].innerHTML = keysRu[i];
         } else {
            keysArr[i].innerHTML = keys[i];
         }
      }
      if (lang === 'en') {
         lang = 'ru';
         changedLang = lang;
         console.log(lang);
         localStorage.setItem('lang', changedLang);
      } else {
         lang = 'en';
         changedLang = lang;
         console.log(lang);
         localStorage.setItem('lang', changedLang);
      }
   }
   for (let i = 0; i < keysArr.length; i++) {
      let value = keysArr[i].innerHTML;
      if (e.key === keysArr[i].getAttribute('keyName') || e.key === keysArr[i].getAttribute('lowerName')) {
         e.preventDefault();
         keysArr[i].classList.add('active');
         keysArr[i].classList.remove('remove');
         if (keysArr[28].classList.contains('active')) {
            TEXTAREA_INPUT.value += value.toUpperCase();
         } else {
            TEXTAREA_INPUT.value += value;
         }
      }

      if (e.code === keysArr[i].innerHTML) {
         keysArr[i].classList.add('active');
      }

      if (e.code === 'ShiftLeft' && keysArr[i].classList.contains('shift-left')) {
         keysArr[i].classList.add('active');
         keysArr.forEach((key, index) => {
            let keyIn = key;
            if (changedLang === 'en') {
               keyIn.innerHTML = otherSymbolsEn[index];
               if (keyIn.innerHTML.length < 2) {
                  keyIn.innerHTML = keyIn.innerHTML.toUpperCase();
               }
            } else {
               keyIn.innerHTML = otherSymbolsRu[index];
               if (keyIn.innerHTML.length < 2) {
                  keyIn.innerHTML = keyIn.innerHTML.toUpperCase();
               }
            }
         });
      }
      if (e.code === 'ShiftRight' && keysArr[i].classList.contains('shift-right')) {
         keysArr[i].classList.add('active');
         keysArr.forEach((key, index) => {
            let keyIn = key;
            if (changedLang === 'en') {
               keyIn.innerHTML = otherSymbolsEn[index];
               if (keyIn.innerHTML.length < 2) {
                  keyIn.innerHTML = keyIn.innerHTML.toUpperCase();
               }
            } else {
               keyIn.innerHTML = otherSymbolsRu[index];
               if (keyIn.innerHTML.length < 2) {
                  keyIn.innerHTML = keyIn.innerHTML.toUpperCase();
               }
            }
         });
      }
      if (e.code === 'ControlLeft' && keysArr[i].classList.contains('ctrl-left')) {
         keysArr[i].classList.add('active');
      }
      if (e.code === 'Tab' && keysArr[i].classList.contains('tab-key')) {
         e.preventDefault();
         keysArr[i].classList.add('active');
         TEXTAREA_INPUT.value += '    ';
      }
      if (e.code === 'Enter' && keysArr[i].classList.contains('enter-key')) {
         TEXTAREA_INPUT.value += '\n';
      }
      if (e.code === 'ControlRight' && keysArr[i].classList.contains('ctrl-right')) {
         keysArr[i].classList.add('active');
      }
      if (e.code === 'AltLeft' && keysArr[i].classList.contains('alt-left')) {
         keysArr[i].classList.add('active');
      }
      if (e.code === 'AltRight' && keysArr[i].classList.contains('alt-right')) {
         keysArr[i].classList.add('active');
      }
      if (e.code === 'MetaLeft' && keysArr[i].classList.contains('win-key')) {
         keysArr[i].classList.add('active');
      }

      if (e.code === 'CapsLock' && keysArr[i].classList.contains('capslock-key')) {
         keysArr[i].classList.toggle('active');
         if (keysArr[i].classList.contains('active')) {
            keysArr.forEach((key) => {
               let keyIn = key;
               if (keyIn.innerHTML.length < 2) {
                  keyIn.innerHTML = keyIn.innerHTML.toUpperCase();
               }
            });
         } else {
            keysArr.forEach((key) => {
               let keyIn = key;
               if (keyIn.innerHTML.length < 2) {
                  keyIn.innerHTML = keyIn.innerHTML.toLowerCase();
               }
            });
         }
      }

      if (e.key === 'ArrowUp' && keysArr[i].innerHTML === '▲') {
         keysArr[i].classList.add('active');
      }

      if (e.key === 'ArrowLeft' && keysArr[i].innerHTML === 'ᐊ') {
         keysArr[i].classList.add('active');
      }

      if (e.key === 'ArrowDown' && keysArr[i].innerHTML === '▼') {
         keysArr[i].classList.add('active');
      }

      if (e.key === 'ArrowRight' && keysArr[i].innerHTML === 'ᐅ') {
         keysArr[i].classList.add('active');
      }
   }
};

const keyUpEvent = (e) => {
   lang = localStorage.getItem('lang');
   let changedLang = lang;
   if (e.ctrlKey && e.altKey) {
      for (let i = 0; i < keysArr.length; i++) {
         if (keysArr[i].innerHTML === keys[i]) {
            keysArr[i].innerHTML = keysRu[i];
            lang = 'en';
            changedLang = lang;
            localStorage.setItem('lang', changedLang);
         } else {
            keysArr[i].innerHTML = keys[i];
            lang = 'ru';
            changedLang = lang;
            localStorage.setItem('lang', changedLang);
         }
      }
   }
   for (let i = 0; i < keysArr.length; i++) {
      if (e.key === keysArr[i].getAttribute('keyName') || e.key === keysArr[i].getAttribute('lowerName') || e.code === keysArr[i].innerHTML || e.code === keysArr[i].getAttribute('keyCode')) {
         keysArr[i].classList.remove('active');
         keysArr[i].classList.remove('remove');
      }

      if (e.code === 'ShiftLeft' && keysArr[i].classList.contains('shift-left')) {
         keysArr[i].classList.remove('active');
         keysArr.forEach((key, index) => {
            let keyIn = key;
            if (changedLang === 'en') {
               keyIn.innerHTML = keys[index];
               if (keyIn.innerHTML.length < 2) {
                  keyIn.innerHTML = keyIn.innerHTML.toLowerCase();
               }
            } else {
               keyIn.innerHTML = keysRu[index];
               if (keyIn.innerHTML.length < 2) {
                  keyIn.innerHTML = keyIn.innerHTML.toLowerCase();
               }
            }
         });
      }
      if (e.code === 'ShiftRight' && keysArr[i].classList.contains('shift-right')) {
         keysArr[i].classList.remove('active');
         keysArr.forEach((key, index) => {
            let keyIn = key;
            if (changedLang === 'en') {
               keyIn.innerHTML = keys[index];
               if (keyIn.innerHTML.length < 2) {
                  keyIn.innerHTML = keyIn.innerHTML.toLowerCase();
               }
            } else {
               keyIn.innerHTML = keysRu[index];
               if (keyIn.innerHTML.length < 2) {
                  keyIn.innerHTML = keyIn.innerHTML.toLowerCase();
               }
            }
         });
      }
      if (e.code === keysArr[i].innerHTML) {
         keysArr[i].classList.remove('active');
      }

      if (e.code === 'ControlLeft' && keysArr[i].classList.contains('ctrl-left')) {
         keysArr[i].classList.remove('active');
      }
      if (e.code === 'Tab' && keysArr[i].classList.contains('tab-key')) {
         keysArr[i].classList.remove('active');
      }
      if (e.code === 'ControlRight' && keysArr[i].classList.contains('ctrl-right')) {
         keysArr[i].classList.remove('active');
      }
      if (e.code === 'AltLeft' && keysArr[i].classList.contains('alt-left')) {
         keysArr[i].classList.remove('active');
      }
      if (e.code === 'AltRight' && keysArr[i].classList.contains('alt-right')) {
         keysArr[i].classList.remove('active');
      }
      if (e.code === 'MetaLeft' && keysArr[i].classList.contains('win-key')) {
         keysArr[i].classList.remove('active');
      }

      if (e.key === 'ArrowUp' && keysArr[i].innerHTML === '▲') {
         keysArr[i].classList.remove('active');
      }

      if (e.key === 'ArrowLeft' && keysArr[i].innerHTML === 'ᐊ') {
         keysArr[i].classList.remove('active');
      }

      if (e.key === 'ArrowDown' && keysArr[i].innerHTML === '▼') {
         keysArr[i].classList.remove('active');
      }

      if (e.key === 'ArrowRight' && keysArr[i].innerHTML === 'ᐅ') {
         keysArr[i].classList.remove('active');
      }
   }
};

const isCapsLock = () => {
   if (keysArr[28].classList.contains('active')) {
      return true;
   }
   return false;
};

let counter = 0;

keysArr.forEach(key => {
   key.addEventListener('mousedown', () => {
      key.classList.add('active');
      console.log(lang);
      if (key.innerHTML === 'Shift') {
         for (let i = 0; i < keysArr.length; i++) {
            let keyIn = keysArr[i];
            if (lang === 'en') {
               keyIn.innerHTML = otherSymbolsEn[i];
               if (keyIn.innerHTML.length < 2) {
                  keyIn.innerHTML = keyIn.innerHTML.toUpperCase();
               }
            } else {
               keyIn.innerHTML = otherSymbolsRu[i];
               if (keyIn.innerHTML.length < 2) {
                  keyIn.innerHTML = keyIn.innerHTML.toUpperCase();
               }
            }
         }
      }
   });
   key.addEventListener('mouseup', () => {
      key.classList.remove('active');
      if (key.innerHTML === 'Shift') {
         keysArr.forEach((keyMouse, index) => {
            let keyIn = keyMouse;
            if (lang === 'en') {
               keyIn.innerHTML = keys[index];
               if (keyIn.innerHTML.length < 2) {
                  keyIn.innerHTML = keyIn.innerHTML.toLowerCase();
               }
            } else {
               keyIn.innerHTML = keysRu[index];
               if (keyIn.innerHTML.length < 2) {
                  keyIn.innerHTML = keyIn.innerHTML.toLowerCase();
               }
            }
         });
      }
   });
   key.addEventListener('click', () => {
      let value = key.innerHTML;
      switch (value) {
      case 'Backspace':
         value = TEXTAREA_INPUT.value.substring(0, TEXTAREA_INPUT.value.length - 1);
         TEXTAREA_INPUT.value = value;

         break;
      case 'Caps Lock':
         counter += 1;
         if (counter % 2 !== 0) {
            key.classList.add('active');
         } else {
            key.classList.remove('active');
         }
         value = '';
         TEXTAREA_INPUT.value += value;

         if (key.classList.contains('active')) {
            keysArr.forEach((keyIn) => {
               let keyClick = keyIn;
               if (keyClick.innerHTML.length < 2) {
                  keyClick.innerHTML = keyIn.innerHTML.toUpperCase();
               }
            });
         } else {
            keysArr.forEach((keyIn) => {
               let keyClick = keyIn;
               if (keyClick.innerHTML.length < 2) {
                  keyClick.innerHTML = keyClick.innerHTML.toLowerCase();
               }
            });
         }

         break;

      case 'Enter':
         value = '\n';
         TEXTAREA_INPUT.value += value;

         break;
      case 'Space':
         value = ' ';
         TEXTAREA_INPUT.value += value;

         break;
      case 'Tab':
         value = '    ';
         TEXTAREA_INPUT.value += value;

         break;
      case 'Shift':
         value = '';
         TEXTAREA_INPUT.value += value;
         break;
      case 'Ctrl':
         value = '';
         TEXTAREA_INPUT.value += value;
         break;
      case 'Win':
         value = '';
         TEXTAREA_INPUT.value += value;
         break;
      case 'Alt':
         value = '';
         TEXTAREA_INPUT.value += value;
         break;
      default:
         value = key.innerHTML.toLowerCase();

         value = isCapsLock() ? key.innerHTML.toUpperCase() : key.innerHTML.toLowerCase();
         TEXTAREA_INPUT.value += value;

         break;
      }
   });
});

function setLocalStorage() {
   lang = localStorage.getItem('lang');
   localStorage.setItem('lang', lang);
}

function getLocalStorage() {
   const language = localStorage.getItem('lang');
   if (language === 'en') {
      for (let i = 0; i < keysArr.length; i++) {
         keysArr[i].innerHTML = keys[i];
      }
   } else {
      for (let i = 0; i < keysArr.length; i++) {
         keysArr[i].innerHTML = keysRu[i];
      }
   }
}
window.addEventListener('load', getLocalStorage);

window.addEventListener('beforeunload', setLocalStorage);

CONTAINER.classList.add('container');
TEXTAREA_INPUT.cols = 100;
TEXTAREA_INPUT.rows = 10;
KEYBOARD.classList.add('keyboard-wrapper');
keyboardKeys.classList.add('keyboard-keys');

BODY.append(CONTAINER);
CONTAINER.append(TEXTAREA_INPUT);
CONTAINER.append(KEYBOARD);
KEYBOARD.append(keyboardKeys);

window.addEventListener('keydown', keyDownEvent);
window.addEventListener('keyup', keyUpEvent);
