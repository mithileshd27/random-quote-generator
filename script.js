$(document).ready(function() {
  var colours = ["#F44336", "#9C27B0", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFC107", "#FF9800"];
  var accentColours = ["#E57373", "#BA68C8", "#4FC3F7", "#4DD0E1", "#4DB6AC", "#81C784", "#AED581", "#DCE775", "#FFD54F", "#FFB74D"];
  $("#nextQuote").on("click", function(){
    var quoteURL = "https://api.quotable.io/random";
    var colourNumber = Math.floor(Math.random()*10);
    $.getJSON( quoteURL, function(json){
      $( "#header_padding, .well" ).fadeOut( "slow", function() {
        $("#header_padding").css("background-color",accentColours[colourNumber]);
        $("#footer").css("background-color",accentColours[colourNumber]);
        $(".well").css("cssText","background-color: " + colours[colourNumber] + " !important");
        $(".quote").html(JSON.stringify(json.content));
        $(".quotee").html("- " + JSON.stringify(json.author).slice(1,(JSON.stringify(json.author).length-1)));
        $("#header_padding, .well").fadeIn("slow", function() {
          $("#tweet").attr("href","https://twitter.com/intent/tweet?hashtags=quotes,quoteoftheday&text="+"Just read a quote by "+JSON.stringify(json.author).slice(1,(JSON.stringify(json.author).length-1))+".");
        });
      });
    });
  });
});
  
