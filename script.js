$(document).ready(function(){
    $(".konten-slider").bxSlider({
        Controls: true,
        auto: true,
        pager: true,
        mode: 'fade',
        captions: true,
        speed: 500,
    }
  );
});

$(document).ready(function() {
  $('.navbar a').on('click', function(event) {
      if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;

          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function(){
              window.location.hash = hash;
          });
      }
  });
  $('.navbar a').on('click', function() {
      $('.navbar a').removeClass('active');
      $(this).addClass('active');
  });

  $(window).on('scroll', function() {
      var scrollDistance = $(window).scrollTop();
      $('.container > div').each(function(i) {
          if ($(this).position().top <= scrollDistance) {
              $('.navbar a.active').removeClass('active');
              $('.navbar a').eq(i).addClass('active');
          }
      });
  }).scroll();
});

$(document).ready(function() {
  // Smooth scrolling for all links in the navbar
  $('.navbar a').on('click', function(event) {
      if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;

          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function(){
              window.location.hash = hash;
          });
      }
  });

  // Add active class to the current link (highlight it)
  $('.navbar a').on('click', function() {
      $('.navbar a').removeClass('active');
      $(this).addClass('active');
  });

  // Optional: Change the active link as you scroll through the page
  $(window).on('scroll', function() {
      var scrollDistance = $(window).scrollTop();
      $('.container > div').each(function(i) {
          if ($(this).position().top <= scrollDistance) {
              $('.navbar a.active').removeClass('active');
              $('.navbar a').eq(i).addClass('active');
          }
      });
  }).scroll();

  $('.content-1, .content-2, .content-3').on('click', function() {
      var sectionTitle = $(this).find('h3').text();
      alert('You clicked on ' + sectionTitle);
  });

  // Hover effect
  $('.content-1, .content-2, .content-3').hover(
      function() {
          $(this).css("box-shadow", "0 8px 16px rgba(0, 0, 0, 0.2)");
      }, function() {
          $(this).css("box-shadow", "0 4px 8px rgba(0, 0, 0, 0.1)");
      }
  );

  $('.content-4').on('click', function() {
    var sectionTitle = $(this).find('h2').text();
    alert('You clicked on ' + sectionTitle);
});

$('.content-4').hover(
    function() {
        $(this).css("box-shadow", "0 8px 16px rgba(0, 0, 0, 0.2)");
    }, function() {
        $(this).css("box-shadow", "0 4px 8px rgba(0, 0, 0, 0.1)");
    }
);

var backToTopButton = $('#back-to-top');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            backToTopButton.fadeIn();
        } else {
            backToTopButton.fadeOut();
        }
    });

    backToTopButton.on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});



