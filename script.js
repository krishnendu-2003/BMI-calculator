const form = document.querySelector('form');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // console.log(form)
  if(height === '' && weight === ''){
    results.innerHTML = "Please give a valid height and weight"
  }
  else if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = "Please give a valid height"
  }

  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = "Please give a valid weight"
  }
  else{
    const bmi = (weight/ ((height*height)/10000)).toFixed(2)

    if(weight < 18.6){
      results.innerHTML = `<span>BMI is ${bmi} and is under weight</span>`
    }else if(weight > 24.9){
      results.innerHTML = `<span>BMI is ${bmi} and is over weight</span>`

    } else {results.innerHTML = `<span>BMI is ${bmi}</span>`}

  }

});
