const boxContents = document.querySelectorAll('.boxes-content, .boxes-content2'); // select all box-content elements

boxContents.forEach(boxContent => {
  boxContent.addEventListener('mouseover', () => {
    boxContent.style.backgroundColor = '#E7CBCB'; // change the background color of box-content on mouseover
  });

  boxContent.addEventListener('mouseout', () => {
    boxContent.style.backgroundColor = ''; // change the background color of box-content back to its original color on mouseout
  });
});
