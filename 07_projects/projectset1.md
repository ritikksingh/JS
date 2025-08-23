# Projects Related to DOM

## project Link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-adjpm22m?file=index.html)

#Solution Code 

## project 1


``` javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')
buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id == 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id == 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  })
});


```

## Project 2

```javascript


const form = document.querySelector('form')

// this usecase will give you empty value
//  const height= parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault()
 const height= parseInt(document.querySelector('#height').value)
const weight= parseInt(document.querySelector('#weight').value)
const results= document.querySelector('#results')

if( height == '' || height<0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height"
}else if( weight == '' || weight<0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
} else {
  const BMI=   (weight / ((height*height)/10000)).toFixed(2)
  //show the result
  results.innerHTML= `<span>${BMI}</span>`
  if(BMI<18.6){
    message.innerHTML= `<span>Under Weight</span>`
}else if(BMI>=18.6 && BMI<24.9){
    message.innerHTML= `<span>Normal range </span>`
}else if(BMI>=24.9){
    message.innerHTML= `<span>Over Weight </span>`
}
}
})

```
