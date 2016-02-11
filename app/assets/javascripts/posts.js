var ready = function() {

  var postImage = $(".post-image");
  var imgWidth = postImage.width();
  console.log("Image Width: "+ imgWidth);
  var imgHeight = postImage.height();
  console.log("Image Height: "+ imgHeight);
  var imgAspectRatio = imgWidth/imgHeight;
  console.log("Image Aspect Ratio: " + imgAspectRatio);

  var w = window.innerWidth;
  var h = window.innerHeight;
  var windowAspectRatio = w/h;

  if (imgAspectRatio > windowAspectRatio) {
    postImage.attr("width","95%");
  } else {
    postImage.attr("height","85%");
  }

}; // end ready

$(document).ready(ready);
$(document).on('page:load', ready);
