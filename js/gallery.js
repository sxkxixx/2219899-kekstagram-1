import {createUserPicture} from './draw.js';
import {openPhoto} from './full-screen.js';

const setPhotoSettings = (user) => {
  const photo = createUserPicture(user);
  photo.addEventListener('click', () => {
    openPhoto(user);
  });
};

export {setPhotoSettings};
