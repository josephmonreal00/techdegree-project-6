# techdegree-project-6
Static Node.js and Express Site

Added the code to handle errors and also edited the CSS. The CSS the I edited was the hovering of a button as well as the anchor tags. Hovering over either will change the color to aqua. The third change I did for CSS was the font-family.

The error code that I added is to handle when a param does not exist and it spits out a 404 error. The other error handle code I added was when a user is trying to access the project or projects path with an incorrect project # below 0 or greater than 5 then an error will be thrown.

CSS

.portfolio-me a:hover{
    /*color: #999;*/
    color: rgb(8, 172, 218);
}

font-family: 'Open Sans', sans-serif;

.button:hover{
    background-color: rgb(8, 172, 218);
}
