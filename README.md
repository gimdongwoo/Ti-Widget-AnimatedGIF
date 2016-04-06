# Ti-Widget-AnimatedGIF
Animated GIF view widget for Appcelerator Titanium


### Need Titanium Nateve Module
IOS : https://github.com/mpociot/TiImageFromGIF
ANDROID : https://github.com/m1ga/com.miga.gifview

(Thanks to mpociot & m1ga)


### Example
````
<View top="0">
  <Require type="widget" src="com.boxoutthinkers.animatedgif" id="gifImage" />
</View>
````

````
"#gifImage": {
  image: "/images/loading_mask_animation.gif",
  width: 170, height: 241
}
````


### Method
- image(_image) : change gif image


### TODO
- change size after create
- start and stop animation


### ChangeLog
- v1.0 : create, image changing method
