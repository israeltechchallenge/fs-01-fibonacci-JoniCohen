const url ='http://localhost:5050/fibonacci/'
const input = document.getElementById('input');
const form = document.querySelector('.form-control');
const urlResults = 'http://localhost:5050/getFibonacciResults';
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const resultsList = document.getElementById('resultsList');
const messageError = document.getElementById('message');
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
      result.classList.remove('d-none');
    result.innerHTML=data.result;
    messageError.classList.add('d-none');
    
    })

    .catch(error => {
      offSpinner();
      messageError.classList.add('d-none');
      result.classList.remove('d-none');
      result.classList.remove('text-dark');
      result.classList.add('text-danger');
      result.innerText = 'Server Error: '+error.message;
      
    })
  
  }
     else if(input.value>50){
      message("Can't be larger than 50");
      
        }
    else if(input.value<0){
      message("Can't be a negative number");
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

    


