var ready = function() {

  var setImageSize = function(){
    var postImage = $(".post-image");
    var imgWidth = postImage.data("imagewidth");
    console.log("Image Width: "+ imgWidth);
    var imgHeight = postImage.data("imageheight");
    console.log("Image Height: "+ imgHeight);
    var imgAspectRatio = imgWidth/imgHeight;
    console.log("Image Aspect Ratio: " + imgAspectRatio);

    var w = window.innerWidth;
    console.log("Window width: " + w);
    var h = window.innerHeight;
    console.log("Window height: " + h);
    var windowAspectRatio = w/h;
    console.log("Window Aspect Ratio: " + windowAspectRatio);

    if (windowAspectRatio > imgAspectRatio) {
      postImage.attr("height","85%");
      console.log("Window aspect ratio > image aspect ratio; set img height to 85%");
    } else {
      postImage.attr("width","100%");
          console.log("Window aspect ratio < image aspect ratio; set img width to 100%");
    }
  }

  setImageSize();
  $(window).resize(setImageSize);
}; // end ready

$(document).ready(ready);
$(document).on('page:load', ready);
