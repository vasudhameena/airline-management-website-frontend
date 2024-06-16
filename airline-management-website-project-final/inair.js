document.addEventListener('DOMContentLoaded', (event) => {
    // Function to toggle the dropdown
    function toggleDropdown(buttonId, dropdownId) {
        const button = document.getElementById(buttonId);
        const dropdown = document.getElementById(dropdownId);
            const buttons = document.querySelectorAll('.cabin-btn');


        button.addEventListener('click', () => {
            if (dropdown.style.height === '30vh') {
                dropdown.style.height = '0';
                dropdown.style.border = 'none';

            } else {
                dropdown.style.height = '30vh';
                dropdown.style.border = '1.5px dashed #161A30';
            }
        });
    }

    // Add event listeners to the buttons
    toggleDropdown('btn1', 'dropdown1');
    toggleDropdown('btn2', 'dropdown2');
    toggleDropdown('btn3', 'dropdown3');
    toggleDropdown('btn4', 'dropdown4');
});
document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.cabin-btn');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#E7CBCB';
        });

        // Keep the background color pink after mouse leaves
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '';
        });
    });
});
