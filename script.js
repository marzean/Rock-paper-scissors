function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt()); 
    console.log ('Computer Choice',botChoice);
    results = decideWinner(humanChoice,botChoice);
    console.log(results);
    message = finalMessage(results);
    console.log(message); // {'message': 'You win!' , 'color': 'green'}
 rpsFrontEnd(yourChoice.id, botChoice, message);

}
function randToRpsInt() {
    return Math.floor(Math.random()*3);
}
function numberToChoice(number) {
    return['Rock','Paper','Scissor'] [number];
}

function decideWinner(yourChoice,computerChoice){
    var rpsDatabase = {
        'Rock': { 'Scissor': 1, 'Rock': 0.5,'Paper': 0},
        'Paper': { 'Rock': 1, 'Paper': 0.5,'Scissor': 0 },
        'Scissor': { 'Paper': 1,'Scissor': 0.5, 'Rock': 0}
    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}
function finalMessage([yourScore,computerScore]){
    if (yourScore === 0){
        return { 'message': 'You lost', 'color': 'red'};
    } else if (yourScore === 0.5){
        return { 'message':'You tied','color': 'yellow'};
    }
 else {
     return {'message':'You win', 'color': 'green'};
 }
}
function rpsFrontEnd(humanImageChoice,botImageChoice, finalMessage) {
    var imagesDatabase = {
        'Rock': document.getElementById('Rock').src,
        'Paper': document.getElementById('Paper').src,
        'Scissor': document.getElementById('Scissor').src
    }
    document.getElementById('Rock').remove();
    document.getElementById('Paper').remove();
    document.getElementById('Scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    humanDiv.innerHTML ="<img src='" + imagesDatabase[humanImageChoice] +"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML ="<h1 style='color':" + finalMessage['color'] +"; font-size:60px; padding: 30px;'>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML ="<img src='" + imagesDatabase[botImageChoice] +"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"
  
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);


}
