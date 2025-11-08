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

}
Append_Buttons();