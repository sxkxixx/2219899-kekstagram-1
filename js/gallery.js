import {createUserPicture, getFilledFragment} from './draw.js';
import {openPhoto} from './full-screen.js';
import {arrayObj} from './data.js';

const setPhotoSettings = (user) => {
  const photo = createUserPicture(user);
  photo.addEventListener('click', () => {
    openPhoto(user);
  });
  return photo;
};

const pictureContainer = document.querySelector('.pictures');
pictureContainer.append(getFilledFragment(arrayObj, setPhotoSettings));

