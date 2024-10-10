let score = document.querySelector('.score');
let winnerPanel = document.querySelector('.winner');
let selection = document.querySelector('.selection');

let humanScore = 0;
let aiScore = 0;
let round = 0;


function getComputeChoice()
{
    let choiceArr = ['paper', 'rock', 'scissor'];
    return choiceArr[Math.floor(Math.random()* 3)];
}

function playRound(humanChoice, aiChoice)
{
    const winningCombo = 
    {
        paper: 'rock',
        rock: 'scissor',
        scissor: 'paper'
    };

    if(aiChoice === humanChoice)
    {
        winnerPanel.textContent = 'It is a draw!!!';
    }
    else if(aiChoice === winningCombo[humanChoice])
    {
        winnerPanel.textContent = `The winner is: human! ${humanChoice} beats ${aiChoice}`;
        humanScore++;
    }
    else
    {
        winnerPanel.textContent = `The winner is AI: ${aiChoice} beats ${humanChoice}`
        aiScore;
    }

    score.textContent = `Player Score: ${humanScore}`;
}


selection.addEventListener('click', (e) =>{

let target = e.target;
let aiChoice = getComputeChoice();

if(round === 10)
    {
        if(humanScore > aiScore)
        {
            winnerPanel.textContent = "Congratulations Human, You have won! ";
        }
        else if(humanScore === aiScore)
        {
            winnerPanel.textContent = "Its a tie mga tanga";
        }
        else
        {
            winnerPanel.textContent = "Computer has won, you have lost! ";
        }
    }
    else
    {
        switch (target.id) {
            case 'rock':
                playRound('rock', aiChoice);
                round++;
                break;
            case 'paper':
                playRound('paper', aiChoice);
                round++;
                break;
            case 'scissor':
                playRound('scissor', aiChoice);
                round++;
                break;
        }
            
    }


});