$(document).ready(function(){
function makeButtons();
  for (var i = 0; i < buttonPresets.length; i++) {
    var button = $("<button>");
    button.attr({ "data-gif": buttonPresets[i], "class": "gif-button" });
    button.text(buttonPresets[i]);
    $(".gif-buttons").append(button);
  };
  makeButtons();
var buttonPresets = ["dog","cat","lion","tiger"];
    // Adding click event listen listener to all buttons
    $("button").on("click", function() {
      
        // Grabbing and storing the data-animal property value from the button
        var animal = $(this).attr("data-animal");
  
        // Constructing a queryURL using the animal name
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          animal + "&api_key=dc6zaTOxFJmzC&limit=10";
  
        // Performing an AJAX request with the queryURL
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          // After data comes back from the request
          .then(function(response) {
            console.log(queryURL);
            console.log(this);
            console.log(response);
            
            console.log(response.data)
            // storing the data from the AJAX request in the results variable
            var results = response.data;
  
            // Looping through each result item
            for (var i = 0; i < results.length; i++) {
  
              // Creating and storing a div tag
              var animalDiv = $("<div>");
  
              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + results[i].rating);
  
              // Creating and storing an image tag
              var animalImage = $("<img>");
              // Setting the src attribute of the image to a property pulled off the result item
              animalImage.attr("src", results[i].images.fixed_height.url);
  
              // Appending the paragraph and image tag to the animalDiv
              animalDiv.append(p);
              animalDiv.append(animalImage);
  
              // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
              $("#gifs-appear-here").prepend(animalDiv);
              
            }
            $(".gif").on("click", function() {
                // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                var state = $(this).attr("data-state");
                // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                // Then, set the image's data-state to animate
                // Else set src to the data-still value
                if (state === "still") {
                  $(this).attr("src", $(this).attr("data-animate"));
                  $(this).attr("data-state", "animate");
                } else {
                  $(this).attr("src", $(this).attr("data-still"));
                  $(this).attr("data-state", "still");
    
                }
            });
          });
          var submit = 
          queryURL.q = $("#animal-bar").val().trim();

         $("#submit").on("click", function(){
             $("<button>").attr("data-animal");
             $(animalBar).push(newTopics);
             console.log(newTopics)
         })
    });
  })