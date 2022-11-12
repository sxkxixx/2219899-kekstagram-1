const template = document.querySelector('#picture').content.querySelector('.picture');

const createUserPicture = (user) => {
  const userPicture = template.cloneNode(true);
  userPicture.querySelector('.picture__img').src = user.url;
  userPicture.querySelector('.picture__comments').textContent = user.comments.length;
  userPicture.querySelector('.picture__likes').textContent = user.likes;
  return userPicture;
};

export {createUserPicture};
