const Btn = document.getElementById('btn');
function fib(input){
    if(input==0)
    return 0;
    else if(input==1)
    return 1;
    
    return fib(input-1)+fib(input-2);
  }
  
  
  function callFib(){
    let input = document.getElementById("input").value;
    document.getElementById("result").innerHTML = fib(input);
    
  }
  Btn.addEventListener('click',callFib);

