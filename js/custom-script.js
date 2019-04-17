function SwapDivsWithClick(servicesConteinerMain1, servicesConteinerOther1)
{
   d1 = document.getElementById(servicesConteinerMain1);
   d2 = document.getElementById(servicesConteinerOther1);
   if( d2.style.display == "none" )
   {
      d1.style.display = "none";
      d2.style.display = "flex";
   }
   else
   {
      d1.style.display = "flex";
      d2.style.display = "none";
   }
}

function SwapDivsWithClick(servicesConteinerMain2, servicesConteinerOther2)
{
   d1 = document.getElementById(servicesConteinerMain2);
   d2 = document.getElementById(servicesConteinerOther2);
   if( d2.style.display == "none" )
   {
      d1.style.display = "none";
      d2.style.display = "flex";
   }
   else
   {
      d1.style.display = "flex";
      d2.style.display = "none";
   }
}

function SwapDivsWithClick(servicesConteinerMain3, servicesConteinerOther3)
{
   d1 = document.getElementById(servicesConteinerMain3);
   d2 = document.getElementById(servicesConteinerOther3);
   if( d2.style.display == "none" )
   {
      d1.style.display = "none";
      d2.style.display = "flex";
   }
   else
   {
      d1.style.display = "flex";
      d2.style.display = "none";
   }
}

// FUNCTION GO SMOOTH TO TOP OF PAGE
$('#arrow-up').on('click', function() {
  const top = $('#header').position().top;

  $('html, body').animate(
    {
      scrollTop: top
    },
    900
  );
});

// FUNCTION GO SMOOTH TO TOP
/*$('#to-top').on('click', function() {
  const services = $('#header').position().top;

  $('html, body').animate(
    {
      scrollTop: services
    },
    900
  );
});*/

// FUNCTION GO SMOOTH TO SERVICES
$('#to-service').on('click', function() {
  const services = $('#servicesWrap').position().top;

  $('html, body').animate(
    {
      scrollTop: services
    },
    900
  );
});

// FUNCTION GO SMOOTH TO GALLERY
$('#to-gallery').on('click', function() {
  const services = $('#galleryWrap').position().top;

  $('html, body').animate(
    {
      scrollTop: services
    },
    900
  );
});

// FUNCTION GO SMOOTH TO CONTACT
$('#to-contact').on('click', function() {
  const services = $('#contactWrap').position().top;

  $('html, body').animate(
    {
      scrollTop: services
    },
    900
  );
});

//GALLERY
$(function(){
    var $gallery = $('.gallery a').simpleLightbox();
});