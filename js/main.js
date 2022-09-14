function getRandomNum(startNum, endNum){
  startNum = startNum < 0 ? 0 : startNum;
  endNum = endNum < 0 ? 0 : endNum;
  return Math.round(Math.random() * (endNum - startNum) + startNum);
}

const isRightString = (str, maxLen) => String(str).length <= maxLen;


getRandomNum(1, 10);
isRightString('Линтер не любит, когда функция не вызвана', 50);
