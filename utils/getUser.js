import {fetchUser} from './requests.js'
import { formatDOB } from './formatDOB.js';

export const getUser = async () => {
  const user = await fetchUser();

  // destructure the user object
  const {
    picture: { large: image },
    name: { first: firstName, last: lastName },
    email,
    dob: { date },
    location: {
      street: { number: stNumber, name: stName },
    },
    cell: phone,
    login: { password },
  } = user;

  // create a new object regarding to the user and return it
  return {
    image: image,
    name: `${firstName} ${lastName}`,
    email: email,
    DOB: formatDOB(date),
    street: `${stNumber} ${stName}`,
    phone: phone,
    password: password,
  };
};
