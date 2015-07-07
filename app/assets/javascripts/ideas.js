$(document).ready(function(){
    
  var $ideasDiv = $("#ideas");
  
  $(".button").click(function(event){
    document.getElementById("main-button").disabled = true;

    
    var title = $(".title").val();
    var body = $(".body").val();

    $.post("/ideas", { title: title, body: body }).then(function(idea){
    $ideasDiv.prepend("<div class='row'> <div class='col s12 offset-s1 main-col'><div class='col s12 m8'>" +
                  "<div class='card blue-grey darken-1 z-depth-3 display-cards'>" +
                  "<div class='hidden'>" + idea.id + "</div>" +
                  " <div class='card-content white-text'>" + 
                  "<span class='card-title'> <h4>" +
                  idea.title + 
                  "</h4>" + "</span> <p> " + 
                  idea.body + 
                  "</p> </div> <div class='card-action card-foot blue-text text-darken-4'><h6 class='red-text text-lighten-4'> " + 
                  idea.quality + 
                  "</h6><button class='up'> <i class='fa fa-thumbs-o-up'></i> </button> <button class='down'> <i class='fa fa-thumbs-o-down'></i> </button></div></div></div> </div></div>");
      
      document.getElementById("main-button").disabled = false;
      $(".title").val("");
      $(".body").val("");
    }).fail(function() {
        alert('Not a good idea, try again!')
        document.getElementById("main-button").disabled = false;
      });
  });
  
  $(".up").on("click", function(event){
    // event.preventDefault();
    var all = $(this).parent().parent().text();
    var div = $(this).parent().parent().parent().parent();
    var ideaId = all.trim().slice(0, 2).trim();

    $.post("/up", { id: ideaId }).then(function(idea){
      
      div.html("<div class='row'> <div class='col s12 offset-s1 main-col'><div class='col s12 m8'>" +
                    "<div class='card blue-grey darken-1 z-depth-3 display-cards'>" +
                    "<div class='hidden'>" + idea.id + "</div>" +
                    " <div class='card-content white-text'>" + 
                    "<span class='card-title'> <h4>" +
                    idea.title + 
                    "</h4>" + "</span> <p> " + 
                    idea.body + 
                    "</p> </div> <div class='card-action card-foot blue-text text-darken-4'><h6 class='red-text text-lighten-4'> " + 
                    idea.quality + 
                    "</h6><button class='up'> <i class='fa fa-thumbs-o-up'></i> </button> <button class='down'> <i class='fa fa-thumbs-o-down'></i> </button></div></div></div> </div></div>");
    });
  });
  
  $(".down").on("click", function(event){
    // event.preventDefault();
    var all = $(this).parent().parent().text();
    var div = $(this).parent().parent().parent().parent();
    var ideaId = all.trim().slice(0, 2).trim();

    $.post("/down", { id: ideaId }).then(function(idea){
      
      div.html("<div class='row'> <div class='col s12 offset-s1 main-col'><div class='col s12 m8'>" +
                    "<div class='card blue-grey darken-1 z-depth-3 display-cards'>" +
                    "<div class='hidden'>" + idea.id + "</div>" +
                    " <div class='card-content white-text'>" + 
                    "<span class='card-title'> <h4>" +
                    idea.title + 
                    "</h4>" + "</span> <p> " + 
                    idea.body + 
                    "</p> </div> <div class='card-action card-foot blue-text text-darken-4'><h6 class='red-text text-lighten-4'> " + 
                    idea.quality + 
                    "</h6><button class='up'> <i class='fa fa-thumbs-o-up'></i> </button> <button class='down'> <i class='fa fa-thumbs-o-down'></i> </button></div></div></div> </div></div>");
    });
  });
  
});