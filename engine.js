// generate board with tiles
$(document).ready(function create_board(){
    $('body').append('<h1 id = "titlediv"><strong>2048 - PLAY NOW!</strong></h1>');
    $('body').append('<div id = "board-table" class = "col-12 col-sm-8 col-md-6 col-lg-4"></div>');
        for (var i=0; i<4; i++){
            $('#board-table').append(`<div class = "wrapper d-flex" line=${i+1}></div>`);
        }
        for (var j=0; j<4; j++){
            $(".wrapper").append(`<div class = "col-3 empty-tile" column=${j+1}></div>`);
        }
    $(".wrapper").each(function(){
        $(this).children().attr("line",$(this).attr("line"));
        $(this).removeAttr("line");
    });
    $('body').append('<h2 id = "scorediv">Your Highest Score:</h2>');
});