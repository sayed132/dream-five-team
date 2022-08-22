function perPlayerCalc(){
    const perPlayerExpens = document.getElementById('per-player');
    const perPlayerExpensString = perPlayerExpens.value;
    const perPlayer = parseInt(perPlayerExpensString)

    const playerCount = document.querySelectorAll("#players li");
    const totalPlayer = perPlayer * playerCount.length;
    perPlayerExpens.value = '';

    const totalPlayerExpens = document.getElementById('total-player-expense');
    const previosTotalString = totalPlayerExpens.innerText;
    const previosTotal = parseInt(previosTotalString);
    const newTotal = totalPlayer + previosTotal;
    totalPlayerExpens.innerText = totalPlayer;
    return newTotal;
}

function teamExpens(elemenId){
    const fee = document.getElementById(elemenId);
    const feeString = fee.value;
    const previosFee = parseInt(feeString);
    const newFeeTotal = previosFee;
    fee.value = newFeeTotal
    fee.value = '';
    return newFeeTotal;
}

document.getElementById('calculator').addEventListener('click', function(){
    perPlayerCalc()
    // perPlayerExpens.value = totalPlayer
    // console.log(totalPlayer)

    
    
})

document.getElementById('calculat-total').addEventListener('click', function(){
    const manegerFee = teamExpens('maneger-fee');
    const coachFee = teamExpens('coach-fee');
    
    const totalPlayerExpens = document.getElementById('total-player-expense');
    const previosTotalString = totalPlayerExpens.innerText;
    const previosTotal = parseInt(previosTotalString);
          
    const totalElements = previosTotal + coachFee + manegerFee;
    totalPlayerExpens.innerText = previosTotal  

    const totalTeamExpens = document.getElementById('subtotal-ammount');
    const totalTeamExpensString = totalTeamExpens.innerText;
    const previosTotalTeamExpens = parseInt(totalTeamExpensString);
    const newTotalTeamExpens = previosTotalTeamExpens;
    totalTeamExpens.innerText = totalElements
})