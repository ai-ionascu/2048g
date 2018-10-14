var move_possible = false;
var cell_moved = false;

// generate board with cells
$(document).ready(function create_board(){
    $('body').append('<h1 id = "titlediv"><strong>2048 DE URSI - JOACA ACUM!</strong></h1>');
    $('body').append('<div id = "board-table" class = "col-12 col-sm-8 col-md-6 col-lg-4"></div>');
        for (var i=0; i<4; i++){
            $('#board-table').append(`<div class = "wrapper d-flex" line=${i+1}></div>`);
        }
        for (var j=0; j<4; j++){
            $(".wrapper").append(`<div id = "global-cell" class = "col-3 global-cell empty-cell" column=${j+1}></div>`);
        }
    $(".wrapper").each(function(){
        $(this).children().attr("line",$(this).attr("line"));
        $(this).removeAttr("line");
    });
    generate_random_two();
    generate_random_two();
    $('body').append('<h2 id = "scorediv">Your Score:</h2>');
});

function generate_random_two(){
    var rowLength = $(".empty-cell").length;
    var random = Math.floor(Math.random() * rowLength);
    var selectTile = $(".empty-cell").eq(random);
    $(selectTile).removeClass("empty-cell");
    $(selectTile).addClass("full-cell");
    var cellPosition = $(selectTile).position();
    console.log(cellPosition);
     $('#board-table').append(`<div id = "last-number" class = "number-cell" line = ${(selectTile).attr("line")} column = ${(selectTile).attr("column")}>2</div>`);
     $('#last-number').css({top:(cellPosition.top+3)+'px',left:(cellPosition.left+3)+'px', width:($(selectTile).width())+'px', height:($(selectTile).height())+'px'});
     $('#last-number').attr('id',"");
     move_possible = true;
}

$(document).keydown(function(event){
    if (move_possible){
        move_possible=false;
        cell_moved=false;
        switch (event.which || event.keyCode) {
            case 37 :
            $('.number-cell').each(function(){
                var current_line = $(this).attr('line');
                console.log(current_line);
                var current_column = $(this).attr('column');
                var target_column = current_column;
                var similar_data = false;
                if (current_column>=0){
                var i;
                    for (i = current_column-1; i >= 1; i --){
                        if ($('.global-cell[line='+current_line+'][column='+i+']').hasClass('full-cell')){
                            if ($(this).html() == $('.number-cell[line='+current_line+'][column='+i+']').html()){
                                similar_data = true;
                                target_column = i;
                            }
                            break;
                        }else{
                            target_column = i;
                            }
                    }
                    console.log('final'+target_column);
                    if (current_column!=target_column){
                        cell_moved = true;
                    }
                    $(this).animate({ left: '-=' +(document.getElementById('global-cell').offsetWidth*(current_column-target_column))},300,function(){
                        if (similar_data){
                            $('.number-cell[line='+current_line+'][column='+target_column+']').html(parseInt($(this).html()*2));
                            $(this).remove();
                        }
                    });
                    $('.global-cell[line='+current_line+'][column='+current_column+']').removeClass('full-cell').addClass('empty-cell');
					$(this).attr('column',target_column);
					$('.global-cell[line='+current_line+'][column='+target_column+']').removeClass('empty-cell').addClass('full-cell');
                }
            });
            break;
        }
        if (cell_moved){
                generate_random_two();
            }else{
                move_possible = true;
            }
    }else{
	document.getElementById('scorediv').innerHTML = "GAME OVER!<br>Your highest score is:";
	}
});
    
    