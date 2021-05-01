import { selector } from './selector.js';
import { getUser } from './getUser.js';

const img = selector('img');
const userTitleEl = selector('.user-title');
const userValueEl = selector('.user-value');
// transform array like to array
const iconsEl = Array.from(document.querySelectorAll('.icon'));

export const displayUser = async () => {
  const user = await getUser();
  const { image, name } = user;

  // setup for inital rendering
  img.src = image;
  userTitleEl.textContent = `My ${name} is`;
  userValueEl.textContent = name;
  // remove active class off anyone before add it
  iconsEl.forEach((icon) => icon.classList.remove('active'));
  iconsEl[0].classList.add('active');

  // set event listener on icons
  iconsEl.forEach((icon) => {
    icon.addEventListener('mouseover', (e) => {
      // set title of info display My ... is
      let label = e.currentTarget.dataset.label;
      userTitleEl.textContent = `My ${label} is`;

      // link selected icon and value of user info
      userValueEl.textContent = user[label];

      // remove active class off anyone before add it to one
      iconsEl.forEach((icon) => icon.classList.remove('active'));
      icon.classList.add('active');
    });
  });
};
