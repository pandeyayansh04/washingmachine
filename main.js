var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(700);
        playerobject.scaleToHeight(510);
        playerobject.set({
        top:0,
        left:0
        })
        canvas.add(playerobject)
        })
    }
    
	

function playSound(){
	x.play();
}
