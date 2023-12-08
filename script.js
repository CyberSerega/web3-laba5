// Задача 1
function task1() {
    user = {};
    user.name = "John";
    user.surname = "Smith";
    user.name = "Pete";
    delete user.name;
    alert("Все действия выполнены");
  }
  
  // Задача 2
  function task2() {
    function isEmpty(obj) {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          return false;
        }
      }
      return true;
    }
    let schedule = {};
    alert( isEmpty(schedule) ); // true
    schedule["8:30"] = "get up";
    alert( isEmpty(schedule) ); // false
  }
  
  // Задача 3
  function task3() {
    const user = {
      name: "John"
    };
    user.name = "Pete";
    alert("Это будет работать");
  }
  
  // Задача 4
  function task4() {
    let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  res = 0
  for(let key in salaries){
    res+=salaries[key];
  }
  alert(`Итоговая сумма равна ${res}`);
  }
  
  // Задача 5
  function task5() {
    function multiplyNumeric(obj){
      for(let key in obj){
        if (typeof obj[key] === "number") obj[key]*=2;
      }
    }
    let menu = {
      width: 200,
      height: 300,
      title: "My menu"
    };  
    alert(`До: menu{\nwidth: ${menu.width}\nheight: ${menu.height}\n
  title: ${menu.title}\n}`) ; 
    multiplyNumeric(menu);
    alert(`После: menu{\nwidth: ${menu.width}\nheight: ${menu.height}\n
  title: ${menu.title}\n}`); 
    
  }
  
  // Задача 6
  function task6() {
    let fruits = ["Яблоки", "Груша", "Апельсин"];
// добавляем новое значение в "копию"
    let shoppingCart = fruits;
    shoppingCart.push("Банан");
// что в fruits?
    alert( fruits.length ); // ?

}

  
  // Задача 7
  function task7() {
    const styles = ["Джаз", "Блюз"];
    alert(styles);
    styles.push("Рок-н-ролл");
    alert(styles);
    styles[Math.floor(styles.length / 2)] = "Классика";
    alert(styles);
    let firstElement = styles.shift(); 
    alert(firstElement);
    alert(styles);
    styles.unshift(["Рэп","Регги"]);
    alert(styles);
  }
  
  // Задача 8
  function task8() {
    let arr = ["a", "b"];
    arr.push(function() {
      alert( this );
    });
    arr[2]();
  }
  
  // Задача 9
  function task9() {
    const stack = [];
    do{
      let num = prompt("Введите число(не число, чтобы закончить)");
      if(isNaN(num)||num =='') break;
      stack.push(Number(num));
    }while(true)
    let res = 0;
    for(let i=0; i<stack.length; i++){
      res+=stack[i];
    }
    alert(res);
  }
  
  // Задача 10
  function task10() {
    function getMaxSubSum(arr){
      let maxSum = 0;
      let partialSum = 0;
      for(let i=0; i<arr.length; i++){
        partialSum+=arr[i];
        maxSum = Math.max(maxSum, partialSum);
        if(partialSum<0) partialSum = 0;         
      }
      return maxSum;
    }
    alert(getMaxSubSum([-1, 2, 3, -9]));
    alert(getMaxSubSum([2, -1, 2, 3, -9]));
    alert(getMaxSubSum([-1, 2, 3, -9, 11]));
    alert(getMaxSubSum([-2, -1, 1, 2]));
    alert(getMaxSubSum([100, -9, 2, -3, 5]));
    alert(getMaxSubSum([1, 2, 3]));
    
  }
  
  // Задача 11
  function task11() {
    function removeDuplicates(arr) {
      let counts = {};
    
      for (let i = 0; i < arr.length; i++) {
        counts[arr[i]] = (counts[arr[i]] || 0) + 1;
    
        if (counts[arr[i]] > 2) {
          arr.splice(i, 1);
          i--; // уменьшаем индекс, чтобы не пропустить следующий элемент после удаления
        }
      }
      alert(arr);
    }
    alert("Массив без дубликатов: " + removeDuplicates([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]).toString());
}
  // Задача 12
  function task12() {
    const arr = [1,7,15,8,9,11];
    let maxInd = -1;
    let maxElem = -1;
    for(let i = 0; i<arr.length; i+=2){
      if(arr[i]>maxElem){
        maxElem = arr[i];
        maxInd = i;
      }
    }
    for(let j = 0; j<3; j++){
      for(let i = maxInd; i<arr.length-1; i++){
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    for (let i = maxInd; i > 0; i--) {
      let temp = arr[i];
      arr[i] = arr[i - 1];
      arr[i - 1] = temp;
    }
    alert("Массив после сдвигов: " + arr);
  }
  
  // Задача 13
  function task13() {
    const arr = [-1, 0, 2, 5, -5, 3, -4];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        sum += arr[i];
      }
    }
    alert("Сумма отрицательных чисел массива: " + sum);
  }
  
  // Задача 14
  function task14() {
    let res = 1;
    const arr = [-1, 0, 5, -2, 6, 3, -2]
    for(let i = 0; i<arr.length; i+=2){
      res*=arr[i];
    }
    alert("Произведение нечетных элементов массива: " + res);
  }
  
  // Задача 15
  function task15() {
    const arr = [-1, 0, 5, -2, 6, 0, -2]; 
    let sum=0;
    let count = 0;
    let i = 0;
    while(i<arr.length && count<=2){
      if(arr[i]==0) {
        count++;
      }
      if(count==0) continue;
      sum+=arr[i];
      i++;
    }
    if (count==0) alert('0');
    else alert(sum);
  }
  
  // Задача 16
  function task16() {
    const arr = [-1, 0, 5, -2, 6, 0, -2];
    max = arr[0];
    for(let i = 1; i<arr.length; i++){
      if(arr[i]>max) max = arr[i];
    }
    alert("Максимальный элемент: "+ max.toString());
  }
  
  // Задача 17
  function task17() {
    const arr = [-1, 0, 5, -2, 6, 0, -2];
    if(arr.length==1) alert(arr[0]);
    else{
      let max = arr[1];
      for(let i = 3; i<arr.length; i+=2){
        if(arr[i]>max) max = arr[i];
      }
      alert("Максимальный четный элемент: "+ max.toString());
    }
  }
  
  function task18() {
    const numbers = [0, 2, 3, 5, 0, 3, 0, 8, 6, 7, 0];
    res = [];
    alert("Исходный массив: "+ numbers.toString());
    for(let i = 0; i< numbers.length; i++){
      if (numbers[i]==0) res.push(0);
    }
    for(let i = 0; i< numbers.length; i++){
      if (!numbers[i]==0) res.push(numbers[i]);
    }
    alert("Итоговый массив: "+ res.toString());
  }
  
  // Задача 19
  function task19() {
    const numbers = [1, 2, 3, 8, 7, 6];
    var min = numbers[0];
    var minInd = 0;
    var maxInd = 0;
    var max = numbers[0];
    for(let i = 1; i< numbers.length; i++){
      if (numbers[i]>max) {
        max = numbers[i];
        maxInd = i;
      }      
    }
    for(let i = 1; i< numbers.length; i++){      
      if (numbers[i]<min){
        min = numbers[i];
        minInd = i;
      }
    }
    let res = minInd+maxInd;
    alert(`Сумма номеров минимального и максимального элементов: ${res}`);
  }
  
  // Задача 20
  function task20() {
    const numbers = [5, -2, 2, 3, 8, 7, 6, -1];
    var min = numbers[0];
    for(let i = 1; i< numbers.length; i++){
      if (Math.abs(numbers[i])<Math.abs(min)) {
        min = numbers[i];
      }
  }
  alert(`Минимальный по модулю элемент массива: ${min}`);
  }
  
  // Задача 21
  function task21() {
    var arr= [];
    for(let i = 0; i< 10; i++){
      arr.push(Math.floor(Math.random() * (10 + 10 + 1) - 10));
    }
    alert("Исходный массив: "+ arr.toString());
    var arr1= arr.slice(0, arr.length/2);
    arr1.reverse();
    var arr2= arr.slice(arr.length/2, arr.length);
    arr2.reverse();
    arr = [];
    for(let i = 0; i< arr1.length; i++){
      arr.push(arr1[i]);
    }
    for(let i = 0; i< arr2.length; i++){
      arr.push(arr2[i]);
    }
    alert("Итоговый массив: "+ arr.toString());
  }
  
  // Задача 22
  function task22() {
    const arr= [];
    for(let i = 0; i< 12; i++){
      arr.push(Math.floor(Math.random() * (12 + 12 + 1) - 12));
    }
    alert("Исходный массив: "+ arr.toString());
    for (let i = 0; i < 4 ; i++) {
      let lastEl = arr[arr.length-1];
      for (let j = arr.length-1; j > 0; j--){
        arr[j]= arr[j-1];
      }
      arr[0] = lastEl;
    }
    alert("Итоговый массив: "+ arr.toString());
  }

  async function getGoroscope(){
      const name = document.getElementById("gorName").value;
      const resultElement = document.getElementById('goroscope');
      try {
          // Отправка запроса на сервер для предсказания возраста, пола
          const response = await fetch(`/predict-info?name=${name}`);
          const result = await response.json();
          // Отображение результата
          resultElement.textContent = `
              Предсказанная информация для ${name}:
              Возраст: ${result.age}
              Пол: ${result.gender} (${(result.probability * 100).toFixed(2)}%)                
          `;
          resultElement.innerHTML = `
          Предсказание на сегодня для ${name}USA:
          ${result.body}
          `;
          document.body.appendChild(resultElement);
      } catch (error) {
          // Обработка ошибок
          console.error(error);
          resultElement.textContent = 'Произошла ошибка';
      }
}