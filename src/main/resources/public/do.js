

let options=['envir','lead','auto'];

let DOM={
    sidebar:['envid','leadid','autoid','regid'],
    select:['envirselect','leadselect','autoselect'],
    envirLabel:['InstallSetup','ApplyPatch','UninstallPos'],
    envirinput:['linkin','versionin'],
    leadlabel:['OnlyLead','Professional','Starter','ProfessionalNT'],
    autolabel:['Regression','Smoke','ConnectPlus'],
    reglabel:['ClearRegistry']
}

let selectDwn=DOM.select;
let environmentLabel=DOM.envirLabel;
let sideBar=DOM.sidebar;
let envirInput=DOM.envirinput;
let leadLabel=DOM.leadlabel;
let autoLabel=DOM.autolabel;
let regLabel=DOM.reglabel;

let envirSelect=document.getElementById(selectDwn[0]);
let leadSelect=document.getElementById(selectDwn[1]);
let autoSelect=document.getElementById(selectDwn[2]);



document.getElementById(selectDwn[0]).addEventListener('change',(event)=>{
    setCircleText(event.target.value);
    let input=event.target.value;
    if(input===environmentLabel[2]){
        document.getElementById(envirInput[0]).style.display='none';
        document.getElementById(envirInput[1]).style.display='none';
    }else if(input===environmentLabel[1]){
        document.getElementById(envirInput[0]).style.display='block';
        document.getElementById(envirInput[1]).style.display='block';
    }else if(input===environmentLabel[0]){
            document.getElementById(envirInput[0]).style.display='block';
            document.getElementById(envirInput[1]).style.display='none';
    }
});

document.getElementById(selectDwn[1]).addEventListener('change',(event)=>{
    setCircleText(event.target.value);
});

document.getElementById(selectDwn[2]).addEventListener('change',(event)=>{
    setCircleText(event.target.value);
});

document.getElementById(sideBar[0]).addEventListener('click',()=>{
    disableAll();
    document.getElementById('envir').style.display='block';
    let text=envirSelect.options[envirSelect.selectedIndex].value;
    setCircleText(text);
});

document.getElementById(sideBar[1]).addEventListener('click',()=>{
    disableAll();
    document.getElementById('lead').style.display='block';
    let text=leadSelect.options[leadSelect.selectedIndex].value;
    setCircleText(text);
});


document.getElementById(sideBar[2]).addEventListener('click',()=>{
    disableAll();
    document.getElementById('auto').style.display='block';
    let text=autoSelect.options[autoSelect.selectedIndex].value;
    setCircleText(text);
});


document.getElementById(sideBar[3]).addEventListener('click',()=>{
    disableAll();
    document.getElementById('subtitle').style.display='none';
    setCircleText(regLabel[0]);
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

    if(value===environmentLabel[0]){
        let req=`${value} ${document.getElementById('linkin').value}`
        postRequest(req);
    }else if(value===environmentLabel[1]){
        let req=`${value} ${document.getElementById('linkin').value} ${document.getElementById('versionin').value}`;
        postRequest(req);
    }else{
        postRequest(value);
    }
});


function postRequest(req){
    let response=post(`/create?name=${req}`);
    console.log(response);
}


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

