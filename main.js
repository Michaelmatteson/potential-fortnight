canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
rover_width = 200;
rover_height = 200;
rover_x = 10;
rover_y = 10;
background_image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjooinn.com%2Fimages%2Fparking-lot-1.jpg&f=1&nofb=1";
rover_image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.carbodydesign.com%2Fmedia%2F2018%2F05%2FBrabham-BT62-Top-view-vertical.jpg&f=1&nofb=1";
function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag= new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}
function uploadBackground(){
   ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
keyPressed = e.keyCode;
console.log (keyPressed)
if(keyPressed== '38') 
{
up();
}
if(keyPressed== '40') 
{
down();
}
if(keyPressed== '37') 
{
left();
}
if(keyPressed== '39') 
{
right();
}
}
function down()
{
if (rover_y<=500);
{
    rover_y=rover_y+10;
    uploadBackground();
    uploadRover();
}
}
function up()
{
if (rover_y>=0);
{
    rover_y=rover_y-10;
    uploadBackground();
    uploadRover();
}
}
function left()
{
if (rover_x>=0);
{
    rover_x=rover_x-10;
    uploadBackground();
    uploadRover();
}
}
function right()
{
if (rover_x<=700);
{
    rover_x=rover_x+10;
    uploadBackground();
    uploadRover();
}
}
