
// var num =  document.getElementById('display');
// function  math(e){
//     // e += num.innerHTML;
//     console.log(e)
// }

function upDateClock(){
    var now = new Date();
    var hours = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var tod = '';
      
    if(minute < 10){
      minute = '0' + minute;
    }
    else{
      minute = minute ;
    }
    
    if(second < 10){
      second = '0' + second;
    }
    else{
      second = second ;
    }

    if (hours < 12) {
      tod = "AM"
    }
    else {
      tod = "PM";
    }

    if (hours == '0') {
      hours = 12;
    }
    else {
      hours = hours;
    }
    var time = hours + ":" + minute + ":" + second + " " + tod;
   document.getElementById('see').innerHTML = time;
};
upDateClock();
 setInterval('upDateClock()', 1000)

var ase =  document.getElementById('display');
var result = ''
function math(e){
    ase.value += e;
   
}

function equall(){
    output.value = eval(ase.value);
}

function del(e){
// if (event.target.value == 'off') {
//   event.target.value = 'on'
//   clea.innerHTML = 'on'
//   ase.value = '0'

// }
// else{
//   e.target.value = 'off'
//   clea.innerHTML = 'off'
//   ase.value = ''
// output.value = ''
// }
    ase.value = ase.value.slice(0, -1);
    output.value = '';
}

function can(){
    ase.value = ''
    output.value = '';
}































// // const display = document.querySelector('#display')

// // function math(e){
// //    const clickdBtVval = e.target.value;
    
// //    if (clickdBtVval == '=') {
// //       if (document.getElementById('display').value != '') {
// //          document.getElementById('display').value = eval(display.value)
// //       }
// //    }
// //    else if(clickdBtVval == 'C'){
// //       document.getElementById('display').value = '';
// //    }
// //    else {
// //       document.getElementById('display').value += clickdBtVval;
// //    }
// // }

// // var a = '';
// // var b =''
// // var c =  ''
// // alert(a || b || c || 'anonymous')
// // true || alert('prin')
// // false || alert('print')

// // alert(1 && 2 && 3 && 4)
