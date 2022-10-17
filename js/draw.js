// Отобразить фотографии других пользователей.
//   Заведите модуль, который будет отвечать за отрисовку миниатюр.
//   На основе временных данных для разработки и шаблона #picture создайте DOM-элементы
//   Адрес изображения url подставьте как атрибут src изображения.
//   Количество лайков likes выведите в блок .picture__likes.
//   Количество комментариев comments выведите в блок .picture__comments.
//   Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.
//   Подключите модуль в проект.


// <template id="picture">
//   <a href="#" className="picture">
//     <img className="picture__img" src="" width="182" height="182" alt="Случайная фотография">
//       <p className="picture__info">
//         <span className="picture__comments"></span>
//         <span className="picture__likes"></span>
//       </p>
//   </a>
// </template>
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
