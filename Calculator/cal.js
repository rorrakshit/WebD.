
let string="";
let btn = document.querySelectorAll("button");
Array.from(btn).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML ==='=')
        {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML =='C')
        {
            string ="";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML =='Back')
        {
            string = string.substring(0,string.length-1);
            document.querySelector('input').value = string;
        }
        else{
            // console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
Array.from(btn).forEach((button)=>{
    button.addEventListener('keypress',(e)=>{
        if(e.key ==='Enter')
        {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.key ==='Delete')
        {
            string ="";
            document.querySelector('input').value = string;
        }
        else if(e.key ==='Backspace')
        {
            string = string.substring(0,string.length-1);
            document.querySelector('input').value = string;
        }
        else{
            // console.log(e.target);
            string = string + e.key;
            document.querySelector('input').value = string;
        }
    })
})