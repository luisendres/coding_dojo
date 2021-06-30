var count = 0;
var count1 = 0;
var count2 = 0;

var counter = document.querySelector("#count");
var counter1 = document.querySelector("#count1");
var counter2 = document.querySelector("#count2");

console.log(counter);

function like() {
    count++;
    counter.innerText = count + " like(s)"
    console.log(count);
}

function like1() {
    count1++;
    counter1.innerText = count1 + " like(s)"
    console.log(count);
}

function like2() {
    count2++;
    counter2.innerText = count2 + " like(s)"
    console.log(count);
}