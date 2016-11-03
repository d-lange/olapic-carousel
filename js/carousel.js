$( document ).ready(function() {

  $.ajax({
      dataType: "json",
      url: 'https://photorankapi-a.akamaihd.net/customers/215757/media/recent?auth_token=0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18&version=v2.2',
      type: 'GET',
      data: {
         format: 'json'
      },
      success: function(data) {
        var media = data.data._embedded.media;
        console.log(media);

        $.each(media, function(i, obj){
          $('#light-slider').append('<li class="item"><a class="image-link" href=' + obj.original_source + '><img class="olapic-img" src=' + obj.images.normal + ' /></a><div class="caption-container"><p class="caption">' + obj.caption + '</p></div></li>');
          console.log(obj);
        });

        $('#light-slider').lightSlider({
          item: 6,
          autoWidth: false,
          slideMove: 3,
          slideMargin: 10,
          loop: false,
          easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
          adaptiveHeight: false,
          speed: 300,
          pauseOnHover: false,
          controls: true
        }); 
      },
      error: function(e) {
        console.log(e.message);
        $('.carousel').html('<p>An error has occurred</p>');
      }    
   });
});
