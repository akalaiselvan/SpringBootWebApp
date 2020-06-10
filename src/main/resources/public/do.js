

let options=['envir','lead','auto'];

let envirSelect=document.getElementById('envirselect');
let leadSelect=document.getElementById('leadselect');
let autoSelect=document.getElementById('autoselect');

document.getElementById('envid').addEventListener('click',()=>{
    disableAll();
    document.getElementById('envir').style.display='block';
    let text=envirSelect.options[envirSelect.selectedIndex].value;
    setCircleText(text);
});

document.getElementById('envirselect').addEventListener('change',(event)=>{
    setCircleText(event.target.value);
});

document.getElementById('leadselect').addEventListener('change',(event)=>{
    setCircleText(event.target.value);
});

document.getElementById('autoselect').addEventListener('change',(event)=>{
    setCircleText(event.target.value);
});


document.getElementById('leadid').addEventListener('click',()=>{
    disableAll();
    document.getElementById('lead').style.display='block';
    let text=leadSelect.options[leadSelect.selectedIndex].value;
    setCircleText(text);
});


document.getElementById('autoid').addEventListener('click',()=>{
    disableAll();
    document.getElementById('auto').style.display='block';
    let text=autoSelect.options[autoSelect.selectedIndex].value;
    setCircleText(text);
});


document.getElementById('regid').addEventListener('click',()=>{
    disableAll();
    document.getElementById('subtitle').style.display='none';
    setCircleText('Clear Registry');
});

function disableAll(){
    options.forEach(element => {
        document.getElementById(element).style.display='none';
        
    });
    document.getElementById('subtitle').style.display='block';
}

function setCircleText(cont){
    document.querySelector('.ctext').textContent=cont;
}

document.getElementById('start').addEventListener('click',(event)=>{
    let value=document.querySelector('.ctext').textContent;
    console.log('Selected option : '+value);
    //console.log(get('/testJava'));
    let str=post('/create?name='+value);
    console.log(str);
})



function get(url){
    let http=new XMLHttpRequest();
    http.open("GET",url,false);
    http.send(null);
    return http.responseText;
}

function post(url){
    let http=new XMLHttpRequest();
    http.open("GET",url,false);
    http.send(null);
    return http.responseText;
}

