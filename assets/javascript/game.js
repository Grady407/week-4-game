



    let scored;
    let start = 0;
    let wins = 0;
    let losses = 0;


    
    function startGame() {
    
    
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
    

    var totalz = [];

    $(".crystal").on("click", function () {


    
kryst = parseInt(this.value);
console.log(kryst);
totalz.push(kryst);
console.log(totalz);

scored = totalz.reduce(function(a,b){
    return a+b; 
});

console.log(scored);
$("#scoredisplay").text(scored);

        // var scored = (start += parseInt(this.value))

        // $("#scoredisplay").text(scored);
    

            if (computerpick === scored) {
                wins++;
                $("#wins").text(wins);
                totalz=[];
                console.log("hey" +this.value);
                startGame();
            
            }

            if (scored > computerpick) {
                losses++;
                $("#losses").text(losses);
                totalz=[];
                console.log("nay"+this.value);
                startGame();
                
            } 
           
        });
        
      




   






// **********************************************************
// I could not get the game to reset successfully.
// I was able to get somethings to reset but then the game would not work as intended.
// **************************************************************


// function addit(x,y){
//     let x = scored;
//     let y = this.value;
//     let scored= x+y;
// }

// addit(scored)

// var totalz = [];
// kryst = parseInt(this.value)
// totalz.push(kryst);

// totalz.reduce(function(a,b){
//     scored= a+b; 
//     $("#scoredisplay").text(scored);
// })


// for (i=0; i<totalz.length; i++){
//     var summedup = (0+=totalz[i]);
// }
