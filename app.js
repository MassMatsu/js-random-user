import { selector } from './utils/selector.js';
import { displayUser } from './utils/displayUser.js';

const buttonEl = selector('.btn');

// set random user generate button
buttonEl.addEventListener('click', () => {
  displayUser();
});

// inital event at DOM content loaded for inital rendering
window.addEventListener('DOMContetdLoaded', displayUser());
