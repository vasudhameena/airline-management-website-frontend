
let zc=document.querySelector(".zerocancellation input");
let fdc=document.querySelector(".freedatechange input");
let additional=document.querySelector("#additionalfare cost");
let total=document.querySelector("#totalfare cost");
let base=document.querySelector("#basefare cost");
let ZC=false;
let FDC=false;




const urlParams = new URLSearchParams(window.location.search);

let from=urlParams.get(`from`);
let to=urlParams.get(`to`);
let date=urlParams.get(`date`);
let passengers=urlParams.get(`passengers`);
let departureTime = urlParams.get('departureTime');
let duration = urlParams.get('duration');
let arrivalTime = urlParams.get('arrivalTime');
let flightNo = urlParams.get('flightNo');
let stops = urlParams.get('stops');
let price = urlParams.get('price');


document.querySelector("#flight_number p").innerText=flightNo;
document.querySelector("#flight_time").innerText=departureTime+"-"+arrivalTime;
document.querySelector("#flight_duration").innerText=duration;
document.querySelector("#flight_stops").innerText=stops;
document.querySelector("#flight_journey").innerText=`${from} to ${to}`;
document.querySelector("#flight_date").innerText=date;

let afinitial=314;
let af;
price=passengers*price;
afinitial=passengers*afinitial;
af=afinitial;
tf=price+af;
additional.innerText=af;
total.innerText=tf;
base.innerText=price;
let zccost=document.querySelector(".zerocancellation cost");
let fdccost=document.querySelector(".freedatechange cost");
let passengerinput=document.querySelector(".passengerinput");

document.addEventListener("DOMContentLoaded",()=>{
   for(let i=0;i<passengers;i++)
    {
        let pdiv=document.createElement('div');
        pdiv.classList.add("passengers");

        let subheading=document.createElement("span");
        subheading.classList.add("subheading");
        subheading.innerText=`Add Passenger ${i+1}`;
        pdiv.appendChild(subheading);

        let gdiv=document.createElement("div");
        gdiv.classList.add("gender");
       
         let genders=["Mr","Ms","Mrs"];
         genders.forEach(gender=>{
            let goption=document.createElement("input");
            let div=document.createElement("div");
            let span=document.createElement("span");
            span.innerText=gender;
            goption.type="radio";
            goption.name=`gender${i+!1}`;
            goption.value=gender;
            if(gender==="Mr")
                {
                goption.required=true;
                }
                div.appendChild(goption);
                div.appendChild(span);
               
               gdiv.appendChild(div);
         });
        pdiv.appendChild(gdiv);

        let inputdiv=document.createElement("div");
        inputdiv.classList.add("input");
        let fname=document.createElement("input");
        fname.type="text";
        fname.placeholder="Firstname(& Middlename, if any)";
        fname.classList.add("firstname");
        fname.required=true;
        inputdiv.appendChild(fname);

        let lname=document.createElement("input");
        lname.type="text";
        lname.placeholder="Last name";
        lname.classList.add("lastname");
        lname.required=true;
        inputdiv.appendChild(lname);

        pdiv.appendChild(inputdiv);
        passengerinput.appendChild(pdiv);
    }
});

document.querySelector("#penalty2 p").innerText=tf;
document.querySelector("#penalty1 p").innerText=tf-(tf*0.3);
let canceldate=document.querySelectorAll(".canceldate");
for(let i=0;i<canceldate.length;i++){
    canceldate[i].innerText=date;
}
document.querySelector("#ccltime2").innerText=departureTime;
let ccltime1=((parseInt(departureTime.slice(0,2))*60+parseInt(departureTime.slice(3)))-120);
if(ccltime1<0){
ccltime1+=1440;
}
let ccltime1h=Math.trunc(ccltime1/60);
let ccltime1m=ccltime1%60;
document.querySelector("#ccltime1").innerText=`${ccltime1h}:${ccltime1m}`;


zc.addEventListener("change",()=>{
    if(zc.checked){
        additional.innerText=parseInt(additional.innerText)+(parseInt(zccost.innerText)*passengers);
       total.innerText=parseInt(total.innerText)+(parseInt(zccost.innerText)*passengers);
       ZC=true;
       }
       else{
        additional.innerText=parseInt(additional.innerText)-(parseInt(zccost.innerText)*passengers);
        total.innerText=parseInt(total.innerText)-(parseInt(zccost.innerText)*passengers);
        ZC=false;
       }
     
});
fdc.addEventListener("change",()=>{
    if(fdc.checked){
        additional.innerText=parseInt(additional.innerText)+(parseInt(fdccost.innerText)*passengers);
        total.innerText=parseInt(total.innerText)+(parseInt(fdccost.innerText)*passengers);
       FDC=true;
       }
       else{
        additional.innerText=parseInt(additional.innerText)-(parseInt(fdccost.innerText)*passengers);
        total.innerText=parseInt(total.innerText)-(parseInt(fdccost.innerText)*passengers);
        FDC=false;
       }
     
});

let spclastnce=document.querySelector(".spcl");
let spcloptions=document.querySelector(".specialassistance ul");
let icon=document.querySelector(".dropdown-icon");
spclastnce.addEventListener("click",()=>{
if(spcloptions.style.display==="none"){
   
spcloptions.style.display="block";
}
else{
   
    spcloptions.style.display="none";
}
});



document.querySelector("#airnexus").addEventListener("submit", function(event) {
    event.preventDefault(); 


    let form = document.querySelector("#airnexus");
    af=additional.innerText;
    bf=base.innerText;
    tf=total.innerText;
    let sas=document.querySelectorAll(".specialassistance input");
    let sa=[];
    for(let i=0;i<sas.length;i++){
        if(sas[i].checked)
            {
                sa.push(sas[i].value);
            }
    }
    let name1=document.querySelectorAll(".firstname");
    let name2= document.querySelectorAll(".lastname");
    
    let name=[];
    for(let i=0;i<name1.length;i++)//name1 and 2 same length
        {
            name.push(name1[i].value+" "+name2[i].value);
           
        }

   
   const url = `addons.html?bf=${price}&af=${af}&tf=${tf}&sa=${sa}&name=${name}&ZC=${ZC}&FDC=${FDC}&passengers=${passengers}&afinitial=${afinitial}&departureTime=${departureTime}&duration=${duration}&arrivalTime=${arrivalTime}&flightNo=${flightNo}&stops=${stops}&from=${from}&to=${to}&date=${date}`;
    if (form.checkValidity()) {
       
            window.location.href = url;
       
    } else {
        alert("Fill all the required options");
    }
});
document.querySelector("#guidelines").addEventListener("click",()=>{
    window.location.href="guide.html";
  });
