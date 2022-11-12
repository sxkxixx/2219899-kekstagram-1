import {createUserPicture} from './draw.js';
import {openPhoto} from './full-screen.js';

const setPhotoSettings = (user) => {
  const photo = createUserPicture(user);
  photo.addEventListener('click', () => {
    openPhoto(user);
  });
  return photo;
};

const pictureContainer = document.querySelector('.pictures');

const appendThumbnails = (array) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < array.length; i++) {
    fragment.append(setPhotoSettings(array[i]));
  }
  pictureContainer.append(fragment);
};

export {appendThumbnails};
