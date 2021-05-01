import { fetchUser } from './utils/requests.js';
import { selector } from './utils/selector.js';

const img = selector('img');
const buttonEl = selector('.btn');
const userTitleEl = selector('.user-title');
const userValueEl = selector('.user-value');
const iconEl = selector('.icon');
// transform array like to array
const iconsEl = Array.from(document.querySelectorAll('.icon'));

const setUser = async () => {
  const user = await fetchUser();
  
  const {
    picture:{large:image},
    name:{first:firstName, last:lastName},
    email,
    dob:{age},
    location:{street:{number:stNumber, name:stName}},
    cell:phone,
    login:{password}
  } = user
  const name = `${firstName} ${lastName}`
  const street = `${stNumber} ${stName}`

  img.src = image
  userTitleEl.textContent = `My ${name} is`
  userValueEl.textContent = name;

  iconsEl.map((icon) => {
    icon.addEventListener('click', (e) => {

      // check if anyone has active class and remove it before add
      iconsEl.forEach((icon) => {
        if (icon.classList.contains('active')) {
          console.log(icon);
          icon.classList.remove('active');
        }
      });

      console.log(e.currentTarget.dataset.label);
      
      console.log(icon);
  
      icon.classList.add('active');

    });
  });
};

buttonEl.addEventListener('click', () => {});

setUser();
