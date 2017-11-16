$(document).ready(function () {



    var computerpick = Math.floor(Math.random() * 101) + 19;
    var diamond1 = Math.floor(Math.random() * 12) + 1;
    var emerald1 = Math.floor(Math.random() * 12) + 1;
    var ruby1 = Math.floor(Math.random() * 12) + 1;
    var sapphire1 = Math.floor(Math.random() * 12) + 1;
    var start = 0;
    var scored = 0;
    var wins = 0;
    var losses = 0;

    var reset = false;

    console.log(computerpick);
    console.log(diamond1);
    console.log(emerald1);
    console.log(ruby1);
    console.log(sapphire1);


    $(".diamond1").val(diamond1);
    $(".emerald1").val(emerald1);
    $(".ruby1").val(ruby1);
    $(".sapphire1").val(sapphire1);

    $("#randomplace2").text(computerpick);
    $("#scoredisplay").text(start);


    $(".crystal").on("click", function () {

        var scored = (start += parseInt(this.value))
        $("#scoredisplay").text(scored);

        if (reset != true) {

            if (computerpick === scored) {
                wins++;
                $("#wins").text(wins);
                scored = 0;
                // $("#scoredisplay").text(scored);
                // computerpick = Math.floor(Math.random() * 101) + 19;
                // $("#randomplace2").text(computerpick);
                // reset = true;
            }

            if (scored > computerpick) {
                losses++;
                $("#losses").text(losses);
                scored = 0;
                // $("#scoredisplay").text(scored);
                // computerpick = Math.floor(Math.random() * 101) + 19;
                // $("#randomplace2").text(computerpick);
                // reset = true;
 
            } 
           

        }
      




    });


});



// **********************************************************
// I could not get the game to reset successfully.
// I was able to get somethings to reset but then the game would not work as intended.
// **************************************************************