const url ='http://localhost:5050/fibonacci/'
const input = document.getElementById('input');
const form = document.querySelector('.form-control');
const urlResults = 'http://localhost:5050/getFibonacciResults';
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const resultsList = document.getElementById('resultsList');
const messageError = document.getElementById('message');
const checkBox = document.getElementById('checkbox');
function fibonacci(inputNumber){
    let fib = [0, 1];
    let data = [];
    
    for(let i = 2; i <= inputNumber; i++) {
      fib[i] = fib[i - 1] + fib[i - 2]; 
      data.push(fib[i]);
    }
    
    return data[data.length-1];
      
}
function message (messageInput){
  offSpinner();
      messageError.classList.remove('d-none');
      messageError.innerHTML=messageInput;
      form.classList.remove('text-dark');
      form.classList.add('text-danger');
}
function onSpinner(){
  let spinnerOn = document.getElementById('spinner');
  spinnerOn.classList.remove('d-none');
  result.classList.add('d-none');
}
function offSpinner(){
  const spinnerOff = document.getElementById('spinner');
  spinnerOff.classList.add('d-none');
}

function onSpinnerResults(){
    let spinnerOnResults = document.getElementById('spinnerResults');
    spinnerOnResults.classList.remove('d-none');
    resultsList.classList.add('d-none');
}
function offSpinnerResults(){
    const spinnerOffResults = document.getElementById('spinnerResults');
    spinnerOffResults.classList.add('d-none');
}

btn.addEventListener('click',function(){
  onSpinner();
  onSpinnerResults();
  let urlComplete = url + input.value;
  
  if(checkBox.checked == true){
  if(input.value<=50 && input.value>=0 && input.value!=42 ){
  fetch(urlComplete)
  .then((response) => {
    return response.json()
  })
    
    .then(function(data){ 
      offSpinner();
      result.classList.add('text-dark');
      form.classList.add('text-dark');
      result.classList.remove('d-none');
    result.innerHTML=data.result;
    messageError.classList.add('d-none');
    
    })
  
  }
     else if(input.value>50){
      message("Can't be larger than 50");
      
        }
    else if(input.value<0){
      message("Can't be a negative number");
     }
     else{
        offSpinner();
        result.classList.remove('d-none');
        messageError.classList.add('d-none');
            result.classList.add('text-dark');
            form.classList.add('text-dark');
        result.innerHTML = fibonacci(input.value);
     }
    }else{
        if(input.value<=50 && input.value>=0){
            offSpinner();
            messageError.classList.add('d-none');
            result.classList.add('text-dark');
            form.classList.add('text-dark');
            result.classList.remove('d-none');
            result.innerHTML = fibonacci(input.value);
        }else if(input.value>50){
            message("Can't be larger than 50");
            
              }
          else if(input.value<0){
            message("Can't be a negative number");
           }
    }

    fetch(urlResults)
     .then((response) =>{
        return response.json()
     })
     .then(function(data){
        offSpinnerResults();
        let res = "";
        const slicedArray= data.results.sort(function(a,b){return b.createdDate-a.createdDate}).slice(0,10);
        for(let i=0; i<slicedArray.length;i++){
          let date = new Date(data.results[i].createdDate);
            res += "<li>"+'The Fibonacci of '+"<strong>"+slicedArray[i].number+"</strong>"+ ' is '+"<strong>"+slicedArray[i].result+"</strong>"+'. Calculated at: '+date+"</li>";
            
        }
        resultsList.classList.remove('d-none');
        resultsList.innerHTML = res;
        
        
     })





    }
    )

    


