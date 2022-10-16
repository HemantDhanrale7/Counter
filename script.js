
var numplace = document.getElementById('num');
var increment_btn = document.getElementById('btn_increment');
var decrement_btn = document.getElementById('btn_decrement');
var reset_btn = document.getElementById('btn_reset');

var number = 0;


increment_btn.disabled = false;
decrement_btn.disabled = true;
reset_btn.disabled = true;



increment_btn.addEventListener('click', function () {
    number++;
    numplace.innerHTML = number;
    decrement_btn.disabled = false;
    reset_btn.disabled = false;

   
})


decrement_btn.addEventListener('click', function () {
    number--;
    numplace.innerHTML = number;

    if (number < 1) {
        number = 0;
        numplace.innerHTML = number;
        reset_btn.disabled = true;
    }

})


reset_btn.addEventListener('click', function () {
    number = 0;
    numplace.innerHTML = number;
    decrement_btn.disabled = true;
})

