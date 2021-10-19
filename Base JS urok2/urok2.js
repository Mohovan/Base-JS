const zadan3 = `если a и b положительные, вывести их разность; n\
если а и b отрицательные, вывести их произведение; n\
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.`;
const zadan4 = `Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.`;
const zadan5 = `Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.`;

const zadan6 = `Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции. В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch).`;
const zadan8 = `С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val — заданное число, pow –— степень.`;


document.querySelector("#peremen").addEventListener("click", peremen);
document.querySelector("#promejutok").addEventListener("click", promejutok);
document.querySelector("#forOperation").addEventListener("click", forOperation);
document.querySelector("#parametrs").addEventListener("click", parametrs);
document.querySelector("#stepen").addEventListener("click", stepen);


//
function peremen() {
  alert(zadan3);
  const a = +prompt(`Ведите первое число a`);
  const b = +prompt(`Ведите второе число b`);
  inner(valueОutput(a, b));
}
function valueОutput(a, b) {
  if (a > 0 && b > 0) {
    return "Разность равна: " + (a - b);
  } else if (a < 0 && b < 0) {
    return "Произведение равно: " + a * b;
  } else if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
    return "Сумма равна: " + (a + b);
  }
}
//
//
function promejutok() {
  alert(zadan4);
  var a = parseInt(prompt("Введите число от 0 до 15"));
  inner(interval(a));
}

function interval(a) {
  if (a >= 0 && a <= 15) {
    var res = "";
    switch (a) {
      case 0:
        res += ",0";
      case 1:
        res += ",1";
      case 2:
        res += ",2";
      case 3:
        res += ",3";
      case 4:
        res += ",4";
      case 5:
        res += ",5";
      case 6:
        res += ",6";
      case 7:
        res += ",7";
      case 8:
        res += ",8";
      case 9:
        res += ",9";
      case 10:
        res += ",10";
      case 11:
        res += ",11";
      case 12:
        res += ",12";
      case 13:
        res += ",13";
      case 14:
        res += ",14";
      case 15:
        res += ",15";
    }
    return res.substring(1);
  } else {
    return "Введены некорректные данные";
  }
}
//
//
function forOperation() {
  alert(zadan5);
  const a = +prompt(`Ведите первое число`);
  const b = +prompt(`Ведите второе число`);
  let summ = summ1(a, b);
  let vichet = vichet1(a, b);
  let umnoj = umnoj1(a, b);
  let delinie = delinie1(a, b);
  let result = `Значение a: ${a}, Значение b: ${b}, Cложение: ${summ}, Вычитание: ${vichet}, Умножение: ${umnoj}, Деление: ${delinie}`;

  inner(result);
}

function summ1(a, b) {
  return a + b;
}
function vichet1(a, b) {
  return a - b;
}
function umnoj1(a, b) {
  return a * b;
}
function delinie1(a, b) {
  return a / b;
}
//
//
function parametrs() {
  alert(zadan6);
  const a = +prompt(`Ведите первое число`);
  const b = +prompt(`Ведите второе число`);
  const y = prompt(`Вычитание '-' Сложения '+' Деление '/' Умножение '*'`);
  let result = `Значение a: ${a}, Значение b: ${b}, Вид операции y: ${y}  ,`;
  inner(result + mathOperation(a, b, y));
}
function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case "+":
      return "Результат сложения: " + (arg1 + arg2);
    case "-":
      return "Результат вычитание: " + (arg1 - arg2);
    case "*":
      return "Результат умножение: " + arg1 * arg2;
    case "/":
      return "Результат деление: " + arg1 / arg2;
  }
}
//
//
function stepen() {
  alert(zadan8);
  let value = +prompt("Введите число");
  let degree = +prompt("Введите степень");
  let result = `Значение числа: ${value}, Значение степени: ${degree},`;
  inner(result + " Число в степени: " + power(value, degree));
}
function power(value, degree) {
  if (degree == 0) {
    return 1;
  } else {
    return value * power(value, degree - 1);
  }
}
//
function inner(x) {
  const text = document.querySelector(".text");
  text.innerHTML = "";
  text.insertAdjacentHTML("beforeend", x);
}
