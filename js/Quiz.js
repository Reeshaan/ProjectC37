class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
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
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
        question.hide()
    //write code to change the background color here
         background("yellow");
    //write code to show a heading for showing the result of Quiz
    textSize(40);
    fill("yellow")
    text("Result",800,350);
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
         if(allContestants!==undefined){
           var displayAnswers=230
         fill("Blue");
         textSize(20);
         text("NOTE:Contestant who chose the correct option are highlighted in green Colour",130,230);
         for(var plr in allContestants){
          var correct=2
          if(correct==allContestants[plr].answer){
            fill("green");
          }
          else{
            fill("red")
          }displayAnswers+=30
          text(allContestants[plr].name,250,displayAnswers)
      }
         }
    //write code to add a note here

    //write code to highlight contest who answered correctly
 

  }
}
