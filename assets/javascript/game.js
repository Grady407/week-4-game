$(document).ready(function () {



    let scored;
    let start = 0;
    let wins = 0;
    let losses = 0;

    
    function startGame() {
    kryst = (0*this.value);
    let scored =0;
      computerpick = Math.floor(Math.random() * 101) + 19;

      diamond1 = Math.floor(Math.random() * 12) + 1;
      emerald1 = Math.floor(Math.random() * 12) + 1;
      ruby1 = Math.floor(Math.random() * 12) + 1;
      sapphire1 = Math.floor(Math.random() * 12) + 1;


     $(".diamond1").val(diamond1);
     $(".emerald1").val(emerald1);
     $(".ruby1").val(ruby1);
     $(".sapphire1").val(sapphire1);
    
     $("#randomplace2").text(computerpick);
     $("#scoredisplay").text(start);
    }



    startGame();

    console.log(computerpick);
    console.log(diamond1);
    console.log(emerald1);
    console.log(ruby1);
    console.log(sapphire1);
    



    $(".crystal").on("click", function () {
        kryst = parseInt(this.value);
        console.log(this.value);
        scored = (start += kryst)
        $("#scoredisplay").text(scored);
    

            if (computerpick === scored) {
                startGame();
                wins++;
                $("#wins").text(wins);
                scored=0;
                startGame();
            }

            if (scored > computerpick) {
                startGame();
                losses++;
                $("#losses").text(losses);
                scored=0;
                startGame();
            } 
           
        });
        
      




   


});



// **********************************************************
// I could not get the game to reset successfully.
// I was able to get somethings to reset but then the game would not work as intended.
// **************************************************************