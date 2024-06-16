document.getElementById('view-more').addEventListener('click', function() {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.style.maxHeight = 'none'; // Remove the max-height restriction
    this.style.display = 'none'; // Hide the "View More" button after clicking
});
