let listItems = document.querySelectorAll('.dropdown-items');

listItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.style.color = '#E1ACAC';
  });

  item.addEventListener('mouseout', () => {
    item.style.color = 'white';
  });
});

let heading1 = document.querySelector("#li1");
let heading2 = document.querySelector("#li2");
let heading3 = document.querySelector("#li3");
let heading4 = document.querySelector("#li4");
let dropdown1 = document.querySelector(".plan-travel");
let dropdown2 = document.querySelector(".where-we-fly");
let dropdown3 = document.querySelector(".experience");
let dropdown4 = document.querySelector(".rewards");
let bg1 = document.querySelector('.bg1');

    heading1.addEventListener("mouseenter", ()=> {
        dropdown1.style.display = "flex";
        bg1.style.opacity = '0.2';
        heading1.style.color='#E1ACAC';
    });

    heading1.addEventListener("mouseleave", (event) =>{
        if (!(dropdown1.contains(event.relatedTarget))) {
          dropdown1.style.display = "none";
          bg1.style.opacity = '1';
          heading1.style.color='white';
        }
    });
    
    dropdown1.addEventListener("mouseleave", function(event) {
       
        if (!heading1.contains(event.relatedTarget)) {
            dropdown1.style.display = "none";
            bg1.style.opacity = '1';
            heading1.style.color='white';
        }
    });


    heading2.addEventListener("mouseenter", ()=> {
      dropdown2.style.display = "flex";
      bg1.style.opacity = '0.2';
      heading2.style.color='#E1ACAC';
  });

  heading2.addEventListener("mouseleave", (event) =>{
      if (!(dropdown2.contains(event.relatedTarget))) {
        dropdown2.style.display = "none";
        bg1.style.opacity = '1';
        heading2.style.color='white';
      }
  });
  
  dropdown2.addEventListener("mouseleave", function(event) {
     
      if (!heading2.contains(event.relatedTarget)) {
          dropdown2.style.display = "none";
          bg1.style.opacity = '1';
          heading2.style.color='white';
      }
  });


  heading3.addEventListener("mouseenter", ()=> {
    dropdown3.style.display = "flex";
    bg1.style.opacity = '0.2';
    heading3.style.color='#E1ACAC';
});

heading3.addEventListener("mouseleave", (event) =>{
    if (!(dropdown3.contains(event.relatedTarget))) {
      dropdown3.style.display = "none";
      bg1.style.opacity = '1';
      heading3.style.color='white';
    }
});

dropdown3.addEventListener("mouseleave", function(event) {
   
    if (!heading3.contains(event.relatedTarget)) {
        dropdown3.style.display = "none";
        bg1.style.opacity = '1';
        heading3.style.color='white';
    }
});

heading4.addEventListener("mouseenter", ()=> {
  dropdown4.style.display = "flex";
  bg1.style.opacity = '0.2';
  heading4.style.color='#E1ACAC';
});

heading4.addEventListener("mouseleave", (event) =>{
  if (!(dropdown4.contains(event.relatedTarget))) {
    dropdown4.style.display = "none";
    bg1.style.opacity = '1';
    heading4.style.color='white';
  }
});

dropdown4.addEventListener("mouseleave", function(event) {
 
  if (!heading4.contains(event.relatedTarget)) {
      dropdown4.style.display = "none";
      bg1.style.opacity = '1';
      heading4.style.color='white';
  }
});

const boxes = document.querySelectorAll('.box');

const box1 = boxes[0];
box1.style.backgroundColor = '#E1ACAC';
box1.style.color = '#161A30';

boxes.forEach(box => {
  box.addEventListener('click', () => {
    boxes.forEach(otherBox => {
      if (otherBox !== box) {
        otherBox.style.backgroundColor = '';
        otherBox.style.color = '';
      }
    });
    box.style.backgroundColor = '#E1ACAC';
    box.style.color = '#161A30';
    
  });
});

const letsexplore = document.querySelectorAll('.lets-explore-btn');
// const btn1 = letsexplore[0];
// btn1.style.backgroundColor = '#E1ACAC';
// btn1.style.color = '#161A30';
letsexplore.forEach(btn => {
  btn.addEventListener('click', () => {
    letsexplore.forEach(otherbtn => {
      if (otherbtn !== btn) {
        otherbtn.style.backgroundColor = '';
        otherbtn.style.color = '';
      }
    });
    btn.style.backgroundColor = '#E1ACAC';
    btn.style.color = '#161A30';
    
  });
});
// Get the buttons and the corresponding sections
const searchFlightsBtn = document.querySelector("#box1");
const manageBookingBtn = document.querySelector("#box2");
const checkInBtn = document.querySelector("#box3");
const flightStatusBtn = document.querySelector("#box4");

const searchFlightsSection = document.querySelector(".search-flights");
const manageBookingSection = document.querySelector(".manage-booking");
const checkInSection = document.querySelector(".check-in");
const flightStatusSection = document.querySelector(".status");

// Initially show the search flights section
searchFlightsSection.style.display = "block";

// Add click event listeners to the buttons
searchFlightsBtn.addEventListener("click", () => {
  searchFlightsSection.style.display = "block";
  manageBookingSection.style.display = "none";
  checkInSection.style.display = "none";
  flightStatusSection.style.display = "none";
});

manageBookingBtn.addEventListener("click", () => {
  searchFlightsSection.style.display = "none";
  manageBookingSection.style.display = "block";
  checkInSection.style.display = "none";
  flightStatusSection.style.display = "none";
});

checkInBtn.addEventListener("click", () => {
  searchFlightsSection.style.display = "none";
  manageBookingSection.style.display = "none";
  checkInSection.style.display = "block";
  flightStatusSection.style.display = "none";
});

flightStatusBtn.addEventListener("click", () => {
  searchFlightsSection.style.display = "none";
  manageBookingSection.style.display = "none";
  checkInSection.style.display = "none";
  flightStatusSection.style.display = "block";
});

  let bannerimg=document.querySelector("#banner-img")
let bannertext=document.querySelector("#info-para")
let bannerbutton=document.querySelector("#learn-more-btn")

            let imageslist=["membership3.jpg","food3.jpg","insideplane3.jpg","kerala3.jpg","lobby3.jpg","trip1.jpg"];
            let textlist=["Join our Membership Programme","Enjoy upto 70% discount on Business class","Enjoy Flying experience with our new Flights","Summer Sale:Enjoy upto 20% discounts on flights to Kerala","Grab the best of AeroNexus by using AeroRewards","Plan Trip with Us"];
            let index=1;
            const imagechange=()=>{
            
            if(index<6){
                bannerimg.src=imageslist[index];
                bannertext.style.animation="none";
                bannerbutton.style.animation="none";
                void bannertext.offsetWidth;
bannertext.style.animation="fadeIn 1s ease-in forwards";
bannerbutton.style.animation="fadeIn 1s ease-in forwards";
                bannertext.innerText=textlist[index];


               index=index+1;
            }
             else
             index=0;
            };
            setInterval(imagechange,4000);

            let bannerbutton1 = document.querySelector("#learn-more-btn");

            bannerbutton1.addEventListener("click", () => {
              let contentBox = document.getElementById("content-box");
              
              contentBox.style.display = "none";
          
              let contentToShow = contentlist[index - 1];
          
              contentBox.innerText = contentToShow;
              contentBox.style.display = "block";
          });

let bwimg=document.querySelectorAll(".spots");
let bwtext=document.querySelectorAll(".recommendedspots h3");
let bwinfo=document.querySelectorAll(".info2");
let bwbtn=document.querySelectorAll(".lets-explore-btn");
for(let i=0;i<bwimg.length;i++)
    {
        bwimg[i].addEventListener("mouseover",()=>{
            bwtext[i].classList.add("classline");
            bwinfo[i].style.visibility="visible";
            bwinfo[i].style.animation="fadeIn 0.7s ease-in forwards";
            bwbtn[i].style.animation="fadeIn 0.7s ease-in forwards";
            bwtext[i].style.animation="fadeIn 0.7s ease-in forwards";
        });
        bwimg[i].addEventListener("mouseout",()=>{
            bwtext[i].classList.remove("classline");
            bwinfo[i].style.visibility="hidden";
            bwinfo[i].style.animation="none";
            bwbtn[i].style.animation="none";
            bwtext[i].style.animation="none";
        });
        
    }
    let values = document.querySelector(".values-container");
    let name1content=document.querySelectorAll(".banner-airlinr-name1 p");
            bannerbutton.addEventListener("click",()=>{
                 console.log("clicked");
                console.log(bannertext);
              for(let i=0;i<imageslist.length;i++){
                if(bannertext.innerText===textlist[i])
                  {
                    console.log(i);
                    console.log(name1content[i]);
                      values.style.display="none";
                      name1content[i].style.display="block";
                      name1content[i].style.animation=" fadeIn 1s ease-in-out forwards";
                     
                  }
                  else{
                    name1content[i].style.display="none";
                    
                  }
              }
           
            });

            bannerbutton.addEventListener('mouseover', () => {
              bannerbutton.style.backgroundColor = '#7077A1';
            });
          
            bannerbutton.addEventListener('mouseout', () => {
              bannerbutton.style.backgroundColor = '';
            });


    document.querySelector("#plan-travel-list3").addEventListener("click",()=>{
      window.location.href="popularflights.html";
     });
    document.querySelector("#wherewefly-list2").addEventListener("click",()=>{
       window.location.href="popularflights.html";
     });
     document.querySelector("#plan-travel-list4").addEventListener("click",()=>{
       window.location.href="partner.html";
     });
     document.querySelector("#plan-travel-list1").addEventListener("click",()=>{
       window.location.href="destinations.html";
     });
     document.querySelector("#experience-list1").addEventListener("click",()=>{
       window.location.href="atairport.html";
     });
     document.querySelector("#experience-list2").addEventListener("click",()=>{
       window.location.href="inair.html";
     });
     document.querySelector("#rewards-list1").addEventListener("click",()=>{
       window.location.href="membership.html";
     });
     document.querySelector("#rewards-list2").addEventListener("click",()=>{
       window.location.href="offers.html";
     });
     document.querySelector("#wherewefly-list1").addEventListener("click",()=>{
       window.location.href="routemap.html";
     });
     document.querySelector(".log-in-btn").addEventListener("click",()=>{
       window.location.href="login.html";
      });
      document.querySelector("#plan-travel-list2").addEventListener("click",()=>{
        window.location.href="guide.html";
  });
  
  const form=document.querySelector("#flightsearch");
   form.addEventListener("submit",(evt)=>{
    evt.preventDefault();

       let from=document.querySelector("#from").value;
       let to=document.querySelector("#to").value;
       let flydate=document.querySelector("#date1").value;
      flydate=flydate.replace(/-/g," ");
       let passengers=document.querySelector("#passnum").value;
      
       const url=`booking.html?from=${from}&to=${to}&date=${flydate}&passengers=${passengers}`;
   
   
      if(form.checkValidity()){
        window.location.href=url;
       }
       else{
        alert("Fill all the required details");
     }
});

let explorebtn= document.querySelectorAll(".lets-explore-btn");
  for(let i=0;i<explorebtn.length;i++){
 explorebtn[i].addEventListener("click",()=>{
    window.location.href="destinations.html";
});
}

document.addEventListener("DOMContentLoaded", () => {
  const userResponse = confirm("This website wants to access your location for better results. Do you allow?");
  
  if (userResponse) {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
              position => {
                  alert(`Location allowed. Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
              },
              error => {
                  alert("Error in accessing location.");
              }
          );
      } else {
          alert("Geolocation is not supported by this browser.");
      }
  } else {
      alert("You have blocked location access.");
  }
});