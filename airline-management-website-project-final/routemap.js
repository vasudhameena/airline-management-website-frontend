
// const routes = [
//     { origin: [40.7128, -74.0060], destination: [51.5074, -0.1278], from: "NYC", to:"London"},
//     { origin: [51.5074, -0.1278], destination: [48.8566, 2.3522], from: "London", to:"Paris" },
//     { origin: [48.8566, 2.3522], destination: [52.5200, 13.4050], from: "Paris", to:"Berlin" },
//     // Add more routes as needed
//   ];


let from = "Denver International Airport,USA";
let to = "Kempegowda International Airport,India";
let stops = [
    "Dubai International Airport,UAE",
    "Indira Gandhi International Airport,India",
    "London Heathrow Airport,UK",
    "Charles de Gaulle Airport,France",
    "Changi Airport,Singapore",
    "Doha Hamad International Airport,Qatar",
    "Frankfurt Airport,Germany",
    "Hong Kong International Airport,Hong Kong",
    "Suvarnabhumi Airport,Thailand",
    "Narita International Airport,Japan",
    "Incheon International Airport,South Korea",
    "Los Angeles International Airport,USA",
    "Sydney Kingsford Smith Airport,Australia",
    "Beijing Capital International Airport,China",
    "John F. Kennedy International Airport,USA",
    "San Francisco International Airport,USA",
    "Toronto Pearson International Airport,Canada",
    "Madrid Barajas Airport,Spain",
    "Amsterdam Schiphol Airport,Netherlands",
    "Istanbul Airport,Turkey",
    "Shanghai Pudong International Airport,China",
    "Munich Airport,Germany",
    "Kuala Lumpur International Airport,Malaysia",
    "Zurich Airport,Switzerland",
    "Vienna International Airport,Austria",
    "Brussels Airport,Belgium",
    "Rome Fiumicino Airport,Italy",
    "Vancouver International Airport,Canada",
    "Barcelona El Prat Airport,Spain",
    "São Paulo-Guarulhos International Airport,Brazil",
    "Lisbon Portela Airport,Portugal",
    "Moscow Sheremetyevo International Airport,Russia",
    "Dubai Al Maktoum International Airport,UAE",
    "Denver International Airport,USA",
    "Seattle-Tacoma International Airport,USA",
    "Mexico City International Airport,Mexico",
    "Cape Town International Airport,South Africa",
    "Copenhagen Airport,Denmark",
    "Stockholm Arlanda Airport,Sweden",
    "Oslo Gardermoen Airport,Norway",
    "Auckland Airport,New Zealand",
    "Helsinki-Vantaa Airport,Finland",
    "Athens International Airport,Greece",
    "Bangkok Don Mueang International Airport,Thailand",
    "Brisbane Airport,Australia",
    "Dublin Airport,Ireland",
    "Abu Dhabi International Airport,UAE",
    "Manila Ninoy Aquino International Airport,Philippines",
    "Chhatrapati Shivaji Maharaj International Airport,Mumbai, India",
    "Kempegowda International Airport,Bangalore, India",
    "Rajiv Gandhi International Airport,Hyderabad, India",
    "Chennai International Airport,Chennai, India",
    "Sardar Vallabhbhai Patel International Airport,Ahmedabad, India",
    "Cochin International Airport,Kochi, India",
    "Goa International Airport,Goa, India",
    "Pune Airport,Pune, India",
    "Netaji Subhas Chandra Bose International Airport,Kolkata, India",
    "Jaipur International Airport,Jaipur, India",
    "Trivandrum International Airport,Thiruvananthapuram, India"
];



stops.unshift(from);
stops.push(to);

// Initialize Leaflet map
const map = L.map('map', {
    center: [51.505, -0.09], // Default center
    zoom: 3, // Fixed zoom level
    zoomControl: false // Disable zoom control
});

// Add tile layer (you may use different tile providers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to fetch coordinates for a location
async function getCoordinates(stop) {
    try {
        let response = await fetch(`https://geocode.maps.co/search?q=` + stop + `&api_key=6662a05350825107469139udi046512`);
        let data = await response.json();
        if (data.length > 0) {
            return [data[0].lat, data[0].lon];
        } else {
            console.error("No results found for:", stop);
            return null;
        }
    } catch (error) {
        console.error("Error fetching data for:", stop, error);
        return null;
    }
}

// Function to draw routes on the map
async function drawRoutes() {
    let locations = [];

    // Fetch coordinates for all stops and plot them on the map
    for (let stop of stops) {
        let coords = await getCoordinates(stop);
        if (coords) {
            locations.push(coords);
            L.marker(coords).addTo(map).bindPopup(stop).openPopup();
        }
    }

    // Fit map bounds to show all markers
    if (locations.length > 0) {
        let bounds = L.latLngBounds(locations.map(loc => L.latLng(loc[0], loc[1])));
        map.fitBounds(bounds);

        // Draw polylines between the stops
        for (let i = 1; i < locations.length; i++) {
            L.polyline([locations[i - 1], locations[i]], { color: "#000787" }).addTo(map);
        }
    }
}

// Call the drawRoutes function when the page loads
window.onload = drawRoutes;


  
  


