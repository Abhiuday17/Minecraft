canvas = new fabric.Canvas("myCanvas")

player_x = 10;
player_y = 10;
blockWidth = 30;
blockHeight = 30;

var playerObject = "";
var blockObject = "";

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObject = Img 
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:player_y,left:player_x
        })
        canvas.add(playerObject)
    }) 
}

function blockUpdate(get_img){
    fabric.Image.fromURL (get_img,function(Img){
        blockObject = Img;
        blockObject.scaleToWidth(blockWidth);
        blockObject.scaleToHeight(blockHeight);
        blockObject.set({
            top:player_y,left :player_x
        })
        canvas.add(blockObject)
    })
}

playerUpdate()

window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    keypressed = e.keyCode;
    if(e.shiftKey == true  && keypressed == "80"){
        blockWidth = blockWidth + 10;
        blockHeight = blockHeight + 10;
        document.getElementById("Current_Width").innerHTML=blockWidth;
        document.getElementById("Current_Height").innerHTML=blockHeight;
    }

    if(e.shiftKey == true  && keypressed == "77"){
        blockWidth = blockWidth - 10;
        blockHeight = blockHeight - 10;
        document.getElementById("Current_Width").innerHTML=blockWidth;
        document.getElementById("Current_Height").innerHTML=blockHeight;
    }

    if(keypressed == "40"){
        down()
    }
    
    if(keypressed == "37"){
        left()
    }

    if(keypressed == "38"){
        up()
    }

    if(keypressed == "39"){
       right()
    }

    if(keypressed == "67"){
        blockUpdate("cloud.jpg")
    }

    if(keypressed == "68"){
        blockUpdate("dark_green.png")
    }

    if(keypressed == "71"){
        blockUpdate("ground.png")
    }

    if(keypressed == "76"){
        blockUpdate("light_green.png")
    }

    if(keypressed == "82"){
        blockUpdate("roof.jpg")
    }

    if(keypressed == "84"){
        blockUpdate( "trunk.jpg")
    }

    if(keypressed == "85"){
        blockUpdate("unique.png")
    }

    if(keypressed == "87"){
        blockUpdate("wall.jpg")
    }

    if(keypressed == "89"){
        blockUpdate("yellow_wall.png")
    }
}

function up(){
    if(player_y > 0 ){
        player_y = player_y - blockHeight;
        canvas.remove(playerObject)
        playerUpdate()
    }
}

function down(){
    if(player_y < 500){
        player_y = player_y + blockHeight;
        canvas.remove(playerObject)
        playerUpdate()
        console.log("down")
    }
}

function left(){
    if(player_x > 0 ){
        player_x = player_x - blockWidth;
        canvas.remove(playerObject)
        playerUpdate()
    }
}

function right(){
    if(player_x < 850 ){
        player_x = player_x + blockWidth;
        canvas.remove(playerObject)
        playerUpdate()
    }
}