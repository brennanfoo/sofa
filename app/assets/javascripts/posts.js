var ready = function() {

  var setImageSize = function(){
    var postImage = $(".post-image");
    var postTitle = $(".post-title");
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
      postImage.attr("height","83%");
      postImage.attr("width","auto");
      console.log("Window aspect ratio > image aspect ratio; set img height to 83%");
      postTitle.css({
        position: "fixed",
        'background-color': 'white',
        'left': '50px',
        'margin': '20px 0px 20px 0px'
        });
    } else {
      postImage.attr("width","100%");
      postImage.attr("height","auto");
      console.log("Window aspect ratio < image aspect ratio; set img width to 100%");
      postTitle.css({
        position: "relative",
        'background-color': 'transparent',
        'left': '0px',
        'margin': '20px 0px 20px 0px'
        });
      console.log("post-title position: relative;");
    }
  }

  setImageSize();
  $(window).resize(setImageSize);
}; // end ready

$(document).ready(ready);
$(document).on('page:load', ready);
