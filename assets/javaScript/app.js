$(document).ready(function () {

var gifs = ["Halo" , "Super Mario" , "Just Cause" , "Final Fantasy"];


function test(){
    console.log("test")
    // // make gif = to whatever button was pushed
    // var gif = $(this).attr("data-name");

    // //creating a URL to search giphy for the name on the button
    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //     gif + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    //     // AJAX request
    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //       })

}



function renderButtons(){
    $("#buttons-view").empty();
    for (var i = 0; i < gifs.length; i++) {

        var a = $("<button>");
        // Adding a class of gif-btn to our button
        a.addClass("gif-btn");
        // Adding a data-attribute
        a.attr("data-name", gifs[i]);
        // Providing the initial button text
        a.text(gifs[i]);
        // Adding the button to the buttons-view div
        $("#buttons-view").append(a);
    }
}
//event listener on all buttons with the class gif-btn
$(document).on("click", ".gif-btn", test);

//render Initial buttons 
renderButtons();
}); // end document ready function