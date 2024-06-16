let card=document.querySelector(".card");
let upi=document.querySelector(".Upi");
let nb=document.querySelector(".netbank");
let options=document.querySelectorAll(".paymentoptions div");

const urlParams = new URLSearchParams(window.location.search);

let from=urlParams.get('from');
let to=urlParams.get('to');
let date=urlParams.get('date');
let passengers=urlParams.get('passengers');
let bf = urlParams.get('bf');
let af = urlParams.get('af');
let tf = urlParams.get('tf');
let sa = urlParams.get('sa');
let name = urlParams.get('name');
let namearr=name.split(",");
let lostbaggage = urlParams.get('lostbaggage');
let totalbaggage = urlParams.get('totalbaggage');
let priorityaccess = urlParams.get('priorityaccess');
let foodselected = urlParams.get('foodselected');
let sportsitem = urlParams.get('sportsitem');
let ZC=urlParams.get('ZC');
let FDC=urlParams.get('FDC');

let seat=urlParams.get('seat');

let afinitial=urlParams.get("afinitial");
let departureTime = urlParams.get('departureTime');

let arrivalTime = urlParams.get('arrivalTime');
let flightNo = urlParams.get('flightNo');
let stops = urlParams.get('stops');

document.querySelector(".flight_no").innerText=`Flight no: ${flightNo}`;
document.querySelector(".departtime").innerText=departureTime;
document.querySelector(".arrivetime").innerText=arrivalTime;

document.querySelector(".stopinfo").innerText=stops;
document.querySelector("#depart h3").innerText=from;
document.querySelector("#land h3").innerText=to;
document.querySelector("#depart p").innerText=date;
document.querySelector("#land p").innerText=date;

let seatfinal=document.querySelector(".seatfinal p");
let mealsfinal=document.querySelector(".mealsfinal p");
let assistancefinal=document.querySelector(".assistancefinal p");
let lostfinal=document.querySelector(".lostfinal p");
let priorityfinal=document.querySelector(".priorityfinal p");
let zcfinal=document.querySelector(".zcfinal p");
let fdcfinal=document.querySelector(".fdcfinal p");
let sportsfinal=document.querySelector(".sportsfinal p");
sportsfinal.innerText=sportsitem;
if(seat){
   seatfinal.innerText=seat;
}
 if(lostbaggage){
lostfinal.innerText="YES";
}
if(priorityaccess){
  priorityfinal.innerText="YES";
  }
if(ZC){
    zcfinal.innerText="YES";
  }
if(FDC){
    fdcfinal.innerText="YES";
  }
if(sa){
  assistancefinal.innerText=sa;
}
if(foodselected)
  {
    mealsfinal.innerText=foodselected;
  }


console.log(seat,foodselected,sa,lostbaggage,priorityaccess,ZC,FDC,sportsitem);


for(let i=0;i<options.length;i++){
    options[i].addEventListener("click",()=>{
     options[i].style.background="#e1abab";
     for(let j=0;j<options.length;j++)
        {
            if(j!==i)
                {
                    options[j].style.background="transparent";
                    reset(j);
                }
        }
        card.style.display="none";
        
        upi.style.display="none";
        nb.style.display="none";
        if(i===0)
            {
                card.style.display="block";
            }
        else if(i===1)
                {
                    upi.style.display="block";
                }
        else {
               nb.style.display="block";
             }

    });
}

let reset=(index)=>{
  if(index===1){
    let name=document.querySelector("#cardname");
    let no=document.querySelector("#cardnumber");
    let date=document.querySelector("#date");
    let cvv=document.querySelector("#CVV");
    name.value="";
    no.value="";
    date.value="";
    cvv.value="";
  }
  else if(index===2){
    let id=document.querySelector("#idupi");
    id.value="";
  }
  else{ 
    let radio_option=document.querySelectorAll("#nb");
    radio_option.forEach((opt)=>{
         opt.checked=false;
    });
  }
};

checkin=document.querySelector(".checkin");
if(totalbaggage===undefined){
  checkin.innerText=`Check-in:15kg`;
}
else{
  checkin.innerText=`Check-in:${totalbaggage}kg`;
}
passengerlist=document.querySelector(".passengerlist");
let p=[];
for(let i=0;i<passengers;i++)
  {
    p[i]=document.createElement("p");
    
    p[i].innerText=namearr[i];
    
    passengerlist.appendChild(p[i]);
  }

  charges=document.querySelectorAll(".price cost");
 
 charges[0].innerText=bf+"INR";
 charges[1].innerText=afinitial+"INR";
 charges[2].innerText=af-afinitial+"INR";
 charges[3].innerText="320INR";
 charges[4].innerText=(parseInt(bf)+parseInt(af))+"INR";

 let code=document.querySelector(".getcode input");
let codeclick=document.querySelector(".getcode button");
codeclick.addEventListener("click",()=>{

  if(code.value){
    if(code.value==="FLYAIRNEXUS15"){
       
      
           charges[4].innerText= (parseFloat(charges[4].innerText)-(0.15*parseFloat(charges[4].innerText)))+"INR";
    }
  }
  else{
    alert("Please enter the code first");
  }
});
let content1=document.querySelector(".advertisement");
let content2=document.querySelector(".contain");
let content3=document.querySelector(".addonandseat")
let addonandseatdisplay=document.querySelector(".addonandseatinfo");
addonandseatdisplay.addEventListener("click",()=>{
  console.log("click");
   content1.classList.add("blur");
   content2.classList.add("blur");
   content3.style.display="grid";
   
   
});
let close=document.querySelector(".fa-xmark");
close.addEventListener("click",()=>{
  content1.classList.remove("blur");
  content2.classList.remove("blur");
  content3.style.display="none";
});
document.querySelector("#guidelines").addEventListener("click",()=>{
  window.location.href="guide.html";
});