
const zadan1 = `Написать функцию, преобразующую число в объект. \n Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. \n Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. \n Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.`;

const consol = `Результаты в консоли`;

alert(zadan1);
const number = +prompt("Введите число от 0 до 999");
console.log(vivodNum(number));
alert(consol);

function vivodNum(userNum) {
  let output = [];
  let order = ['сотни: ', 'десятки: ', 'единицы: '];

  if (userNum >= 0 && userNum <= 999) {
      userNum_conv = userNum.toString();
      for (let cnt = userNum_conv.length - 1; cnt >= 0; cnt--){
          output += order[cnt] + userNum_conv[cnt] + '\n';
      }
      return output;
  } else {
      return 'Вы ввели недопустимое число!';
  }
}
