# ImageMagick CLI Tools



## show image information (like colorspace)

`identify -verbose image.jpg`


## compress image

`convert input.jpg -sampling-factor 4:2:0 -strip -quality 70 -interlace Plane -colorspace RGB output.jpg`


## convert image

`convert input.{jpg,webp}`


## resize image

ImageMagick supports color profiles, however, for images without a profile or a declaration of colorspace, ImageMagick assumes non-linear sRGB. Most image processing algorithms assume a linear colorspace, therefore it might be prudent to convert to linear color or remove the gamma function before certain image processing algorithms are applied. 

`convert input.jpg -colorspace RGB -resize 300 -colorspace sRGB output.jpg`
