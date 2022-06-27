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
  .then((response) => {
    if(!response.ok){
      return response.text()
      .then(errorText =>{throw new Error(errorText)})
    }
    return response.json()
  })
    
    .then(function(data){ 
      offSpinner();
      result.classList.add('text-dark');
      form.classList.add('text-dark');
    console.log(data.result);
    result.innerHTML=data.result;
    messageLarger.classList.add('d-none');
    messageNegative.classList.add('d-none');
    })

    .catch(error => {
      offSpinner();
      messageNegative.classList.add('d-none');
      messageLarger.classList.add('d-none');
      result.classList.remove('text-dark');
      result.classList.add('text-danger');
      result.innerText = 'Server Error: '+error.message;
      
    })
  
  }
     else if(input.value>50){
      offSpinner();
      messageNegative.classList.add('d-none');
      const messageLarger = document.getElementById('messageLarger');
      messageLarger.classList.remove('d-none');
      form.classList.remove('text-dark');
      form.classList.add('text-danger');
      
        }
    else if(input.value<0){
      offSpinner();
      messageLarger.classList.add('d-none');
      const messageNegative = document.getElementById('messageNegative');
      messageNegative.classList.remove('d-none');
      form.classList.remove('text-dark');
      form.classList.add('text-danger');
     }
     
    }
    )
