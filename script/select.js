document.getElementById('plears-seloctor').addEventListener('click', function(event){
    if(event.target.innrHTML === 'Select'){
        
        const playerName = event.target.parentNode.parentNode.childNodes[4].childNodes[1].innerText;
        const selectPlayer = document.querySelectorAll('#select li');
        if(selectPlayer === 5){
            return alert('5 Player Seleted Done And No More Selected')
        }

        const playerList = document.getElementById('select');
        const li = document.createElement('li');
        li.append(playerName);
        playerList.append(li)
        
    }
})