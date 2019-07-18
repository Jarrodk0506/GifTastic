$(document).ready(function () {

var gifs = ["Borderlands" , "Super Mario" , "Yoshi" , "Final Fantasy", "Pokemon"];



function displayGif(){

    $("#gif-view").empty();
    // make gif = to whatever button was pushed
    var gif = $(this).attr("data-name");

    //creating a URL to search giphy for the name on the button
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        gif + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=20";
        // AJAX request
        $.ajax({
            url: queryURL,
            method: "GET"
          })
          .then(function(response) {
            var results = response.data;

            
            for (var i = 0; i < results.length; i++) {
                if (results[i].rating !== "r" ) {
                    //create a div for the gif
                    var gifDiv = $("<div>");

                    // Creating an image tag and give it a src attribute of a proprty pulled off the result

                    var gifImage = $("<img>").attr("src", results[i].images.fixed_height_still.url);
                    gifImage.attr("class", "gifImage");
                    gifImage.attr("data-state", "still")
                    gifImage.attr("data-stillUrl", results[i].images.fixed_height_still.url);
                    gifImage.attr("data-animateUrl", results[i].images.fixed_height.url);

                    //appending the image to the gifDiv
                    gifDiv.append(gifImage);

                    // Prepending the gifDiv to the "#gif-view" div in the HTML
                    $("#gif-view").append(gifDiv);

                    
                }//end appropriate rating check
                
            }//end for results.length
            $(".gifImage").on("click",function(){
                
                var state = $(this).attr("data-state")

                if(state === "still"){
                    console.log(this);
                    $(this).attr("data-state", "animate");
                    $(this).attr("src", $(this).attr("data-animateUrl"))
                    
                }
                else if(state === "animate"){
                    console.log(this);
                    $(this).attr("data-state", "still");
                    $(this).attr("src", $(this).attr("data-stillUrl"))
                }

            });
            
            
          }); //end .then function

}//end display gif






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
}//end render button

// This function handles events where a movie button is clicked
$("#add-gif").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var gif = $("#gif-input").val().trim();

    // Adding movie from the textbox to our array
    gifs.push(gif);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
});//end add gif


//event listener on all buttons with the class gif-btn
$(document).on("click", ".gif-btn", displayGif);

//render Initial buttons 
renderButtons();
}); // end document ready function