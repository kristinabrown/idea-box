$(document).ready(function(){
  var $ideasDiv = $("#ideas");
  
  $(".button").click(function(event){
    document.getElementById("main-button").disabled = true;

    
    var title = $(".title").val();
    var body = $(".body").val();

    $.post("/ideas", { title: title, body: body }).then(function(idea){
      $ideasDiv.prepend(createCard(idea));
      
      document.getElementById("main-button").disabled = false;
      $(".title").val("");
      $(".body").val("");
      $(".delete").on("click", deleteIdea);
      $(".down").on("click", down);
      $(".up").on("click", up);
    }).fail(function() {
        alert('Not a good idea, try again!')
        document.getElementById("main-button").disabled = false;
      });
  });
  
  $(".up").on("click", up);
  
  $(".down").on("click", down);
  
  $(".delete").on("click", deleteIdea);
  
  $(".search").keyup(function(){
    var text = $(this).val();

    $ideasDiv.children().each(function(){
      if ($(this).text().search(new RegExp(text, "i")) === -1) {
        $(this).addClass("hidden")
        $(".delete").on("click", deleteIdea);
        $(".down").on("click", down);
        $(".up").on("click", up);
      }
        else {
          $(this).removeClass("hidden")
          $(".delete").on("click", deleteIdea);
          $(".down").on("click", down);
          $(".up").on("click", up);
        }
    })
  });
  
});

//helper functions

function createCard(idea) {
  return "<div class='col s10 offset-s1'>" +
         "<div class='col s12 m10'> <div class='card blue-grey darken-1 z-depth-3 display-cards hoverable'>" +
         "<div class='hidden'>" + idea.id + "</div> <div class='card-content white-text'> <div class='card-image'>" +
         "<img src='/assets/idea.png' alt='light bulb'><span class='card-title'> <h4>" + idea.title + "</h4></span> </div>" +
         "<p>" + idea.body + "</p> </div> <div class='card-action card-foot blue-text text-darken-4'>" +
         "<h4 class='red-text text-lighten-2'>" + idea.quality + "</h4> <button class='up'><i class='fa fa-thumbs-o-up'>" + 
         "</i></button> <button class='down'> <i class='fa fa-thumbs-o-down'></i> </button>" +
         "<a class='delete right' href='#'>Delete</a> <a class='right' href='/ideas/" + idea.id + "/edit'>Edit</a> </div> </div> </div> </div>"
}

function deleteIdea() {
  var all = $(this).parent().parent().text();
  var div = $(this).parent().parent().parent().parent().parent();
  var ideaId = all.trim().slice(0, 2).trim();
  var ideaId = all.trim().slice(0, 2).trim();
  
  $.ajax({
    method: "DELETE",
    url: "/ideas/" + ideaId,
    data: { id: ideaId }, 
    success:  function(){
      div.html("");
    }
  });
};

function down() {
  var all = $(this).parent().parent().text();
  var div = $(this).parent().parent().parent().parent().parent();
  var ideaId = all.trim().slice(0, 2).trim();

  $.post("/down", { id: ideaId }).then(function(idea){
    div.html(createCard(idea));
    $(".delete").on("click", deleteIdea);
    $(".down").on("click", down);
    $(".up").on("click", up);
  });
};

function up() {
  var all = $(this).parent().parent().text();
  var div = $(this).parent().parent().parent().parent().parent();
  var ideaId = all.trim().slice(0, 2).trim();
  var $ideasDiv = $("#ideas");
  

  $.post("/up", { id: ideaId }).then(function(idea){
    div.html(createCard(idea));
    $(".delete").on("click", deleteIdea);
    $(".down").on("click", down);
    $(".up").on("click", up);
  });
};