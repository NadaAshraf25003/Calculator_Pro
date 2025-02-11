var screen = document.querySelector('#screen');
var screen2 = document.querySelector('.ree');
var btn = document.querySelectorAll('.btn');
var darkk = document.getElementById('cont');

/*============ For getting the value of btn, Here we use for loop ============*/
for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}
// function dark(){
//     darkk.style.backgroundColor = 'rgba(63, 62, 62, 0.97)';

// }
function on(){
    screen.placeholder="0";
}
// -------------------------------------
function log(){
    screen2.value=Math.log10(eval(screen.value));
}
function ln(){
    screen2.value=Math.log(eval(screen.value));
}
// -------------------------------------
function sin(){
    screen2.value=Math.sin((eval(screen.value))*Math.PI/180);
}
function cos(){
    screen2.value=Math.cos((eval(screen.value))*Math.PI/180);
}
function tan(){
    screen2.value=Math.tan((eval(screen.value))*Math.PI/180);
}
// -------------------------------------
function sin_inv(){
    screen2.value=1/(Math.sin((eval(screen.value))*Math.PI/180));
}
function cos_inv(){
    screen2.value=1/(Math.cos((eval(screen.value))*Math.PI/180));
}
function tan_inv(){
    screen2.value=1/(Math.tan((eval(screen.value))*Math.PI/180));
}
// -------------------------------------
function sinh(){
    screen2.value=Math.sinh((eval(screen.value))*Math.PI/180);
}
function cosh(){
    screen2.value=Math.cosh((eval(screen.value))*Math.PI/180);
}
function tanh(){
    screen2.value=Math.tanh((eval(screen.value))*Math.PI/180);
}
// -------------------------------------
function pow(value) {
    screen2.value = Math.pow(screen.value, value);
}

function sqrt() {
    screen2.value = Math.sqrt(screen.value, 2);
}

// -------------------------------------
function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    screen2.value = f;
}
// -------------------------------------
function pi() {
    if(screen.value==''){
        screen2.value = 3.14159265359;
        screen.value='π';
    }
    else
    screen2.value = 3.14159265359 *eval(screen.value);
}

function e() {
    if(screen.value==''){
        screen2.value = 2.71828182846;
    }
    else 
    screen2.value = 2.71828182846*eval(screen.value) ;
}
function percent(){
    screen2.value=screen.value/100;
    screen.value += "%"
}

// -------------------------------------
function result(){
    screen2.value=eval(screen.value);
}
// -------------------------------------
// function ans(){
//     // screen.value='ANS';
//     screen2.value=screen.value;
// }
// -------------------------------------
function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
    screen2.value = screen2.value.substr(0, screen.value.length - 1);
    res =[];
}
function del() {
    screen.value = '';
    screen2.value = '';
    res =[];
}
