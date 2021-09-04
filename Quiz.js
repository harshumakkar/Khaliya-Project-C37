class Quiz{
    constructor(){}
  
    getState(){
      var gameStateRef = database.ref('gameState');
      gameStateRef.on("value", function(data){
        gameState = data.val();
      })
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
      }
    }

      play(){
        question.hide();
        background("yellow");
        textSize(30);
        title.html("Results", 120, 100);
       // Contestant.getContestantInfo();  
      
  
      question = new Question();
      question.display();
    }
}
  
  