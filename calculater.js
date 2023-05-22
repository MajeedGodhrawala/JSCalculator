let input = "0";
let digit = "";
let record = "";
let record_object = {};
let record_array = [];
let history_record = "";
const historyLine =  document.getElementById('record');
const textInput = document.getElementById('input');
const inputdiv = document.getElementById('inputans');

const operators = ['+', '-', '/', '*', '^'];
const numbers = ['1','2','3','4','5','6','7','8','9','0','.'];

function numberCall(num){
    // digit = num;
    validation(input);
    if(num == "." && display.includes('.')) {
        input = document.getElementById("input").innerHTML += "";
    }  else {
        input = document.getElementById("input").innerHTML += num;
    }
}

function operatorCall(op){
   if(operators.includes(((historyLine.innerText).slice(-1)))) {
        record = historyLine.innerText = historyLine.innerText.slice(0, historyLine.innerText.length - 1);
        record = historyLine.innerText += op; 
        record_object.op = op;
        record_object.first_value = record_object.slice(0,-1);    
   } else {
        if(input){
          record_object.first_value = input;
          input = "";
        }
        if(record){
            textInput.innerText = "";
        }
        if(history_record){
            record_object.first_value = history_record;
            record = historyLine.innerText = "";
            record = historyLine.innerText += history_record + "" + op;
            history_record = '';
            record_object.op = op;

        } else {
        record = historyLine.innerText += textInput.innerText + "" + op;
        textInput.innerText = '';
        record_object.op = op;    
        console.log(record_object.op);
        } 
   }
}

function calculate()
{
    if(input) {
    let first_value =  parseFloat(record_object.first_value);
    textInput.innerHTML = "";
    record_object.second_value = input;
    let second_value =  parseFloat(record_object.second_value);
    
    switch(record_object.op) {
        case "+":
                record = textInput.innerHTML = first_value + second_value  ; 
          break;
        case "-":
            record = textInput.innerHTML = first_value - second_value  ;
          break;
        case "*":
            record = textInput.innerHTML = first_value * second_value  ;  
        break;
        case "/":
                if(first_value == '1' && second_value == '0') {
                        document.getElementById("errorbox").innerHTML = "Can't Divide With Zero !";
                    } else {
                        record = textInput.innerHTML = first_value / second_value  ; 
                    } 
        break;
        case "^":
            record = textInput.innerHTML = first_value ** second_value  ;  
        break;
        default:
                record = textInput.innerHTML = "";
      }
      record_object.final_ans = parseFloat(record);
      console.log(record_object);
      record_array.push(record_object); 
      historyLine.innerText = record ; 
      display = record;
      record_object = {};
    } else {
        document.getElementById("errorbox").innerHTML = "Nothing To Calculate !";
    }
}

function getData(data){
        history_record = document.getElementById('input').innerHTML = record_array[data].final_ans;
        document.getElementById('record').innerHTML = record_array[data].first_value + " " + record_array[data].op + " " + record_array[data].second_value;
}

function deleteLastCharacter(){
    if(input) {
    input = input.slice(0, -1);
    input = document.getElementById("input").innerHTML = input;
    validation(input);
    } else {
        document.getElementById("errorbox").innerHTML = "Nothing To Clear!";
    }
}

function deleteData(){
    PictureInPictureWindow = "";
    record = "";
    record_object.first_value = "";
    record_object.op = "";
    record_object.second_value = "";
    record_object.final_ans = "";

    input = document.getElementById("input").innerHTML = input;
    record = document.getElementById("record").innerHTML = record;
    validation(input);
    return input = 0;
}

function validation(input){
    if(input.length >= 10) {
        document.getElementById("errorbox").innerHTML = "Max 10 digit only";
        input = document.getElementById("input").innerHTML = input;
    } else {
        document.getElementById("errorbox").innerHTML = "";
    }
}

function themeControlldark(){
    document.getElementById('lightmode').style.display = 'none';
    document.getElementById('darkmode').style.display = 'block';
    document.getElementById('calbody').style.backgroundColor = '#ffffffe0';
    document.getElementById('caldesign').style.backgroundColor = 'white';
    const elements = document.getElementsByClassName('calbtn');
    for (let i = 0; i < (elements.length)-1; i++) {
      elements[i].style.backgroundColor = '#ffffffe0';
      elements[i].style.color = 'black';
    }
    document.getElementById('inputrecord').style.color = 'black';
    document.getElementById('inputans').style.color = 'black';

}

function themeControlllight(){
    document.getElementById('darkmode').style.display = 'none';
    document.getElementById('lightmode').style.display = 'block';
    document.getElementById('calbody').style.backgroundColor = ' #262626';
    document.getElementById('caldesign').style.backgroundColor = '#000000';
    const elements = document.getElementsByClassName('calbtn');
    for (let i = 0; i < (elements.length)-1; i++) {
      elements[i].style.backgroundColor = '#262626';
      elements[i].style.color = 'white';
    }
    document.getElementById('inputrecord').style.color = 'white';
    document.getElementById('inputans').style.color = 'white';
    
}

function showHistory()
{
    document.getElementById('show').style.display = "none"
    document.getElementById('hide').style.display = "block"
    document.getElementById('animation').style.display = 'block';
    document.getElementById('historyinfo').innerHTML = "";
    record_array.forEach((arr,index) => {
        if(!arr.first_value || !arr.second_value || !arr.final_ans){
            document.getElementById('historyinfo').innerHTML = "";
        } else {
        document.getElementById('historyinfo').innerHTML += "<li onclick='getData("+ index +");' style='border:1px solid; border-radius:10px; padding-left:5px; margin-top:4px;'><b>" + arr.first_value + " " + arr.op + " " + arr.second_value + "=" + " " + "<span style='color:green;'>" + arr.final_ans + "</span></b></li>";
        }
    });
    // for(let index=0;index < record_array.length;index++)
    //   {
    //   document.getElementById('historyinfo').innerHTML += "<li onclick='getData(this);' style='border:1px solid; border-radius:10px; padding-left:5px; margin-top:4px;'><b>" + record_array[index].first_value + " " + record_array[index].op + " " + record_array[index].second_value + "=" + " " + "<span style='color:green;'>" + record_array[index].final_ans + "</span></b></li>";
    //   }
}

function hideHistory()
{
    document.getElementById('show').style.display = "block"
    document.getElementById('hide').style.display = "none"
    document.getElementById('animation').style.display = 'none';
}

function clearHistory(){
    record_array = [];
    document.getElementById('historyinfo').innerText = "There's Nothing Saved In Memmory !"
}

function focusonInput(){
    inputdiv.focus();
}

inputdiv.focus();

inputdiv.addEventListener('keydown', (event) => {
    if(numbers.includes(event.key)){
        numberCall(event.key);
    }
    if(operators.includes(event.key)){
        operatorCall(event.key);
    }
    if(event.key == "Enter"){
        calculate();
    }
    if(event.key == "Backspace"){
        deleteLastCharacter()
    }
});

