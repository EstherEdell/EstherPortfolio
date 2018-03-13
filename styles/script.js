

$(document).ready(function() {
  window.sr = ScrollReveal({
      reset:true,
      duration:500,
      origin:'bottom',
      delay: 250
  });
  sr.reveal('.booze');
  sr.reveal('.genius');
  sr.reveal('.lovin');
  sr.reveal('.snack');
  $('a').smoothScroll();
});
