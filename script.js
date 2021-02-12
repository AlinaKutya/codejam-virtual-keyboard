window.onload = function load() {
  const keys = {
    Backquote: {
      latin: '`', latinShifted: '~', latinCShifted: '~', russian: 'ё', russianShifted: 'Ё', russianCShifted: 'ё',
    },
    Digit1: {
      latin: '1', latinShifted: '!', latinCShifted: '!', russian: '1', russianShifted: '!', russianCShifted: '!',
    },
    Digit2: {
      latin: '2', latinShifted: '@', latinCShifted: '@', russian: '2', russianShifted: '"', russianCShifted: '"',
    },
    Digit3: {
      latin: '3', latinShifted: '#', latinCShifted: '#', russian: '3', russianShifted: '№', russianCShifted: '№',
    },
    Digit4: {
      latin: '4', latinShifted: '$', latinCShifted: '$', russian: '4', russianShifted: ';', russianCShifted: ';',
    },
    Digit5: {
      latin: '5', latinShifted: '%', latinCShifted: '%', russian: '5', russianShifted: '%', russianCShifted: '%',
    },
    Digit6: {
      latin: '6', latinShifted: '^', latinCShifted: '^', russian: '6', russianShifted: ':', russianCShifted: ':',
    },
    Digit7: {
      latin: '7', latinShifted: '&', latinCShifted: '&', russian: '7', russianUpper: '7', russianShifted: '?', russianCShifted: '?',
    },
    Digit8: {
      latin: '8', latinShifted: '*', latinCShifted: '*', russian: '8', russianShifted: '*', russianCShifted: '*',
    },
    Digit9: {
      latin: '9', latinShifted: '(', latinCShifted: '(', russian: '9', russianShifted: '(', russianCShifted: '(',
    },
    Digit0: {
      latin: '0', latinShifted: ')', latinCShifted: ')', russian: '0', russianShifted: ')', russianCShifted: ')',
    },
    Minus: {
      latin: '-', latinShifted: '_', latinCShifted: '_', russian: '-', russianShifted: '_', russianCShifted: '_',
    },
    Equal: {
      latin: '=', latinShifted: '+', latinCShifted: '+', russian: '=', russianShifted: '+', russianCShifted: '+',
    },
    Backspace: {
      latin: 'Backspace', latinShifted: 'Backspace', latinCShifted: 'Backspace', russian: 'Backspace', russianShifted: 'Backspace', russianCShifted: 'Backspace',
    },
    Tab: {
      latin: 'Tab', latinShifted: 'Tab', latinCShifted: 'Tab', russian: 'Tab', russianShifted: 'Tab', russianCShifted: 'Tab',
    },
    KeyQ: {
      latin: 'q', latinShifted: 'Q', latinCShifted: 'q', russian: 'й', russianShifted: 'Й', russianCShifted: 'й',
    },
    KeyW: {
      latin: 'w', latinShifted: 'W', latinCShifted: 'w', russian: 'ц', russianShifted: 'Ц', russianCShifted: 'ц',
    },
    KeyE: {
      latin: 'e', latinShifted: 'E', latinCShifted: 'e', russian: 'у', russianShifted: 'У', russianCShifted: 'у',
    },
    KeyR: {
      latin: 'r', latinShifted: 'R', latinCShifted: 'r', russian: 'к', russianShifted: 'К', russianCShifted: 'к',
    },
    KeyT: {
      latin: 't', latinShifted: 'T', latinCShifted: 't', russian: 'е', russianShifted: 'Е', russianCShifted: 'е',
    },
    KeyY: {
      latin: 'y', latinShifted: 'Y', latinCShifted: 'y', russian: 'н', russianShifted: 'Н', russianCShifted: 'н',
    },
    KeyU: {
      latin: 'u', latinShifted: 'U', latinCShifted: 'u', russian: 'г', russianShifted: 'Г', russianCShifted: 'г',
    },
    KeyI: {
      latin: 'i', latinShifted: 'I', latinCShifted: 'i', russian: 'ш', russianShifted: 'Ш', russianCShifted: 'ш',
    },
    KeyO: {
      latin: 'o', latinShifted: 'O', latinCShifted: 'o', russian: 'щ', russianShifted: 'Щ', russianCShifted: 'щ',
    },
    KeyP: {
      latin: 'p', latinShifted: 'P', latinCShifted: 'p', russian: 'з', russianShifted: 'З', russianCShifted: 'з',
    },
    BracketLeft: {
      latin: '[', latinShifted: '{', latinCShifted: '{', russian: 'х', russianShifted: 'Х', russianCShifted: 'х',
    },
    BracketRight: {
      latin: ']', latinShifted: '}', latinCShifted: '}', russian: 'ъ', russianShifted: 'Ъ', russianCShifted: 'ъ',
    },
    Backslash: {
      latin: '\\', latinShifted: '|', latinCShifted: '|', russian: '\\', russianShifted: '/', russianCShifted: '/',
    },
    CapsLock: {
      latin: 'CapsLock', latinShifted: 'CapsLock', latinCShifted: 'CapsLock', russian: 'CapsLock', russianShifted: 'CapsLock', russianCShifted: 'CapsLock',
    },
    KeyA: {
      latin: 'a', latinShifted: 'A', latinCShifted: 'A', russian: 'ф', russianShifted: 'Ф', russianCShifted: 'ф',
    },
    KeyS: {
      latin: 's', latinShifted: 'S', latinCShifted: 's', russian: 'ы', russianShifted: 'Ы', russianCShifted: 'ы',
    },
    KeyD: {
      latin: 'd', latinShifted: 'D', latinCShifted: 'd', russian: 'в', russianShifted: 'В', russianCShifted: 'в',
    },
    KeyF: {
      latin: 'f', latinShifted: 'F', latinCShifted: 'f', russian: 'а', russianShifted: 'А', russianCShifted: 'а',
    },
    KeyG: {
      latin: 'g', latinShifted: 'G', latinCShifted: 'g', russian: 'п', russianShifted: 'П', russianCShifted: 'п',
    },
    KeyH: {
      latin: 'h', latinShifted: 'H', latinCShifted: 'h', russian: 'р', russianShifted: 'Р', russianCShifted: 'р',
    },
    KeyJ: {
      latin: 'j', latinShifted: 'J', latinCShifted: 'j', russian: 'о', russianShifted: 'О', russianCShifted: 'о',
    },
    KeyK: {
      latin: 'k', latinShifted: 'K', latinCShifted: 'k', russian: 'л', russianShifted: 'Л', russianCShifted: 'л',
    },
    KeyL: {
      latin: 'l', latinShifted: 'L', latinCShifted: 'l', russian: 'д', russianShifted: 'Д', russianCShifted: 'д',
    },
    Semicolon: {
      latin: ';', latinShifted: ':', latinCShifted: ':', russian: 'ж', russianShifted: 'Ж', russianCShifted: 'ж',
    },
    Quote: {
      latin: "'", latinShifted: '"', latinCShifted: '"', russian: 'э', russianShifted: 'Э', russianCShifted: 'э',
    },
    Enter: {
      latin: 'Enter', latinShifted: 'Enter', latinCShifted: 'Enter', russian: 'Enter', russianShifted: 'Enter', russianCShifted: 'Enter',
    },
    ShiftLeft: {
      latin: 'Shift', latinUpper: 'Shift', latinShifted: 'Shift', latinCShifted: 'Shift', russian: 'Shift', russianUpper: 'Shift', russianShifted: 'Shift', russianCShifted: 'Shift',
    },
    KeyZ: {
      latin: 'z', latinShifted: 'Z', latinCShifted: 'z', russian: 'я', russianShifted: 'Я', russianCShifted: 'я',
    },
    KeyX: {
      latin: 'x', latinShifted: 'X', latinCShifted: 'x', russian: 'ч', russianShifted: 'Ч', russianCShifted: 'ч',
    },
    KeyC: {
      latin: 'c', latinShifted: 'C', latinCShifted: 'c', russian: 'с', russianShifted: 'С', russianCShifted: 'с',
    },
    KeyV: {
      latin: 'v', latinShifted: 'V', latinCShifted: 'v', russian: 'м', russianShifted: 'М', russianCShifted: 'м',
    },
    KeyB: {
      latin: 'b', latinShifted: 'B', latinCShifted: 'b', russian: 'и', russianShifted: 'И', russianCShifted: 'и',
    },
    KeyN: {
      latin: 'n', latinShifted: 'N', latinCShifted: 'n', russian: 'т', russianShifted: 'Т', russianCShifted: 'т',
    },
    KeyM: {
      latin: 'm', latinShifted: 'M', latinCShifted: 'm', russian: 'ь', russianShifted: 'Ь', russianCShifted: 'ь',
    },
    Comma: {
      latin: ',', latinShifted: '<', latinCShifted: '<', russian: 'б', russianShifted: 'Б', russianCShifted: 'б',
    },
    Period: {
      latin: '.', latinShifted: '>', latinCShifted: '>', russian: 'ю', russianShifted: 'Ю', russianCShifted: 'Ю',
    },
    Slash: {
      latin: '/', latinShifted: '?', latinCShifted: '?', russian: '.', russianShifted: ',', russianCShifted: ',',
    },
    ArrowUp: {
      latin: '⮝', latinShifted: '⮝', latinCShifted: '⮝', russian: '⮝', russianShifted: '⮝', russianCShifted: '⮝',
    },
    ShiftRight: {
      latin: 'Shift', latinShifted: 'Shift', latinCShifted: 'Shift', russian: 'Shift', russianShifted: 'Shift', russianCShifted: 'Shift',
    },
    ControlLeft: {
      latin: 'Ctrl', latinShifted: 'Ctrl', latinCShifted: 'Ctrl', russian: 'Ctrl', russianShifted: 'Ctrl', russianCShifted: 'Ctrl',
    },
    MetaLeft: {
      latin: 'Win', latinShifted: 'Win', latinCShifted: 'Win', russian: 'Win', russianShifted: 'Win', russianCShifted: 'Win',
    },
    AltLeft: {
      latin: 'Alt', latinShifted: 'Alt', latinCShifted: 'Alt', russian: 'Alt', russianShifted: 'Alt', russianCShifted: 'Alt',
    },
    Space: {
      latin: '', latinShifted: '', latinCShifted: '', russian: '', russianUpper: '', russianShifted: '', russianCShifted: '',
    },
    AltRight: {
      latin: 'Alt', latinShifted: 'Alt', latinCShifted: 'Alt', russian: 'Alt', russianShifted: 'Alt', russianCShifted: 'Alt',
    },
    ArrowLeft: {
      latin: '⮜', latinShifted: '⮜', latinCShifted: '⮜', russian: '⮜', russianShifted: '⮜', russianCShifted: '⮜',
    },
    ArrowDown: {
      latin: '⮟', latinShifted: '⮟', latinCShifted: '⮟', russian: '⮟', russianShifted: '⮟', russianCShifted: '⮟',
    },
    ArrowRight: {
      latin: '⮞', latinShifted: '⮞', latinCShifted: '⮞', russian: '⮞', russianShifted: '⮞', russianCShifted: '⮞',
    },
    ControlRight: {
      latin: 'Ctrl', latinShifted: 'Ctrl', latinCShifted: 'Ctrl', russian: 'Ctrl', russianShifted: 'Ctrl', russianCShifted: 'Ctrl',
    },
  };

  const keyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
    'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
    'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

  const nonTypableKeys = ['ShiftLeft', 'CapsLock', 'AltLeft', 'Backspace', 'Tab', 'ShiftRight', 'AltRight', 'ControlLeft', 'ControlRight', 'MetaLeft', 'MetaRight', 'Enter'];


  let isCapsLocked = false;
  let isShifted = false;
  let langEng;

  // Создание элементов HTML
  const input = document.createElement('textarea');
  document.body.append(input);

  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  document.body.append(keyboard);

  const info = this.document.createElement('div');
  info.className = 'info';
  info.innerHTML = '<p>Клавиатура создана в OS Windows</p> <p>Cмена языка Shift + Alt</p>';
  document.body.append(info);

  Object.keys(keys).forEach((el) => {
    const key = document.createElement('div');
    key.innerText = keys[el].latin;
    key.className = `key ${el}`;
    keyboard.append(key);
  });

  // Вставка символа
  function insertSymbol(code, caps, shift, lang) {
    switch (code) {
      case 'Backspace':
        input.innerHTML = input.value.substring(0, input.value.length - 1);
        break;
      case 'Space':
        input.innerHTML += ' ';
        break;
      case 'Tab':
        input.innerHTML += '    ';
        break;
      case 'Enter':
        input.innerHTML += '\n';
        break;
      default:
        if (nonTypableKeys.includes(code)) {
          return;
        }

        if (!caps && !shift) {
          if (lang) {
            input.innerHTML += keys[code].latin;
          } else {
            input.innerHTML += keys[code].russian;
          }
        } else if (caps && shift) {
          if (lang) {
            input.innerHTML += keys[code].latinCShifted;
          } else {
            input.innerHTML += keys[code].russianCShifted;
          }
        } else if (caps) {
          if (lang) {
            input.innerHTML += keys[code].latin.toUpperCase();
          } else {
            input.innerHTML += keys[code].russian.toUpperCase();
          }
        } else if (lang) {
          input.innerHTML += keys[code].latinShifted;
        } else {
          input.innerHTML += keys[code].russianShifted;
        }
    }
  }

  // Изменение раскладки
  function changeKeyboardSymbols(caps, shift, lang) {
    if (!caps && !shift) {
      document.querySelectorAll('.key').forEach((el) => {
        if (lang) {
          el.innerText = keys[el.classList[1]].latin;
        } else {
          el.innerText = keys[el.classList[1]].russian;
        }
      });
    } else if (caps && shift) {
      document.querySelectorAll('.key').forEach((el) => {
        if (lang) {
          el.innerText = keys[el.classList[1]].latinCShifted;
        } else {
          el.innerText = keys[el.classList[1]].russianCShifted;
        }
      });
    } else if (caps) {
      document.querySelectorAll('.key').forEach((el) => {
        if (!nonTypableKeys.includes(el.classList[1])) {
          if (lang) {
            el.innerText = keys[el.classList[1]].latin.toUpperCase();
          } else {
            el.innerText = keys[el.classList[1]].russian.toUpperCase();
          }
        }
      });
    } else {
      document.querySelectorAll('.key').forEach((el) => {
        if (lang) {
          el.innerText = keys[el.classList[1]].latinShifted;
        } else {
          el.innerText = keys[el.classList[1]].russianShifted;
        }
      });
    }
  }

  // Язык
  if (localStorage.getItem('lang')) {
    if (localStorage.getItem('lang') === 'true') {
      langEng = true;
    } else {
      langEng = false;
    }
    changeKeyboardSymbols(isCapsLocked, isShifted, langEng);
  } else {
    langEng = true;
  }


  // Нажатие клавиши
  window.addEventListener('keydown', (event) => {
    if (!keyCodes.includes(event.code)) {
      return;
    }
    event.preventDefault();

    if (event.code === 'CapsLock') {
      isCapsLocked = !isCapsLocked;
    }

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      isShifted = !isShifted;
    }

    if (
      (isShifted && event.code === 'AltLeft')
      || (isShifted && event.code === 'AltRight')
    ) {
      langEng = !langEng;
    }

    localStorage.setItem('lang', langEng);

    document.querySelector(`.${event.code}`).classList.toggle('active');
    changeKeyboardSymbols(isCapsLocked, isShifted, langEng);
    insertSymbol(event.code, isCapsLocked, isShifted, langEng);
  });

  // Отпускание клавиши
  window.addEventListener('keyup', (event) => {
    if (!keyCodes.includes(event.code)) {
      return;
    }
    if (event.code !== 'CapsLock') {
      document.querySelector(`.${event.code}`).classList.remove('active');
    }
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      isShifted = !isShifted;
    }

    changeKeyboardSymbols(isCapsLocked, isShifted, langEng);
  });

  // Клик
  window.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('key')) {
      if (event.target.classList[1] === 'CapsLock') {
        isCapsLocked = !isCapsLocked;
      }

      if (event.target.classList[1] === 'ShiftLeft') {
        isShifted = !isShifted;
      }
      document
        .querySelector(`.${event.target.classList[1]}`)
        .classList.toggle('active');

      changeKeyboardSymbols(isCapsLocked, isShifted, langEng);
      insertSymbol(event.target.classList[1], isCapsLocked, isShifted, langEng);
    }
  });

  // Анклик
  window.addEventListener('mouseup', (event) => {
    if (!keyCodes.includes(event.target.classList[1])) {
      return;
    }

    if (event.target.classList[1] === 'ShiftLeft') {
      isShifted = !isShifted;
      changeKeyboardSymbols(isCapsLocked, isShifted, langEng);
    }

    if (event.target.classList[1] !== 'CapsLock') {
      document
        .querySelector(`.${event.target.classList[1]}`)
        .classList.remove('active');
    }
  });
};
