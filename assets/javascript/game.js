
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.lenght;


    function reWriteStats() {
        console.log("Wins: " + wins);
        console.log("Losses: " + losses);
        console.log("Guesses: " + guesses);
    }

    //

    function letteranswer() {
        result = characters[Math.floor(Math.random() * (25 - 0) + 0)]
        console.log(result)
    }

    function letteranswerPrint(){
    document.getElementById("Wins").innerHTML = "Wins" + wins;
    document.getElementById("Losses").innerHTML = "Losses" + losses;
    document.getElementById("Guesses").textContent = "Guesses" + guesses;
    }

    document.onkeyup = function(event) {
         var letter = event.key.toLowerCase();
         
        if(letter === result){
            wins++;
            guesses=9;
           
            letteranswerPrint();
           // reWriteStats();
        }  
        else{
        guesses--;
        reWriteStats();
        letteranswerPrint();
        }
        if (guesses <= 1){
        losses++;
        guesses=9;
        letteranswerPrint();
        }
        console.log(result);
        // letteranswer();
    }
     
    

   