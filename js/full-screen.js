const fullScreen = document.querySelector('.big-picture');
const body = document.body;
const closeButton = fullScreen.querySelector('#picture-cancel');

const fillComments = (comments) => {
  const commentsList = fullScreen.querySelector('.social__comments');
  const commentTemplate = fullScreen.querySelector('.social__comment');
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const thisComment = commentTemplate.cloneNode(true);
    const image = thisComment.querySelector('.social__picture');
    image.src = comment.avatar;
    image.alt = comment.name;
    thisComment.querySelector('.social__text').textContent = comment.message;
    fragment.append(thisComment);
  });
  commentsList.innerHTML = '';
  commentsList.append(fragment);
};

const renderPhoto = (photo) => {
  fullScreen.querySelector('.big-picture__img img').src = photo.url;
  fullScreen.querySelector('.comments-count').textContent = photo.comments.length;
  fullScreen.querySelector('.social__caption').textContent = photo.description;
  fillComments(photo.comments);
};

const closeByEscape = (evt) => {
  if (evt.key === 'Escape'){
    body.classList.remove('modal-open');
    fullScreen.classList.add('hidden');
    document.removeEventListener('keydown', () => closeByEscape);
  }
};

const closePhoto = () => {
  body.classList.remove('modal-open');
  fullScreen.classList.add('hidden');
  document.removeEventListener('keydown', () => closeByEscape);
};


const openPhoto = (photo) => {
  body.classList.add('modal-open');
  fullScreen.classList.remove('hidden');
  renderPhoto(photo);
  closeButton.addEventListener('click', closePhoto);
  document.addEventListener('keydown', closeByEscape);
};

export {renderPhoto, openPhoto};

