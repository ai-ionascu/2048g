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
    generate_random_two();
    generate_random_two();
    $('body').append('<h2 id = "scorediv">Your Highest Score:</h2>');
});

function generate_random_two(){
    var rowLength = $(".empty-tile").length;
    var random = Math.floor(Math.random() * rowLength);
    var selectTile = $(".empty-tile").eq(random);
    $(selectTile).removeClass("empty-tile");
    $(selectTile).addClass("random-tile");
    var tilePosition = $(selectTile).position();
    console.log(tilePosition);
     $('#board-table').append(`<div id = "new-tile" class = "new-tile" line = ${(selectTile).attr("line")} column = ${(selectTile).attr("column")}>2</div>`);
     $('#new-tile').css({top:(tilePosition.top+3)+'px',left:(tilePosition.left+3)+'px', width:($(selectTile).width())+'px', height:($(selectTile).height())+'px'});
     $('#new-tile').attr('id',"");
}