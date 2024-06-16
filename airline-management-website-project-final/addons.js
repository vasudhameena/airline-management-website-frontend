
let buttons=document.querySelectorAll(".addonoptions button");
let content1=document.querySelector(".details");
let content2=document.querySelector(".advertisement");
let xtra=document.querySelector(".xtra");
let lost=document.querySelector(".lost");
let dine=document.querySelector(".dine")
let sports=document.querySelector(".sports");
let additional = document.querySelector("#additionalfare cost");
    let base = document.querySelector("#basefare cost");
    let total = document.querySelector("#totalfare cost");
   

    const urlParams = new URLSearchParams(window.location.search);
   
    let from=urlParams.get(`from`);
    let to=urlParams.get(`to`);
    let date=urlParams.get(`date`);
  
    
    let af=urlParams.get('af');
    let tf = urlParams.get('tf');
    let sa=urlParams.get('sa');
    let name = urlParams.get('name');
  
    let ZC=urlParams.get('ZC');
    let FDC=urlParams.get('FDC');
    let passengers=urlParams.get('passengers');
   
    let afinitial=urlParams.get('afinitial');
   

let departureTime = urlParams.get('departureTime');
let duration = urlParams.get('duration');
let arrivalTime = urlParams.get('arrivalTime');
let flightNo = urlParams.get('flightNo');
let stops = urlParams.get('stops');
let bf = urlParams.get('bf');
additional.innerText=af;
base.innerText=bf;
total.innerText=tf;

console.log(af,tf,sa,name,ZC,FDC,passengers,afinitial,departureTime,duration,arrivalTime,flightNo,stops,bf);
document.querySelector("#flight_number p").innerText=flightNo;
document.querySelector("#flight_time").innerText=departureTime+"-"+arrivalTime;
document.querySelector("#flight_duration").innerText=duration;
document.querySelector("#flight_stops").innerText=stops;
document.querySelector("#flight_journey").innerText=`${from} to ${to}`;
document.querySelector("#flight_date").innerText=date;

let addedx;
let addedsp;
let totalbaggage=15;
let lost_cost=95;
let priority_cost=78;
let lostbaggage=false;


let priorityaccess=false;
let foodselected=[];
let sportsitem=0;







for(let i=0;i<buttons.length;i++)
    {
        buttons[i].addEventListener("click",()=>{
              if(buttons[i].innerText==="ADD"){
                if(i!==3){
                    content1.classList.add("blur");
                    content2.classList.add("blur");
                    }
                    if(i===0){dine.style.display="block";}
                    else if(i===1){xtra.style.display="block";}
                    else if(i===2){lost.style.display="block";}
                     else if(i===3){
                        
                              buttons[i].style.background="#e7abab";
                              buttons[i].innerText="ADDED";
                              additional.innerText=(parseInt(additional.innerText)+(passengers*priority_cost)).toString();
                              total.innerText=(parseInt(total.innerText)+(passengers*priority_cost)).toString();
                              priorityaccess=true;
                     }
                    else if(i===4){sports.style.display="block";}
              }
              else{
                if(i===3){
                    buttons[i].style.background="#161a30";
                    buttons[i].innerText="ADD";
                    additional.innerText=(parseInt(additional.innerText)-(passengers*priority_cost)).toString();
                    total.innerText=(parseInt(total.innerText)-(passengers*priority_cost)).toString();
                    priorityaccess=false;
                }
                if(i===2){
                    buttons[i].style.background="#161a30";
                    buttons[i].innerText="ADD";
                    additional.innerText=(parseInt(additional.innerText)-(passengers*lost_cost)).toString();
                    total.innerText=(parseInt(total.innerText)-(passengers*lost_cost)).toString();
                   lostbaggage=false;

                }
              }
              
              
        });
    }
let closextra=document.querySelector(".xtra .fa-xmark");
let closelost=document.querySelector(".lost .fa-xmark");
let closedine=document.querySelector(".dine .fa-xmark");
let closesports=document.querySelector(".sports .fa-xmark");

closextra.addEventListener("click",()=>{
   xtra.style.display="none";
   content1.classList.remove("blur");
  content2.classList.remove("blur");
});
closelost.addEventListener("click",()=>{
    lost.style.display="none";
    content1.classList.remove("blur");
   content2.classList.remove("blur");
 });
 closedine.addEventListener("click",()=>{
    dine.style.display="none";
    content1.classList.remove("blur");
   content2.classList.remove("blur");
 });
 closesports.addEventListener("click",()=>{
    sports.style.display="none";
    content1.classList.remove("blur");
   content2.classList.remove("blur");
 });
 
let choosedine=document.querySelectorAll(".dine  button");
let quantity=document.querySelectorAll(".dine input");
let dinecost=document.querySelectorAll(".dine cost");
let foodname=document.querySelectorAll(".dine h3");

for(let i=0;i<choosedine.length;i++)
    {
        choosedine[i].addEventListener("click",()=>{
             if(quantity[i].value && choosedine[i].innerText==="Choose" )
                {  
                    choosedine[i].innerText="Selected";
                    choosedine[i].style.background="#e7abab";
                    foodselected.push([quantity[i].value,foodname[i].innerText]);
                    additional.innerText=(parseInt(additional.innerText)+(parseInt(quantity[i].value)*parseInt(dinecost[i].innerText))).toString();
                        total.innerText=(parseInt(total.innerText)+(parseInt(quantity[i].value)*parseInt(dinecost[i].innerText))).toString();
                }
                else if(quantity[i].value===""){
                    alert("Please enter Quantity first..");
                }
                else{
                    choosedine[i].innerText="Choose";
                    choosedine[i].style.background="bisque";
                    let ind=foodselected.indexOf([quantity[i].value,foodname[i].innerText]);
                    foodselected.splice(ind,1);
                    additional.innerText=(parseInt(additional.innerText)-(parseInt(quantity[i].value)*parseInt(dinecost[i].innerText))).toString();
                        total.innerText=(parseInt(total.innerText)-(parseInt(quantity[i].value)*parseInt(dinecost[i].innerText))).toString();
                }
                

        });
    }

   let donextra=document.querySelector(".xtra button");
   let xtracost=document.querySelectorAll(".xtra cost");
let checkin=document.querySelector("#checkin");
  
   donextra.addEventListener("click",()=>{
    
    const selectedxtra= document.querySelector('input[name="xtrakg"]:checked');
       if(selectedxtra){
        buttons[1].style.background="#e7abab";
        buttons[1].innerText="ADDED";
      addedx=parseInt(xtracost[parseInt(selectedxtra.id)].innerText);
       totalbaggage=(15+parseInt(selectedxtra.value)).toString();
       checkin.innerText=`Check-in:${totalbaggage}kg`
       
        additional.innerText=(parseInt(additional.innerText)+parseInt(xtracost[parseInt(selectedxtra.id)].innerText)).toString();
        total.innerText=(parseInt(total.innerText)+parseInt(xtracost[parseInt(selectedxtra.id)].innerText)).toString();
        xtra.style.display="none";
        content1.classList.remove("blur");
       content2.classList.remove("blur");
       }
      

   }) ;

   
    buttons[1].addEventListener("click",()=>{
        if(buttons[1].innerText==="ADDED"){
        additional.innerText=(parseInt(additional.innerText)-addedx).toString();
        total.innerText=(parseInt(total.innerText)-addedx).toString();
        buttons[1].style.background="#161a30";
        buttons[1].innerText="ADD";
        checkin.innerText='Check-in:15kg';
        totalbaggage=15;
        }
    });
 
let donelost=document.querySelector(".lost button");
let condition=document.querySelector("#condition");
donelost.addEventListener("click",()=>{
  if(condition.checked)
    {
        buttons[2].style.background="#e7abab";
        buttons[2].innerText="ADDED";
        lostbaggage=true;
        lost.style.display="none";
        content1.classList.remove("blur");
        content2.classList.remove("blur");
        additional.innerText=(parseInt(additional.innerText)+(passengers*lost_cost)).toString();
        total.innerText=(parseInt(total.innerText)+(passengers*lost_cost)).toString();
       
    }
});
   

let donesports=document.querySelector(".sports button");
let sportscost=document.querySelectorAll(".sports cost");


donesports.addEventListener("click",()=>{
 
 const selectedsports= document.querySelector('input[name="itemno"]:checked');
    if(selectedsports){
     buttons[4].style.background="#e7abab";
     buttons[4].innerText="ADDED";
   addedsp=parseInt(sportscost[parseInt(selectedsports.id)].innerText);
     additional.innerText=(parseInt(additional.innerText)+parseInt(sportscost[parseInt(selectedsports.id)].innerText)).toString();
     total.innerText=(parseInt(total.innerText)+parseInt(sportscost[parseInt(selectedsports.id)].innerText)).toString();
     sports.style.display="none";
     content1.classList.remove("blur");
    content2.classList.remove("blur");
    sportsitem=selectedsports.value;
    }
   

}) ;

buttons[4].addEventListener("click",()=>{
    if(buttons[4].innerText==="ADDED"){
    additional.innerText=(parseInt(additional.innerText)-addedsp).toString();
    total.innerText=(parseInt(total.innerText)-addedsp).toString();
    buttons[4].style.background="#161a30";
    buttons[4].innerText="ADD";
    sportsitem=0;
    
    }
});





document.querySelector(".submit").addEventListener('click', function() {
   af=additional.innerText;
   tf=total.innerText;
 
  const url=`seat.html?af=${af}&bf=${bf}&tf=${tf}&name=${name}&sa=${sa}&lostbaggage=${lostbaggage}&priorityaccess=${priorityaccess}&totalbaggage=${totalbaggage}&foodselected=${foodselected}&sportsitem=${sportsitem}&ZC=${ZC}&FDC=${FDC}&passengers=${passengers}&afinitial=${afinitial}&departureTime=${departureTime}&duration=${duration}&arrivalTime=${arrivalTime}&flightNo=${flightNo}&stops=${stops}&from=${from}&to=${to}&date=${date}`;

   
        window.location.href = url;
   
   
});
let memlink = document.querySelector(".membership-link");
memlink.addEventListener('mouseover', () => {
    memlink.style.color = '#E1ACAC';
  });

  memlink.addEventListener('mouseout', () => {
    memlink.style.color = '';
  });
  document.querySelector("#guidelines").addEventListener("click",()=>{
    window.location.href="guide.html";
  });