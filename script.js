let humanScore = 0;
let aiScore = 0;

playGame();



function getAiChoice ()
{
    let choice = ['rock', 'paper', 'scissor'];
    return choice[Math.floor(Math.random()* 3)];
}

function getHumanChoice()
{
    return prompt("Please Enter rock Paper or Scissor").toLocaleLowerCase();
}


function playRound(humanChoice, aiChoice)
{

    const winningCombo = 
    {
        rock: 'scissor',
        scissor: 'paper',
        paper:  'rock'
    };

    if(aiChoice === humanChoice)
    {
        console.log('its a tie mga tanga');
    }
    else if(aiChoice === winningCombo[humanChoice])
    {
        console.log(`Congrats putangina mo nanalo ka +1 ka saakin`);
        humanScore++;
    }
    else
    {
        console.log(`so sad putangina talo amputa!!!!`);
        aiScore++;
    }

}

if(humanScore === aiScore)
{
    console.log(`its a tie talagang mga bobo`);
    console.log(`humanScore: ${humanScore} ----- aiscore: ${aiScore}`);
}
else if(humanScore > aiScore)
{
    console.log(`Congrats Stupid you won the game`);
    console.log(`You score is: ${humanScore}`);
}
else
{
    console.log("Oh no you loseeee bitch");
}


function playGame()
{
    for(let i = 0; i < 10; i++)
    {
        let humanChoice = getHumanChoice();
        let aiChoice = getAiChoice();

        playRound(humanChoice, aiChoice);
    }
}



