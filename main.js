const url ='http://localhost:5050/fibonacci/'
const input = document.getElementById('input');
const form = document.querySelector('.form-control');

const btn = document.getElementById('btn');
const result = document.getElementById('result');
function onSpinner(){
  let spinnerOn = document.getElementById('result');
  spinnerOn.classList.remove('d-none');
}
function offSpinner(){
  const spinnerOff = document.getElementById('result');
  spinnerOff.classList.remove('spinner-border');
}
function Spinner(){
  const spinner = document.getElementById('result');
  spinner.innerText='';
  spinner.classList.add('spinner-border');
  spinner.classList.add('d-none');
}

btn.addEventListener('click',function(){
  Spinner();
  onSpinner();
  let urlComplete = url + input.value;
  
  if(input.value<=50 && input.value>=0){
  fetch(urlComplete)
  .then((response) => response.json())
    .then(function(data){ 
      offSpinner();
    console.log(data.result);
    result.innerHTML=data.result;
    
    })}
     else if(input.value>50){
      offSpinner();
      form.classList.add('text-danger');
      result.innerHTML="Can't be larger than 50";
      result.classList.add('text-danger');
      
        }
    else if(input.value<0){
      offSpinner();
      form.classList.add('text-danger');
      result.innerHTML="Can't be a negative number";
      result.classList.add('text-danger');
     }
     
    }
    )
    
