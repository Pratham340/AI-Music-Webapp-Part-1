function setup() {
	canvas =  createCanvas(600,400);
	canvas.center();
    canvas.position(470, 250);
	video = createCapture(VIDEO);
	video.hide();
}
user_name= localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML= "<h1>Welcome "+user_name+"!</h1>";
  function draw(){
	image(video, 0, 0, 600, 400);
  }