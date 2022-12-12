const STEP = 25;
const RANGE = {min: 25, max: 100};

const image = document.querySelector('.img-upload__preview').querySelector('img');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');

const checkTheScaleValue = (value) => {
  if (value <= RANGE.min || value > RANGE.max) {
    value = value <= RANGE.min ? RANGE.min : RANGE.max;
  }
  return value;
};

const changeScaleValue = (summand) => {
  const num = checkTheScaleValue(Number(scaleValue.value.replace('%', '')) + STEP * summand);
  scaleValue.value = `${num}%`;
  image.style.transform = `scale(${num / 100})`;
};

const onResizeButtonClick = () => {
  scaleSmaller.addEventListener('click', () => changeScaleValue(-1));
  scaleBigger.addEventListener('click', () => changeScaleValue(1));
};


export {onResizeButtonClick};
