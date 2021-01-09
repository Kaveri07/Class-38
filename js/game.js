class Game{
    constructor(){}

    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value" , function(data){
            gameState= data.val();
        })
    }

    update(state) {
        database.ref("/").update({
            gameState : state
        })
    }

    //gameState 0
    start() {
        if(gameState === 0){
            form = new Form();
            form.display();
            
            player = new Player();
            player.getCount();
        }

        car1 = createSprite(100,20);
        car2 = createSprite(300,20);
        car3 = createSprite(500,20);
        car4 = createSprite(700,20);
        cars = [car1,car2,car3,car4];
    }

    //gameState 1
    play() {
        form.hide();

        Player.getPlayerInfo();

        //index of array of cars 
        var index = 0;

        //x and y pos of the cars
        var x = 0;
        var y;
        
        if(allPlayers !== undefined){

            //var displayPosition =130

            for(var plr in allPlayers ){

                index++;
                x += 200;
                y = displayHeight-allPlayers[plr].distance;

                cars[index-1].x = x;
                cars[index-1].y = y;
                if(index === player.index) {
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                } else {
                    cars[index-1].shapeColor = "black";
                }
                
               // displayPosition+=30;

                // if(plr === "player"+player.index){
                //     fill("red");
                // }
                // else{
                //     fill(0);
                // }

               // textSize(13);
               // text(allPlayers[plr].name+ " : "+allPlayers[plr].distance, 130, displayPosition)

            }
        }

        if(keyIsDown(UP_ARROW) && player.index !== null) {
            player.distance+=40;
            player.update();
        }

        drawSprites();
    }
}