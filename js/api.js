const urlToGet = 'https://26.javascript.pages.academy/kekstagram/data';
const urlToPost = 'https://26.javascript.pages.academy/kekstagram';

const getData = (onSuccess, onFail) => {
  fetch(urlToGet)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .then((data) => onSuccess(data))
    .catch(() => onFail());
};

const sendData = (onSuccess, onFail, body) => {
  fetch(urlToPost,
    {
      method: 'POST',
      body: body
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
        return;
      }
      throw new Error();
    })
    .catch(() => onFail());
};

export {getData, sendData};
