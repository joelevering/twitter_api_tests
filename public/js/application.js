$(document).ready(function() {
  $(document).on("submit", "form", function(e){
    e.preventDefault();
    var tweet = $("textarea[name=theTweet]").val();
    console.log(tweet);
    $("form").prop('disabled', true);
    $("#results").html("<h3>Your tweet is being sent!</h3>")
    $.post('/sendtweet', {"theTweet": tweet})
      .done(function(response){
        $("#results").html(response);
      })
      .fail(function(){
        $("#results").html("<h3>SOMETHING WENT HORRIBLY WRONG</h3>");
      });
  });
});
