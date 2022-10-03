const getRandomNum = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

// eslint-disable-next-line no-unused-vars
const isRightString = (str, maxLen) => String(str).length <= maxLen;
const getRandomElement = (array) => array[getRandomNum(0, array.length - 1)];

export {getRandomNum, getRandomElement};
