// // console.log("123");

// // let - изменяемая, вызывается один раз
// let a = 12 
// console.log(a);

// a = 5
// console.log(a);

// a = 32+43
// console.log(a);

// // const - неизменяемая
// const b = 23
 
// // a += 100
// a = a+111
// console.log(a);

// function sayHi(a,b,c,d) {
//     console.log("Привет");
//     // console.log(a+b+c+d);
//     // console.log(a);
//     // console.log(b);
//     // console.log(c);
//     // console.log(d);
//     return a+b+c+d
//     // console.log("poka");
// }

// // sayHi() - чтобы вызвать функцию
// // console.log(sayHi) - вывести текст функции
// let x = 55
// x = sayHi(1, 44, 44,34)
// console.log(sayHi(1, 44, 44,34));


// sayHi()
// sayHi(1, 44, 44,34)

// let per_a = 22
// let per_b = 11

// function summma(cost) {
//     cost = per_a + per_b
//     console.log(cost);
// }

// function minus(cost) {
//     cost = per_a - per_b
//     return cost
// }

// summma()
// console.log(minus());




// const yellowDiv = document.getElementById("yellow_color")
// const greenDiv = document.getElementById("green_color")
// const redDiv = document.getElementById("red_color")


// function color_yellow() {
//     alert('Зеленый')
// }

// function color_green() {
//     alert('Красный')
// }

// function color_red() {
//     alert('Желтый')
// }

// yellowDiv.addEventListener('click', color_yellow)
// greenDiv.addEventListener('click', color_green)
// redDiv.addEventListener('click', color_red)


// const btnHi = document.getElementById("btnHi")
// btnHi.addEventListener('click', sayHi)

// const inp = document.getElementById("inp")



// function sayHi() {
//     alert(rezult.value)
//     rezult.value = ""
// }

// function summma(cost) {
//     cost = num1 + num2
// }

// const btnHi = document.getElementById("btnHi")
// btnHi.addEventListener('click', sayHi)

// const num1 = document.getElementById("num1")
// const num2 = document.getElementById("num2")

// const rezult = document.getElementById('cost')


const num1 = document.getElementById("num1")
const num2 = document.getElementById('num2')
const btnSum = document.getElementById('btnSum')
const rezult = document.getElementById('rezult')

function cal() {

    const sum = Number(num1.value) + Number(num2.value)

    if (isNaN(sum)) {
        rezult.textContent = "Вы не ввели числа"
    }
    else {
        rezult.textContent = "Ответ: " + sum
    }

    // rezult.textContent = Number(num1.value) + Number(num2.value)

    
    // rezult.classList.toggle('err')
    rezult.classList.add('err')


}

btnSum.addEventListener('click', cal)



// if (condition) { // менять condition на значения в ''
//     console.log('Истина');

// } else {
// console.log('Ложь')
// }



// const div1 = document.getElementById('rezult')
// div1.textContent = 'Добрый день'
// div1.textContent = ''