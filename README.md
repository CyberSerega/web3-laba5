<h1 align="center" paddin> МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</h1>

<p align="center">Лабораторная работа №4 "Основы языка JavaScript" </p>

<p align="right">Выполнил: Рогаль Сергей Александрович</p>
<p align="right">Проверил: Соболев Е. И.</p>

<p align="center">г. Южно-Сахалинск <br> 2023 год</p>

<h2 align="center">Введение</h2>
<p align="justify">JavaScript — это язык программирования, который используют для написания frontend- и backend-частей сайтов, а также мобильных приложений.JS поддерживают все популярные браузеры. Во frontend-части сайтов язык используют для создания интерактива (анимаций, всплывающих форм, автозаполнения), так как он связан с HTML и CSS и может ими манипулировать. В backend-части с языком JavaScript работают на платформе Node.js. С ее помощью, например, разрабатывают серверные веб-приложения и подключают библиотеки. В поисковике Google на JavaScript работает строка автозаполнения, а Netflix, Uber, eBay используют его в своем backend. Уже 6 лет JS — самый популярный язык среди разработчиков по версии GitHub.
</p>

<h2 align="center">Цели и задачи</h2>
<palign="justify">Цели: разработать программы для выполния заданий</p>
<palign="justify">Задачи: применить технологии JavaScript (Node.js).</p>

<h2>Решение задач</h2>
<pre>
function task1() {
    let x = Number(prompt('Введите x: '));
    let res = x>0 ? Math.sin(x)*Math.sin(x) : 1-2*Math.sin(x*x);
    alert(res);
  }
  ``` 
  // Задача 2
  function task2() {
    let n = prompt("Введите значение n: ", "0880");
    const numStr = n.toString();
    if (numStr.length !== 4) {
        alert("Число n<=9999")
    }
    if (numStr === numStr.split('').reverse().join('')) {
        alert("Число палидром")
    }
    else {
        alert("Число не палидром")
    }
  }
  
  // Задача 3
  function task3() {
    let n = Number(prompt('Введите год: '));
    let res = n<100 ? n%4 : n%400;
    if (res==0) alert("Это год високосный");
    else alert("Это год невисокосный");
  }
  
  // Задача 4
  function task4() {
    let x = Number(prompt('Введите x: '));
    let res = x<-1 ? -1 : (x==-1 ? 1 : x);
    alert('Результат ' + res);
  }
  
  // Задача 5
  function task5() {
    let n = Number(prompt('Введите номер месяца: '));
    if (n<=2 | n==12) alert("Зима");
    else if (n<6) alert("Весна");
    else if (n<10) alert("Лето");
    else alert("Осень");
  }
  
  // Задача 6
  function task6() {
    let m = Number(prompt('Введите номер масти'));
    let n = Number(prompt('Введите номер достоинства'));
    let res = "";
    switch(n){
      case 6: res+="Шестерка";
      break;
      case 7: res+="Семерка";
      break;
      case 8: res+="Восьмерка";
      break;
      case 9: res+="Девятка";
      break;
      case 10: res+="Десятка";
      break;
      case 11: res+="Валет";
      break;
      case 12: res+="Дама";
      break;
      case 13: res+="Король";
      break;
      case 14: res+="Туз";
      break;
    }
    res+=" ";
    switch(m){
      case 1: res+="пик";
      break;
      case 2: res+="треф";
      break;
      case 3: res+="бубен";
      break;
      case 4: res+="черви";
      break;
    }
    alert(res);
  }

  
  // Задача 7 ?????
  function task7() {
  let n = prompt("Введите значение n: ", "1984")
  const animals = ["Крыса", "Корова", "Тигр", "Заяц", "Дракон", "Змея", "Лошадь", "Овца", "Обезьяна", "Петух", "Собака", "Свинья"];
  const colors = ["Зеленый", "Красный", "Желтый", "Белый", "Черный"];

  const startYear = 1984; // Год, с которого начинается цикл
  const animalIndex = (n - startYear) % 12;
  const colorIndex = Math.floor((n - startYear) / 2) % 5;

  const animalName = animals[animalIndex];
  const colorName = colors[colorIndex];

  alert(animalName + " " + colorName);
  }
  
  // Задача 8
  function task8() {
    let res = "";
    for(let i=1; i<=10; i++){
      res+=`9*${i}=${9*i}\n`;
    }
    alert(res);
  }
  
  // Задача 9
  function task9() {
    let res = "";
    for(let i=2; i<=20; i++){
      res+=`sin(${i})=${Math.sin(i)}\n`;
    }
    alert(res);
  }
  
  // Задача 10 ????
  function task10() {
    
    let result = "";
    let a = parseInt(prompt("Введите число а: ", "100"));
    let b = parseInt(prompt("Введите число b: ", "500"));
    let sum = 0;
    for (let i = 100; i <= 500; i++) {
        sum += i;
    }
    result += "а)" + sum + "\n";
    sum = 0

    for (let i = a; i <= 500; i++) {
        sum += i;
    }
    result += "б)" + sum + "\n";
    sum = 0

    for (let i = -10; i <= b; i++) {
        sum += i;
    }
    result += "в)" + sum + "\n";
    sum = 0

    for (let i = a; i <= b; i++) {
        sum += i;
    }
    result += "г)" + sum + "\n";
    alert(result);
  }
  
  // Задача 11
  function task11() {
    let res = 1;
    let n = prompt('Введите n: ');
    for(let i=2; i<=n; i++){
      res+= 1/n;
    }
    alert("Сумма равна: " + res);

}
  // Задача 12
  function task12() {
    let x = Number(prompt('Введите x: '));
    let y = Number(prompt('Введите y: '));
    let res1 = x;
    let res2 = y;
    for (let i = 0; i < y-1; i++) res1+=x;
    for (let i = 0; i < x-1; ++i) res2+=y;
    alert("Результат1: " + res1);
    alert("Результат2: " + res2);
  }
  
  // Задача 13
  function task13() {
    let n = prompt('Введите n: ');
    let res = 0;
    for (let i = 1; i < 2*n; i++){
      if (i%2==1) res+=i;
    };
    alert("Его квадрат: "+ res);
  }
  
  // Задача 14
  function task14() {
    let n = 0;
    for (let i = 50; i >= 1; i--)
    {
        n= Math.sqrt(i + n);
    }
    alert(n);
  }
  
  // Задача 15
  function task15() {
    let seq = [1, 3, 5 ,6 ,8, 0];
    let sum=0;
    for(let i=0; i<seq.length; i++) sum+=seq[i];
    alert("Сумма всех чисел последовательности " + sum);
    alert("Количество чисел в последовательности " + (seq.length-1).toString());
  }
  
  // Задача 16
  function task16() {
    let seq = [1, 3, 5 ,6 ,8, -1];
    let sum=0;
    for(let i=0; i<seq.length-1; i++) sum+=seq[i];
    sum /= seq.length-1;
    alert("Среднее арифметическое " + sum);
  }
  
  // Задача 17
  function task17() {
    let n = prompt('Введите число n');
    let count3 = 0, countLast = 0, countEven = 0,
    sum5 = 0, mult7 = 1, count05 = 0;

    for(let i = 0; i < n.length; i++){
      if (n[i] == '3') count3++;
      if (n[i] == n[n.length - 1]) countLast++;
      if (Number(n[i]) % 2 == 0) countEven++;
      if (Number(n[i]) > 5) sum5+= Number(n[i]);
      if (Number(n[i]) > 7) mult7*= Number(n[i]);
      if (n[i] == '0' || n[i] == '5') count05++;
  }
    alert(`а) ${count3}
     б) ${countLast}
     в) ${countEven}
     г) ${sum5}
     д) ${mult7}
     е) ${count05}`);
}
  
  // Задача 18
  function task18() {
    let n = prompt('Введите число n');
    let maxDigit = 0, maxIndex=0, minDigit=0, minIndex=0;
    for(let i = 0; i < n.length; i++){
      if(Number(n[i])>maxDigit){
        maxDigit = Number(n[i]);
        maxIndex = i;
       }
       if(Number(n[i]<minDigit)){
         minDigit = Number(n[i]);
         minIndex = i;
       }
  } 
   for(let i = n.length-1; i >=0; i--){
     if(Number(n[i])>maxDigit){
       maxDigit = Number(n[i]);
       maxIndex = i;
     }
     if(Number(n[i]<minDigit)){
       minDigit = Number(n[i]);
       minIndex = i;
     }
 } 
alert(`maxIndex = ${maxIndex+1}, minIndex = ${minIndex+1}`);
}
  
  // Задача 19
  function task19() {
    let n = Number(prompt('Введите число n'));
    let i=2;
    while(i*i<=n){
        if(n%i!=0){
          alert('Число не простое');
          return;
        };
        i++;
    }
    alert('Число простое');
  }
  
  // Задача 20
  function task20() {
    let n = prompt('Введите число n');
    for(let i=0; i<n.length-1; i++){
      if(Number(n[i])>Number(n[i+1])){
        alert('No');
        return;
      } 
    }
    alert('Yes');
  }
  
  // Задача 21
  function task21() {
    const seq = [1, 2 ,3, 4 , 1001, 1004, 1005, 2004, 4005, 7000, 10000]
    let n = Number(prompt('Введите число n'));
    for(let i=0; i<seq.length-1; i++){
      if(n<seq[i]){
        alert('Порядковый номер: ' + (i+1));
        return;
      } 
    }
    alert("Такого числа нет");
  }
  
  // Задача 22
  function task22() {
    let n = prompt('Введите число n');
    let a = prompt('Введите число a');
    let b = prompt('Введите число b');
    let countA = 0, countB=0;
    for(let i=0; i<n.length-1; i++){
      if(n[i]==a) countA++;
      if(n[i]==b) countB++;
    }
    if(countA<countB) alert(`Да, цифра ${a} встречается реже, чем ${b}`);
    else alert(`Нет, цифра ${a} не встречается реже, чем ${b}`);
  }

  function task23() {
    let i=10;
    let res = "";
    while(i<=30){
      res+=i.toString()+"\n";
      i++;
    } 
    i=9;
    // do{
    //   i++;
    //   res+=i.toString()+"\n";
    // }while(i<30)
    alert(res);
  }
</pre>
<h2 align="center">Вывод</h2>
<p align="justify">Таким образом, я закрепил навык работы с Node.js, лучше стал ориентироваться в нём, кроме того, поработал с библиотекой Express, все поставленные цели были выполнены. </p>


