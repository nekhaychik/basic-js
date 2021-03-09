const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  if (array === undefined || !Array.isArray(array) || array.length === 0)
    return false;
  let teamName = "";
  let sortedteamName = [];
  //filter - создаёт новый массив, определённый по условию, переданному в аргументе
  sortedteamName = array.filter(el => typeof el == "string" && el.length != 0 ? true : false);
  //map - перобразует массив по заданному условию, trim - убирает пробелы с двух сторон
  sortedteamName = sortedteamName.map((el) => {return el.trim().toLowerCase();});
  sortedteamName.sort();
  sortedteamName.forEach(el => {
    if(typeof el == 'string' && el.length != 0)
      teamName += el.trim()[0].toUpperCase(); //добавление первого элемента в новый массив
  });
  return teamName;
};
