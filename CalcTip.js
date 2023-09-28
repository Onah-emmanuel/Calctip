const amount = document.querySelector('.label1 input');
const percent = document.querySelectorAll('.amount h2');
const people = document.getElementById('pnum');
const total = document.getElementsByClassName('men');
const mee = document.querySelectorAll('.div3 div h2');
const m = document.getElementById('mm');
const but = document.getElementById('ne');
const reset = document.getElementById('reset');

reset.onclick = () => {
  m.textContent = '$0.00';
  but.textContent = '$0.00';
  for (let i = 0; i < percent.length; i++) percent[i].style.backgroundColor = 'hsl(183, 100%, 15%)';
  amount.value = '';
  people.value = '';
}


let percentage;

function func() {
  const txtValue = amount.value;
  const numsValue = people.value;
  const co = txtValue * percentage;
  const col = co / numsValue;
  m.textContent = '$' + col;
  but.textContent = '$' + co;
   
 }

 for (let i = 0; i < percent.length; i++) {
  percent[i].addEventListener('click', function() {
    var cont = this.innerText;
    for (let i = 0; i < percent.length; i++) percent[i].style.backgroundColor = 'hsl(183, 100%, 15%)';
    this.style.backgroundColor = 'hsl(172, 67%, 45%)';
   percentage = Number( cont.split('%')[0]) / 100;
   
    
  })

 }




