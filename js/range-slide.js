var slider = document.getElementById('myRange');
var slider2 = document.getElementById('myRange2');
var slider3 = document.getElementById('myRange3');

var output = document.getElementById('value');
var output2 = document.getElementById('value2');
var output3 = document.getElementById('value3');

var selector = document.getElementById("selector");
var selector2 = document.getElementById("selector2");
var selector3 = document.getElementById("selector3");


output.innerHTML = slider.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;

let x = 0, y = 0, z = 0;

slider.oninput = function(){
    output.innerHTML = this.value;
    x = this.value;
    price.innerHTML = '$' + (Number(x) + Number(y) + Number(z)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    selector.style.left = this.value+ "%";
}
slider2.oninput = function(){
    output2.innerHTML = (Number(this.value) * 400).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    y = this.value * 400;
    price.innerHTML = '$' + (Number(x) + Number(y) + Number(z)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    selector2.style.left = this.value+ "%";
}
slider3.oninput = function(){
    output3.innerHTML = (Number(this.value) * 60).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    z = this.value * 60;
    price.innerHTML = '$' + (Number(x) + Number(y) + Number(z)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    selector3.style.left = this.value+ "%";
}

slider.addEventListener("mousemove", function(){
    var x = slider.value;
    var color = 'linear-gradient(90deg, rgb(63,208,201)' + x + '%, rgb(241,259,255)' + x + '%)';
    slider.style.background = color;
})
slider.addEventListener("touchmove", function(){
    var x = slider.value;
    var color = 'linear-gradient(90deg, rgb(63,208,201)' + x + '%, rgb(241,259,255)' + x + '%)';
    slider.style.background = color;
})

slider2.addEventListener("mousemove", function(){
    var x = slider2.value;
    var color = 'linear-gradient(90deg, rgb(63,208,201)' + x + '%, rgb(241,259,255)' + x + '%)';
    slider2.style.background = color;
})
slider2.addEventListener("touchmove", function(){
    var x = slider2.value;
    var color = 'linear-gradient(90deg, rgb(63,208,201)' + x + '%, rgb(241,259,255)' + x + '%)';
    slider2.style.background = color;
})


slider3.addEventListener("mousemove", function(){
    var x = slider3.value;
    var color = 'linear-gradient(90deg, rgb(63,208,201)' + x + '%, rgb(241,259,255)' + x + '%)';
    slider3.style.background = color;
})
slider3.addEventListener("touchmove", function(){
    var x = slider3.value;
    var color = 'linear-gradient(90deg, rgb(63,208,201)' + x + '%, rgb(241,259,255)' + x + '%)';
    slider3.style.background = color;
})

const price = document.getElementById("demo");
const range = document.getElementById("myRange");
const range2 = document.getElementById("myRange2");
const range3 = document.getElementById("myRange3");



// range.addEventListener("input", function () {
//     console.log(range.value);
// });
// range2.addEventListener("input", function () {
//     y = range2.value;
//     console.log(y);
// });
// range3.addEventListener("input", function () {
//     z = range3.value;
//     console.log(z);
// });

