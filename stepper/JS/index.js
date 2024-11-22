var count = 1;
let nextState = document.querySelector('#next');
nextState.addEventListener('click', goForward);
let previousState = document.querySelector('#previous');
previousState.addEventListener('click', goBackward);
let text=document.querySelector('.text-message');
let eachStep = document.querySelectorAll('.step-number');
let eachLine = document.querySelectorAll('.line');

previousState.disabled = true; 
initialUpdate(); 

function goForward() {
    let eachStep = document.querySelectorAll('.step-number');
    let text=document.querySelector('.text-message');
    
    if (count < eachStep.length+1) {
        count++; 
    }
    if (count === eachStep.length) {
        text.textContent= 'Ready to get delivered!'
        nextState.textContent = 'Finish'; 
    }

    initialUpdate(); 
}

function goBackward() {
    let eachStep = document.querySelectorAll('.step-number');
    if (count > 1) {
        count--; 
    }

    if (count < eachStep.length) {
        nextState.textContent = 'Next';
        text.textContent= 'Complete Payment to Complete order.' 
    }
    initialUpdate(); 
}

function initialUpdate() {
    let eachStep = document.querySelectorAll('.step-number');
    let eachLine = document.querySelectorAll('.line');
    let text=document.querySelector('.text-message');
   
    if(count === 1){
        previousState.disabled =true;
    } 
    else{
        previousState.disabled=false;
    }
    if (count === eachStep.length) {
        nextState.textContent = 'Finish';
        text.textContent= 'Ready to get delivered!'

        if (nextState.disabled) {
            eachStep[eachStep.length - 1].style.backgroundColor = 'green';
            eachLine[eachLine.length - 1].style.backgroundColor = 'green';
        }
    } else {
        nextState.textContent = 'Next';
        text.textContent= 'Complete Payment to Complete order.'
    } 
    if(count===5){
        text.textContent='Order Delvired successfully!🎉 '
        nextState.textContent = 'Finish';
        eachStep[eachLine.length - 1].style.backgroundColor='green';
        nextState.disabled=true;
    }

    nextState.disabled = count > eachStep.length;
    eachStep.forEach((step, index) => {
        if (index + 1 < count) {
            step.style.backgroundColor = 'green'; 
            if(index<eachLine.length){
                eachLine[index].style.backgroundColor = 'green'; 
            } 
            step.innerHTML = '<span style="color: white;">✔</span>';
            step.style.color='white';
        } else if (index + 1 === count) {
            step.style.backgroundColor = 'blue';
            if(index<eachLine.length){
                eachLine[index].style.backgroundColor='#ddd';
            }
             step.textContent=index+1
             step.style.color='black'
        } else {
            step.style.backgroundColor = '#ddd'; 
            if(index<eachLine.length){
                eachLine[index].style.backgroundColor='#ddd';
            }
            step.textContent=index+1
            step.style.color='black'
          
        }
    }); 

}
