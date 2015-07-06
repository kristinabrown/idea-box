$(document).ready(function(){
    
  var $ideasDiv = $("#ideas");
  
  $(".button").click(function(event){
    document.getElementById("main-button").disabled = true;
;
    
    var title = $(".title").val();
    var body = $(".body").val();
    
    $.post("/ideas", { title: title, body: body }).then(function(idea){
    $ideasDiv.prepend("<div class='row'><div class='col s12 m8'>" +
                  "<div class='card blue-grey darken-1 z-depth-3 display-cards'>" +
                  " <div class='card-content white-text'>" + 
                  "<span class='card-title'> <h4>" +
                  idea.title + 
                  "</h4>" + "</span> <p> " + 
                  idea.body + 
                  "</p> </div> <div class='card-action card-foot blue-text text-lighten-4'><h6> " + 
                  idea.quality + 
                  "</h6></div></div> </div></div>");
      
      document.getElementById("main-button").disabled = false;
      $(".title").val("");
      $(".body").val("");
    });
  });
});