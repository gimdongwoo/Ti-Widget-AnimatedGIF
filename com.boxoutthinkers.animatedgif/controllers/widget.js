var CONFIG = arguments[0] || {};

$.animatedGIFView = null;

$.init = function(args) {
  if (OS_IOS) {
    require('de.marcelpociot.imagefromgif');
    $.animatedGIFView = Ti.UI.createImageView({
      id: args.id || "animatedgif",
      gif: args.image || "",
      width: args.width || Ti.UI.SIZE,
      height: args.height || Ti.UI.SIZE,
    });
  } else {
    $.animatedGIFView = (require("com.miga.gifview").createGifView)({
        id: args.id || "animatedgif",
        autoStart: true,
        image: args.image || "",
        width: args.width || Ti.UI.SIZE,
        height: args.height || Ti.UI.SIZE,
    });
  }

  $.Wrapper.add($.animatedGIFView);
};

$.image = function(_image) {
  if ($.animatedGIFView) {
    if (OS_IOS) {
      $.animatedGIFView.gif = _image;
    } else {
      $.animatedGIFView.image = _image;
    }
  }
}

$.init(CONFIG);
