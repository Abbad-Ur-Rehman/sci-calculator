let bar = document.querySelector('.row-2')
let back = document.querySelector('.cal-Back')
let input = document.querySelector('.input')
let output = document.querySelector('.output')
let button = document.querySelectorAll('button')
let data = document.getElementById('storeData')
let databtn = document.getElementById('storebtn')
let xmark = document.getElementById('icon')
let bordrs = document.getElementById('bordrs')
let buttons = document.getElementById('op')
let his = document.querySelector('.his')
let hero = document.getElementById('hero')
let circle1 = document.getElementById('cr2')
let circle2= document.getElementById('cr3')
let circle3 = document.getElementById('cr4')
let circle4 = document.getElementById('cr5')
let circle5 = document.getElementById('cr6')
let circle6 = document.getElementById('cr7')
let circle7 = document.getElementById('cr8')
let circle8 = document.getElementById('cr8')
let circle9 = document.getElementById('cr9')
let circle10 = document.getElementById('cr10')
let red = document.getElementById('red')
//===================
let id1 = document.getElementById('oprator1') 
let id2 = document.getElementById('oprator2') 
let id3 = document.getElementById('oprator3') 
let id4 = document.getElementById('oprator4') 
let id5 = document.getElementById('oprator5') 
let id6 = document.getElementById('oprator6') 
let id7 = document.getElementById('oprator7') 
let id8 = document.getElementById('oprator8') 
let history = document.getElementById('history');
//====================

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        if (button[i].innerHTML == 'C') {
            input.innerHTML = ""
            output.innerHTML = ""

        }
        else if (button[i].innerHTML == '=') {
           
            try{
                output.innerHTML = eval(input.innerHTML)
                output.innerHTML.toString().replace('*', 'x');
            }
            catch{
                output.innerHTML = "ERROR";
            }
            

            bordrs.innerHTML += input.innerHTML + " " + '=' +  " " + output.innerHTML  + '<br>';
        }

        else if (button[i].innerHTML == 'DEL') {
            input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length - 1)
        }
        else if (button[i].innerHTML == 'x') {
            input.innerHTML += '*'
        }

        else {
            input.innerHTML += button[i].innerHTML

        }

    })

}


//SCIENTIFIC METHODS
function sin() {
    output.innerHTML = Math.sin(input.innerHTML)
    return;
}
function tan() {
    output.innerHTML = Math.tan(input.innerHTML)

}
function cos() {
    output.innerHTML = Math.cos(input.innerHTML)

}
function pow() {
    output.innerHTML = Math.pow(input.innerHTML)

}
function sqrt() {
    output.innerHTML = Math.sqrt(input.innerHTML)

}
function pi() {
    output.innerHTML = '3.14150'

}
function e() {
    output.innerHTML = '2.7182818'

}

//=====================================


bar.addEventListener('click', () => {
    back.classList.toggle('none')
    bar.style.opacity = '1'
    bar.classList.toggle('none-2')



})



his.addEventListener('click', () => {
    const randomCode = Math.floor(Math.random() * 16777215);
    const randomColorCode = '#' + randomCode.toString(16)
    bar.style.backgroundColor = randomColorCode
    back.style.backgroundColor = randomColorCode
    id1.style.backgroundColor = randomColorCode
    id1.style.backgroundColor = randomColorCode
    id2.style.backgroundColor = randomColorCode
    id3.style.backgroundColor = randomColorCode
    id4.style.backgroundColor = randomColorCode
    id5.style.backgroundColor = randomColorCode
    id6.style.backgroundColor = randomColorCode
    id7.style.backgroundColor = randomColorCode
    id8.style.backgroundColor = randomColorCode
    input.style.color =randomColorCode
    output.style.color =randomColorCode
    red.style.backgroundColor = randomColorCode
    history.style.backgroundColor=randomColorCode
    


})


data.addEventListener('click' , ()=>{
history.classList.toggle('none-3')
history.style.display = 'block'
})

databtn.addEventListener('click', ()=>{
    bordrs.innerHTML = " "
})

icon.addEventListener('click',()=>{
history.style.display= 'none'
})









