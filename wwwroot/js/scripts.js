$(() => {
   //SVG converter
   const svgConverter = function () {
      $("img.svg").each(function () {
         var $img = jQuery(this);
         var imgID = $img.attr("id");
         var imgClass = $img.attr("class");
         var imgURL = $img.attr("src");
         jQuery.get(
            imgURL,
            function (data) {
               var $svg = jQuery(data).find("svg");
               if (typeof imgID !== "undefined") {
                  $svg = $svg.attr("id", imgID);
               }
               if (typeof imgClass !== "undefined") {
                  $svg = $svg
                     .attr("class", imgClass + " replaced-svg")
                     .css("display", "inline-block");
               }
               $svg = $svg.removeAttr("xmlns:a");
               $img.replaceWith($svg);
            },
            "xml"
         );
      });
   };
   svgConverter();

   // Navbar on scroll
   const header = $(".header");
   window.onscroll = () => {
      if (window.scrollY > 150) {
         header.addClass("on__scroll");
      } else {
         header.removeClass("on__scroll");
      }
   };

   // Banner Slider
   const banner = $(".banner");
   if (banner.length > 0) {
      banner
         .slick({
            dots: false,
            arrows: true,
            autoplay: true,
         })
         .slickAnimation();
   }

   //    Counter Up
   const counter = $(".counter");
   if (counter.length > 0) {
      counter.counterUp();
   }

   // Sector Slider
   const sectorSlider = $('.sector__slider');
   if(sectorSlider.length > 0) {
      sectorSlider.slick({
         slidesToShow: 4,
         slidesToScroll: 4,
         arrows: false,
         dots: true,
         responsive: [
           {
             breakpoint: 1320,
             settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
             }
           },
           {
             breakpoint: 600,
             settings: {
               slidesToShow: 2,
               slidesToScroll: 2
             }
           },
           {
             breakpoint: 480,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1
             }
           }
         ]
      })
   }

   // Sector Slider
   const whatSlider = $('.what__slider');
   if(whatSlider.length > 0) {
      whatSlider.slick({
         slidesToShow: 4,
         slidesToScroll: 4,
         arrows: false,
         dots: true,
         responsive: [
           {
             breakpoint: 1320,
             settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
             }
           },
           {
             breakpoint: 600,
             settings: {
               slidesToShow: 2,
               slidesToScroll: 2
             }
           },
           {
             breakpoint: 480,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1
             }
           }
         ]
      })
   }
});
