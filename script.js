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
        numbers(event);
    });
    Operator_container.addEventListener("click",function(event1){
        numbers(event1);
    });

}
Append_Buttons();
let expression="";
let operator_count=0;
let last_operator="";
function numbers(event){
    clickedButton=event.target;
    text=clickedButton.textContent.trim();

    if (/^[+\-x/%=]$/.test(text)){
        if(operator_count==1 ){
            eval_expression();

              }
        if(operator_count==0){
            if(text!="="){
            expression+=text;
            operator_count+=1; }       }   
        }   
    if(/^[1-9]$/.test(text)){

        expression+=text;
    } 
        console.log(expression);
    

    
}
function operators(event){
    clickedoperator=event.target;
}
function eval_expression(){
    let result=0;
    let op=""
    let str=""
    for (let ele of expression){
        if(/^[+\-x/%]$/.test(ele)){
            result=Number(str);

            op+=ele;
            str="";
        }       
        else{
            str+=ele;
        }
    }
    let operand2=Number(str);
    if(op=="+")result+=operand2;
    else if(op=="-")result-=operand2;
    else if(op=="x")result*=operand2;
    else if(op=="/")result/=operand2;
    else if(op=="%")result%=operand2;
    operator_count=0;
    expression=result;

}