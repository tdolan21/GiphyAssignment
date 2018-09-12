//click listener for all buttons
$(".animal").on("click", function() {
//variable storing the buttons
var animals = $(this).attr("data-animal");
var topics = ["dog", "cat", "squirrel", "tiger", "lion"];

    
  //queryURL using the animal name
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q" +
    topics +
    "&api_key=dc6zaTOxFJmzC&limit=10";

    
  //AJAX request for information
  $.ajax({
    url: queryURL,
    method: "GET"
    //response function dictating what to do with results
  }).then(function(response) {
    console.log(queryURL);

    console.log(response);


  var resultsGoHere = $("<div class='results'>")

    var results = response.data;

    for (var i = 0; i < results.length; i++) {
      var animalDiv = $("<div>");
      var p = $("<p>").text();
    }
  });
});
