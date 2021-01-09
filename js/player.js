class Player {
    constructor() {
        this.name= null;
        this.distance = 0;
        this.index = null;
    }

    getCount() {
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", (data)=>{
            playerCount = data.val();
        })
    }

    update() {
        var playerIndex = "players/player" +this.index;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        })
    }

    updateCount(count) {
        database.ref("/").update({
            playerCount: count
        })
    }
    
    static getPlayerInfo(){
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val();
        })
    }
}