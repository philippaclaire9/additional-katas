# Run Length Encoder

[Run length encoding](https://en.wikipedia.org/wiki/Run-length_encoding) is a simple, early form of data compression where sequences of data with the same value are stored as a value and count. For example, 12 black pixels in a row in a black and white image could be represented as `BBBBBBBBBBBB` or, in compressed format, `12B`. The above link gives more explanation of how Run Length Encoding works.

This kata should take an flat array of RGBA values of pixels in a PNG image and should compress them using a run length encoding method.

Each pixel is represented by a sequence of 4 numbers in the array, RGBA, which are integers between 0 and 255 representing the quanitites of colours and amount of opacity in the given pixel.

## Example

An array representing three white pixels with 0% opacity would be represented:

`[255, 255, 255, 0, 255, 255, 255, 0, 255, 255, 255, 0]`

And could be compressed into:

`[3, 255, 255, 255, 0]`

Where the first number indicates that the following pixel data was originally repeated 3 times.


## Example 

And an array representing three blue pixels with 100% opacity, then 1 red pixel with 70% opacity, and then two black pixels with 100% opacity:

`[29, 93, 242, 255, 29, 93, 242, 255, 29, 93, 242, 255, 245, 12, 51, 77, 0, 0, 0, 255, 0, 0, 0, 255]`

You could compress this sequence of data using a run-length encoding technique like this:

`[3, 255, 255, 255, 0, 1, 29, 93, 242, 255, 2, 0, 0, 0, 255]`

Where each sequence of 5 numbers now represents firstly the quantity of pixels of the same colour in the run, followed by the four values for the pixel data.

## Testing your kata

You can use the above example to begin testing your function. If you want, bring in a library such as `get-pixels` which allows you to import a png file into Node and return its pixels as an array in the same format as described above. Try compressing the sample files to see what a difference this method of compression makes.


