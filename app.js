import { selector } from './utils/selector.js';
import {getUser} from './utils/getUser.js'
import './utils/formatDOB.js'

const img = selector('img');
const buttonEl = selector('.btn');
const userTitleEl = selector('.user-title');
const userValueEl = selector('.user-value');
// transform array like to array
const iconsEl = Array.from(document.querySelectorAll('.icon'));


const displayUser = async () => {
  const user = await getUser()
  const {image, name} = user

  // setup for inital rendering
  img.src = image;
  userTitleEl.textContent = `My ${name} is`;
  userValueEl.textContent = name;

  // set event listener on icons
  iconsEl.map((icon) => {
    icon.addEventListener('mouseover', (e) => {
      // set title of info display My ... is
      let label = e.currentTarget.dataset.label;
      userTitleEl.textContent = `My ${label} is`;

      // link selected icon and value of user info
      userValueEl.textContent = user[label];

      // check if anyone has active class and remove it before add
      iconsEl.forEach((icon) => {
        if (icon.classList.contains('active')) {
          icon.classList.remove('active');
        }
      });
      icon.classList.add('active');
    });
  });
};


// set random user generate button
buttonEl.addEventListener('click', () => {
  displayUser()
});

// inital event at DOM content loaded for inital rendering
window.addEventListener('DOMContetdLoaded', displayUser())

