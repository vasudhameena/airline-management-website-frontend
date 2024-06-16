document.addEventListener('DOMContentLoaded', (event) => {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            const learnMore = box.querySelector('.learn-more');
            if (learnMore) {
                learnMore.style.display = 'block';
            }
        });

        box.addEventListener('mouseout', () => {
            const learnMore = box.querySelector('.learn-more');
            if (learnMore) {
                learnMore.style.display = 'none';
            }
        });
    });
});
