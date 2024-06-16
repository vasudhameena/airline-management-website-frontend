
    const urlParams = new URLSearchParams(window.location.search);
    let from=urlParams.get('from');
    let to=urlParams.get('to');
    let date=urlParams.get('date');
    let passengers=urlParams.get('passengers');

    let departs= document.querySelectorAll(" #depart");
    let arrivals= document.querySelectorAll(" #arrive");
    for(let i=0;i<departs.length;i++){
        departs[i].innerText=from;
    }
    for(let i=0;i<arrivals.length;i++){
        arrivals[i].innerText=to;
    }

    console.log(departs,arrivals);

   document.querySelector("#place").innerText=`${from} to ${to}`;
    document.querySelector("#date").innerText=date;

    const ticketsContainer = document.querySelector('.tickets');
    const tickets = Array.from(ticketsContainer.querySelectorAll('.ticket'));

    document.getElementById('priceFilter').addEventListener('change', (event) => {
        const value = event.target.value;
        sortTicketsByPrice(value);
    });

    document.getElementById('durationFilter').addEventListener('change', (event) => {
        const value = event.target.value;
        sortTicketsByDuration(value);
    });

    document.getElementById('timeFilter').addEventListener('change', (event) => {
        const value = event.target.value;
        filterTicketsByTime(value);
    });

    document.getElementById('stopsFilter').addEventListener('change', (event) => {
        const value = event.target.value;
        filterTicketsByStops(value);
    });

    function sortTicketsByPrice(order) {
        const sortedTickets = tickets.sort((a, b) => {
            const priceA = parseInt(a.querySelector('#price p').textContent);
            const priceB = parseInt(b.querySelector('#price p').textContent);
            return order === 'lowest-highest' ? priceA - priceB : priceB - priceA;
        });
        renderTickets(sortedTickets);
    }

    function sortTicketsByDuration(order) {
        const sortedTickets = tickets.sort((a, b) => {
            const durationA = parseDuration(a.querySelector('#duration p').textContent);
            const durationB = parseDuration(b.querySelector('#duration p').textContent);
            return order === 'lowest-highest' ? durationA - durationB : durationB - durationA;
        });
        renderTickets(sortedTickets);
    }

    function filterTicketsByTime(timeFilter) {
        const filteredTickets = tickets.filter(ticket => {
            const departureTime = parseTime(ticket.querySelector('#depature_time p').textContent);
            if (timeFilter === 'before-12') {
                return departureTime < 12;
            } else if (timeFilter === 'after-12') {
                return departureTime >= 12;
            }
            return true; // 'all' case
        });
        renderTickets(filteredTickets);
    }

    function filterTicketsByStops(stopsFilter) {
        const filteredTickets = tickets.filter(ticket => {
            const stops = ticket.querySelector('#stops p').textContent.toLowerCase();
            if (stopsFilter === 'non-stop') {
                return stops.includes('non-stop');
            }
            return true; // 'all' case
        });
        renderTickets(filteredTickets);
    }

    function parseDuration(durationStr) {
        // Extract hours and minutes from the duration string
        const parts = durationStr.match(/(\d+)h (\d+)m/);
        if (!parts) return 0;
        const hours = parseInt(parts[1]) || 0;
        const minutes = parseInt(parts[2]) || 0;
        return hours * 60 + minutes;
    }

    function parseTime(timeStr) {
        const [hours, minutes] = timeStr.split(':').map(Number);
        return hours + minutes / 60;
    }

    function renderTickets(sortedTickets) {
        ticketsContainer.innerHTML = '';
        sortedTickets.forEach(ticket => ticketsContainer.appendChild(ticket));
    }

    // Event listener for ticket clicks
    tickets.forEach(ticket => {
        ticket.addEventListener('click', () => {
            const departureTime = ticket.querySelector('#depature_time p').textContent;
            const durationRaw = ticket.querySelector('#duration p').textContent;
            const duration = durationRaw.match(/(\d+h \d+m)/)[0]; // Extracting "01h 55m"
            const arrivalTime = ticket.querySelector('#arrival_time p').textContent;
            const flightNo = ticket.querySelector('#flight_no p').textContent;
            const stops = ticket.querySelector('#stops p').textContent;
            const price = ticket.querySelector('#price p').textContent;

            const url = `passsenger.html?departureTime=${departureTime}&duration=${duration}&arrivalTime=${arrivalTime}&flightNo=${flightNo}&stops=${stops}&price=${price}&from=${from}&to=${to}&date=${date}&passengers=${passengers}`;
      
            window.location.href = url;
        });
    });



