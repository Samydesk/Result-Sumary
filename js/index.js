

let resultComponent = document.querySelector('.result-component');
let setateRange = document.getElementById('state-range');
let statusRandom = document.getElementById('status');
let paragraph = document.getElementById('resultado-paragraph');
let numbersCotainer = document.getElementById('numbers-container');

let reaction = document.getElementById('reaction');
let memory = document.getElementById('memory');
let verbal = document.getElementById('verbal');
let visual = document.getElementById('visual');
let buttonContinue = document.querySelector('button');
buttonContinue.addEventListener('click', _ => {
            location.reload();
})

setInterval("location.reload()",60000);

function randomValues(){
    let values = [];
    for (let i = 1; i <= 4; i ++){
       let randomNumbers = Math.round(Math.random() * 100);
        values.push(randomNumbers);
    }
    values.forEach((value, index) => {
        switch(index){
          case 0:
          reaction.innerText = value + ' / 100';
          break
          case 1:
          memory.innerText = value + ' / 100';
          break
          case 2:
          verbal.innerText = value + ' / 100';
          break
          case 3:
          visual.innerText = value + ' / 100';
          break
          default:
            'todo mal, ya valio queso'
        }
    })

    // sumar valores para despues sacar la media 

    const media = values.reduce((valuePrevious, currentvalue) => {
        return valuePrevious + currentvalue;
    }, 0)

    const result = Math.round (media / 4);

    

    if( result >= 75){
        resultComponent.classList.add('result-component');
        numbersCotainer.classList.add('numbers')
        resultComponent.classList.remove('result-component-warning', 'result-component-danger');
        setateRange.innerText = result;
        statusRandom.innerText = 'felicidades'
    }
    
    if (result <= 74 && result >= 43){
        resultComponent.classList.add('result-component-warning');
        numbersCotainer.classList.add('numbers-warning')
        resultComponent.classList.remove('result-component', 'result-component-danger');
        setateRange.innerText = result;
        statusRandom.innerText = 'normal'
        paragraph.innerText = 'estas en el rango'
    }

    if ( result <= 42){
        resultComponent.classList.add('result-component-danger');
        numbersCotainer.classList.add('numbers-danger')
        resultComponent.classList.remove('result-component', 'result-component-warning');
        setateRange.innerText = result;
        statusRandom.innerText = 'grave'
        paragraph.innerText = 'estas en el rango'
    }
}




window.addEventListener('load', randomValues);

