let seats = document.querySelectorAll(".seat");
let choice = document.querySelector(".choice");
let additional = document.querySelector("#additionalfare cost");
let base = document.querySelector("#basefare cost");
let total = document.querySelector("#totalfare cost");
let reset = document.querySelector(".reset");



let xtralegroom_cost=690;
let normal_cost=370;


const urlParams = new URLSearchParams(window.location.search);

let from=urlParams.get(`from`);
let to=urlParams.get(`to`);
let date=urlParams.get(`date`);
let passengers=urlParams.get(`passengers`);
let af = urlParams.get('af');
let tf = urlParams.get('tf');
let name = urlParams.get('name');
let sa = urlParams.get('sa');
let lostbaggage = urlParams.get('lostbaggage');
let priorityaccess = urlParams.get('priorityaccess');
let totalbaggage = urlParams.get('totalbaggage');
let foodselected = urlParams.get('foodselected');
let sportsitem = urlParams.get('sportsitem');
let ZC=urlParams.get('ZC');
let FDC=urlParams.get('FDC');

let afinitial=urlParams.get("afinitial");
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


additional.innerText=af;
base.innerText=bf;
total.innerText=tf;
let additionalcost = parseInt(additional.innerText);
let totalcost = parseInt(total.innerText);


checkin=document.querySelector(".checkin");
checkin.innerText=`Check-in:${totalbaggage}kg`;



for (let i = 0; i < seats.length; i++) {
    seats[i].addEventListener("click", () => {
        let selectedSeats = document.querySelectorAll(".selectedseat");
        let id = seats[i].id;

        if (seats[i].classList.contains("unavailable"))
             {
            alert("The seat is not available. Choose another.");
            } 
        else if (!(seats[i].classList.contains("col") || seats[i].classList.contains("seatrowno"))) 
            {
            if (selectedSeats.length >= passengers) {
                if (seats[i].classList.contains("selectedseat")) {
                    seats[i].classList.remove("selectedseat");
                    choice.innerText = choice.innerText.replace(id, "").trim();
                    seats[i].innerText = "";
                    if (seats[i].parentElement.classList.contains("extra_legroom")) {
                        additional.innerText = (parseInt(additional.innerText) - xtralegroom_cost).toString();
                        total.innerText = (parseInt(total.innerText) - xtralegroom_cost).toString();
                    } else if(!seats[i].classList.contains("free")){
                        additional.innerText = (parseInt(additional.innerText) - normal_cost).toString();
                        total.innerText = (parseInt(total.innerText) - normal_cost).toString();
                    }
                } else {
                    alert("Deselect a seat first");
                }
            } else if (!seats[i].classList.contains("selectedseat")) {
                seats[i].classList.add("selectedseat");
                choice.innerText += ` ${id}`;
                seats[i].innerText = id;

                if (seats[i].parentElement.classList.contains("extra_legroom")) {
                    additional.innerText = (parseInt(additional.innerText) + xtralegroom_cost).toString();
                    total.innerText = (parseInt(total.innerText) + xtralegroom_cost).toString();
                } else if (!seats[i].classList.contains("free")) {
                    additional.innerText =(parseInt(additional.innerText) + normal_cost).toString();
                    total.innerText =(parseInt(total.innerText) + normal_cost).toString();
                }
            }
        }
    });
} 

    reset.addEventListener("click",()=>{
        choice.innerText="";
        let seat= document.querySelectorAll(".selectedseat");
        for(let i=0;i<seat.length;i++){
        seat[i].innerText="";
        seat[i].classList.remove("selectedseat");
        additional.innerText=additionalcost;
        total.innerText=totalcost;
        }
    });

    document.querySelector(".submit").addEventListener('click', function() {
        let seats=document.querySelectorAll(".selectedseat");
        let seat = Array.from(seats);
        for(let i=0;i<seats.length;i++){
            seat[i]=seats[i].innerText;
        }
         af=additional.innerText;
         tf=total.innerText;
        
        const url=`payment.html?af=${af}&bf=${bf}&tf=${tf}&name=${name}&sa=${sa}&lostbaggage=${lostbaggage}&priorityaccess=${priorityaccess}&totalbaggage=${totalbaggage}&foodselected=${foodselected}&sportsitem=${sportsitem}&seat=${seat}&ZC=${ZC}&FDC=${FDC}&passengers=${passengers}&afinitial=${afinitial}&departureTime=${departureTime}&arrivalTime=${arrivalTime}&flightNo=${flightNo}&stops=${stops}&from=${from}&to=${to}&date=${date}`;

       
            window.location.href = url;
       
       
    });
    document.querySelector("#guidelines").addEventListener("click",()=>{
        window.location.href="guide.html";
      });
