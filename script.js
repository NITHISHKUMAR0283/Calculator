function Append_Buttons(){
    let buttons_text="DEL C % 7 8 9 4 5 6 1 2 3 0 . =".split(" ");
    let operator_text="/ x - +".split(" ");
    let Button_container=document.getElementById("numbers");
    let Operator_container=document.getElementById("operators");
    for(let i of buttons_text){
        let  button=document.createElement("Button");
        button.textContent=i;
        Button_container.appendChild(button);
    }
    for(let i of operator_text){
        let button=document.createElement("Button");
        button.textContent=i;
        Operator_container.appendChild(button);
    }
    Button_container.addEventListener("click",function(event){
        backend(event);
    });
    Operator_container.addEventListener("click",function(event1){
        backend(event1);
    });

}
Append_Buttons();
let display=document.getElementById("display");
let operand1=0;
let operand2=0;
let operand='';
let count=0;
let result;
function backend(event){
    check_operator();//will remove any operator prior
    let clickedButton=event.target;
    let text=clickedButton.textContent;

    if(/^[0-9]$/.test(text)){
        if(isOverflownHoriz(display)){
            display.scrollLeft=display.scrollWidth + display.clientWidth+parseInt(getComputedStyle(display).paddingRight);

        }
        
        display.textContent+=text;//add integers
    }

    else if (/^[+\-=/%x]$/.test(text)){
        if(count==0){
        operand1=Number(display.textContent);
        console.log("ehheehhe")

        count+=1}
        else{
            if(display.textContent!=result){
            operand2=Number(display.textContent);
            console.log(typeof operand1,typeof operand2);
            display.textContent=evaluator();
            operand1=Number(display.textContent);
            count+=1;}

        }
        console.log("operand1",operand1,"operand2:",operand2,"operand");
        if(text=="="){
            display.textContent=result;
            console.log(result);}
        else{
            display.textContent=text
        }

    }

    else if (text=="DEL"){
            let input=display.textContent;
            display.textContent=input.slice(0,-1);
        }
    else if (text=="C"){
        operand1=0;
        operand2=0;
        operand='';        
        count=0;
        display.textContent=""
        console.log("Reseted")
    }
}
function check_operator(){
    let content=display.textContent
    if (/^[+\-=/x%]$/.test(content)){
        display.textContent="";
        operand=content;

    }
}
function evaluator(){

    if(operand=="+")result=operand1+operand2;
    else if(operand=="-")result=operand1-operand2;
    else if(operand=="x")result=roundTo((operand1*operand2),2);
    else if(operand=="/")result=roundTo((operand1/operand2),2);
    else if(operand=="%")result=operand1%operand2;
    return result;
}
function roundTo(num, decimals = 0) {
  if (!isFinite(num)) return num;           
  const factor = Math.pow(10, decimals);
  return Math.round((num + Number.EPSILON) * factor) / factor;
}
function isOverflownHoriz(el) {
  return el.scrollWidth > el.clientWidth;
}
