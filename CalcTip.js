const amount = document.querySelector('.label1 input');
const percent = document.querySelectorAll('.amount h2');
let people = document.getElementById('pnum');
const total = document.getElementsByClassName('men');
const mee = document.querySelectorAll('.div3 div h2');
const m = document.getElementById('mm');
const can = document.getElementById('cant');
const but = document.getElementById('ne');
const reset = document.getElementById('reset');
const empty = document.getElementById('emp');

reset.onclick = () => {
  m.textContent = '$0.00';
  m.style.color = 'hsl(172, 67%, 45%)';

  but.textContent = '$0.00';
  for (let i = 0; i < percent.length; i++) percent[i].style.backgroundColor = 'hsl(183, 100%, 15%)';
  amount.value = '';
  people.value = '';
  can.style.visibility = 'hidden';
  emp.style.visibility = 'hidden';


}


let percentage;

function func() {
  const txtValue = amount.value;
  const numsValue = people.value;
  const co = txtValue * percentage;
  const col = co / numsValue;
  m.textContent = '$' + Math.trunc(col) ;
  but.textContent = '$' + Math.trunc(co) ;

  

  switch(txtValue) {

    case '0':
      emp.style.visibility = 'visible';
      m.textContent = '$0.00';
      but.textContent = '$0.00';

    break;

    case '':
        emp.style.visibility = 'visible';
        m.textContent = '$0.00';
      but.textContent = '$0.00';

    break; 

    case '1':
          emp.style.visibility = 'hidden';
          m.style.color = 'hsl(172, 67%, 45%)';    
    break;

    default:
        emp.style.visibility = 'hidden';
        m.style.color = 'hsl(172, 67%, 45%)';    
  };

  switch(numsValue) {

    case '0':
      can.style.visibility = 'visible';
      m.textContent = '$0.00';
    break;

    case '':
        can.style.visibility = 'visible';
        m.textContent = '$0.00';
    break; 

    

    default:
        can.style.visibility = 'hidden';
        m.style.color = 'hsl(172, 67%, 45%)';    
  };


  
    
}

 for (let i = 0; i < percent.length; i++) {
  percent[i].addEventListener('click', function() {
    var cont = this.innerText;
    for (let i = 0; i < percent.length; i++) percent[i].style.backgroundColor = 'hsl(183, 100%, 15%)';
    this.style.backgroundColor = 'hsl(172, 67%, 45%)';
   percentage = Number( cont.split('%')[0]) / 100;
   
    
  })

 }




