var cuteCat = $('#cat');
cuteCat.addEventListner('click',function() {
  const cClicks = document.getElementById('#count').innerHTML;
  cClicks++;
  document.getElementById('#count').innerHTML = cClicks;
});
