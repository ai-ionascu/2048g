var move_possible = false;
var cell_moved = false;

// generate board with cells
$(document).ready(function create_board(){
    $('body').append('<h1 id = "titlediv"><strong>2048 - PLAY NOW!</strong></h1>');
    $('body').append('<div class = "square"><div id = "board-table" class = "content"></div></div>');
        for (var i=0; i<4; i++){
            for (var j=0; j<4; j++){
                $("#board-table").append(`<div class = "global-cell empty-cell" row= ${i} column=${j}></div>`);
            }
        }
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
     $('#board-table').append(`<div id = "last-number" class = "number-cell" row = ${$(selectTile).attr("row")} column = ${$(selectTile).attr("column")}>2</div>`);
     $('#last-number').css({top:(cellPosition.top)+'px',left:(cellPosition.left)+'px', width:($(selectTile).width())+'px', height:($(selectTile).height())+'px'});
     $('#last-number').fadeTo(900,1,function(){
				move_possible=true;
			});
     $('#last-number').attr('id',"");
}

$(document).keydown(function(event){
    if (move_possible){
        move_possible=false;
        cell_moved=false;
        switch (event.which || event.keyCode) {
            case 37 :
            $('.number-cell').sort(function(a,b){
				var attrA = parseInt($(a).html());
				var attrB = parseInt($(b).html());
				if(attrA>attrB){
					return -1;
				}		
				if(attrA<attrB){
					return 1;
				}
				return 0;
			}).each(function(){
                var this_row = parseInt($(this).attr('row'));
                var this_column = parseInt($(this).attr('column'));
                var target_column = this_column;
                if (this_column>0){
                var i;
                    for (i = this_column-1; i >= 0; i --){
                        if ($('.global-cell[row='+this_row+'][column='+i+']').hasClass('full-cell')){
                            if ($(this).html() == $('.number-cell[row='+this_row+'][column='+i+']').html()){
                                $(this).addClass('merge');
                                target_column = i;
                            }
                            break;
                        }else{
                            target_column = i;
                            }
                    }
                    $(this).animate({ left: '-=' +(document.getElementsByClassName('empty-cell')[0].offsetWidth*(this_column-target_column))},100,function(){
                        if ($(this).hasClass('merge')){
                            $('.number-cell[row='+this_row+'][column='+target_column+']').html(parseInt($(this).html()*2));
                            $(this).remove();
                        }
                    });
                    $('.global-cell[row='+this_row+'][column='+this_column+']').removeClass('full-cell').addClass('empty-cell');
					$(this).attr('column',target_column);
					$('.global-cell[row='+this_row+'][column='+target_column+']').removeClass('empty-cell').addClass('full-cell');
                }
                if (this_column!=target_column){
                        cell_moved = true;
                    }
            });
            break;
            case 39 :
            $('.number-cell').sort(function(a,b){
				var attrA = parseInt($(a).html());
				var attrB = parseInt($(b).html());
				if(attrA>attrB){
					return -1;
				}		
				if(attrA<attrB){
					return 1;
				}
				return 0;
			}).each(function(){
                var this_row = parseInt($(this).attr('row'));
                var this_column = parseInt($(this).attr('column'));
                var target_column = this_column;
                if (this_column<3){
                var i;
                    for (i = this_column+1; i <= 3; i ++){
                        if ($('.global-cell[row='+this_row+'][column='+i+']').hasClass('full-cell')){
                            if ($(this).html() == $('.number-cell[row='+this_row+'][column='+i+']').html()){
                                $(this).addClass('merge');
                                target_column = i;
                            }
                            break;
                        }else{
                            target_column = i;
                            }
                    }
                    $(this).animate({ left: '+=' +(document.getElementsByClassName('empty-cell')[0].offsetWidth*(target_column-this_column))},100,function(){
                        if ($(this).hasClass('merge')){
                            $('.number-cell[row='+this_row+'][column='+target_column+']').html(parseInt($(this).html()*2));
                            $(this).remove();
                        }
                    });
                    $('.global-cell[row='+this_row+'][column='+this_column+']').removeClass('full-cell').addClass('empty-cell');
					$(this).attr('column',target_column);
					$('.global-cell[row='+this_row+'][column='+target_column+']').removeClass('empty-cell').addClass('full-cell');
                }
                if (this_column!=target_column){
                        cell_moved = true;
                    }
            });
            break;
            case 38 :
            $('.number-cell').sort(function(a,b){
				var attrA = parseInt($(a).html());
				var attrB = parseInt($(b).html());
				if(attrA>attrB){
					return -1;
				}		
				if(attrA<attrB){
					return 1;
				}
				return 0;
			}).each(function(){
                var this_row = parseInt($(this).attr('row'));
                var this_column = parseInt($(this).attr('column'));
                var target_row = this_row;
                if (this_row>0){
                var i;
                    for (i = this_row-1; i >= 0; i --){
                        if ($('.global-cell[row='+i+'][column='+this_column+']').hasClass('full-cell')){
                            if ($(this).html() == $('.number-cell[row='+i+'][column='+this_column+']').html()){
                                $(this).addClass('merge');
                                target_row = i;
                            }
                            break;
                        }else{
                            target_row = i;
                            }
                    }
                    $(this).animate({ top: '-=' +(document.getElementsByClassName('empty-cell')[0].offsetHeight*(this_row-target_row))},100,function(){
                        if ($(this).hasClass('merge')){
                            $('.number-cell[row='+target_row+'][column='+this_column+']').html(parseInt($(this).html()*2));
                            $(this).remove();
                        }
                    });
                    $('.global-cell[row='+this_row+'][column='+this_column+']').removeClass('full-cell').addClass('empty-cell');
					$(this).attr('row',target_row);
					$('.global-cell[row='+target_row+'][column='+this_column+']').removeClass('empty-cell').addClass('full-cell');
                }
                if (this_row!=target_row){
                        cell_moved = true;
                    }
            });
            break;
            case 40 :
            $('.number-cell').sort(function(a,b){
				var attrA = parseInt($(a).html());
				var attrB = parseInt($(b).html());
				if(attrA>attrB){
					return -1;
				}		
				if(attrA<attrB){
					return 1;
				}
				return 0;
			}).each(function(){
                var this_row = parseInt($(this).attr('row'));
                var this_column = parseInt($(this).attr('column'));
                var target_row = this_row;
                if (this_row<3){
                var i;
                    for (i = this_row+1; i <= 3; i ++){
                        if ($('.global-cell[row='+i+'][column='+this_column+']').hasClass('full-cell')){
                            if ($(this).html() == $('.number-cell[row='+i+'][column='+this_column+']').html()){
                                $(this).addClass('merge');
                                target_row = i;
                            }
                            break;
                        }else{
                            target_row = i;
                            }
                    }
                    $(this).animate({ top: '+=' +(document.getElementsByClassName('empty-cell')[0].offsetHeight*(target_row-this_row))},100,function(){
                        if ($(this).hasClass('merge')){
                            $('.number-cell[row='+target_row+'][column='+this_column+']').html(parseInt($(this).html()*2));
                            $(this).remove();
                        }
                    });
                    $('.global-cell[row='+this_row+'][column='+this_column+']').removeClass('full-cell').addClass('empty-cell');
					$(this).attr('row',target_row);
					$('.global-cell[row='+target_row+'][column='+this_column+']').removeClass('empty-cell').addClass('full-cell');
                }
                if (this_row!=target_row){
                        cell_moved = true;
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