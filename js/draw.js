const template = document.querySelector('#picture').content;

const createUserPicture = (user) => {
  const userPicture = template.cloneNode(true);
  userPicture.querySelector('.picture__img').src = user.url;
  userPicture.querySelector('.picture__comments').textContent = user.comments.length;
  userPicture.querySelector('.picture__likes').textContent = user.likes;
  return userPicture;
};

const getFilledFragment = (array, fn) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < array.length; i++){
    fragment.append(fn(array[i]));
  }
  return fragment;
};


export {createUserPicture, getFilledFragment};
