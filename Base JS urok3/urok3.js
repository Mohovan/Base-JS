/* 1.) С помощью цикла while вывести все простые числа в промежутке от 0 до 100 */

const checkSimpleNum = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const simpleNumArray = (num) => {
  const arr = [];
  let i = 2;
  while (i <= num) {
    if (checkSimpleNum(i)) { 
      arr.push(i);
    }
    i++;
  }
  return arr;
};

console.log('Массива простых чисел от 0 до 100: ' + simpleNumArray(100));
//
//
/* С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

3. Товары в корзине хранятся в массиве. Задачи:

a) Организовать такой массив для хранения товаров в корзине;

b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины. */

const basketPrice = ['Пиджак', 'Брюки', 'Рубашка', 'Галстук'];
const ItemsPrice = [['Пиджак', 4500], ['Брюки', 2750], ['Рубашка', 1290], ['Галстук', 570]];

const getItemPrice = (item, array) => {
  const items = [];
  const costs = [];
  for (let i = 0; i < array.length; i++) {
    items.push(array[i][0]);
    costs.push(array[i][1]);
  }
  return costs[items.indexOf(item)];
};

const countBasketPrice = (basketArr, costArr) => {
  let totalCost = 0;
  for (let i = 0; i < basketArr.length; i++) {
    totalCost += getItemPrice(basketArr[i], costArr);
  }
  return totalCost;
};
console.log('Массив корзины: ' + basketPrice);
console.log('Массив стоимости каждого товара: ' + ItemsPrice);
console.log('Вывод полной стоимости корзины: ' + countBasketPrice(basketPrice, ItemsPrice));
//
//
/* 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто}*/

for (let i = 0; i <= 9; console.log('Не используя тело цикла {}: ' + i++)) { /* пусто */ }

/* 4. * Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей
© geekbrains.ru 7
пирамиды должно быть 20 рядов, а не 5: */

const pyramidPicture = (rows, symbol) => {
  let picture = '';
  for (let i = 1; i <= rows; i++) {
    console.log(picture += symbol);
  }
};
pyramidPicture(20, 'x');
//