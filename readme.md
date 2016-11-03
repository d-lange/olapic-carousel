### Olapic Front-end Test

For this project I had to connect to Olapic's API provided the API Key I was given.
The task was to display the latest photos from the customers Olapic Account. I reviewed the documentation and knew I could get to the customers most recent media by url query.
I used jQuery and AJAX to make a GET request to the API in which I received JSON data back.

After receiving the JSON I noticed it was nested objects and needed to navigate to media, which the documentation said was where images were located. I then knew I needed to loop through all of the media objects, which were in an Array. I used the jQuery .each method and appended a string of html concatenated along with the objects properties such as its source - image - caption.

I then used a jQuery plugin lightSlider to create the carousel displaying 6 images at a time. 
