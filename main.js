const url ='http://localhost:5050/fibonacci/'
const input = document.getElementById('input');


const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click',function(){
  const urlComplete = url + input.value;

  fetch(urlComplete)
  .then((response) => response.json())
  .then(function(data){ 
    console.log(data.result);
    result.innerHTML=data.result;
    
  }
    );
})

