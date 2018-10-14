# 2048 game

## Steps followed:

### first and the easiest: I created the board (roughly) - 4 x 4 cells
### each cell got attributes for line and column numbers
### number 2 generator function created:
##### highlighted tile div created with Math.random()
##### number two div applied over the highlighted tile, with .position() function
### another two global variables declared, one to determine if a next move is possible or the game is over, the other one to check if any cell has moved (a new random "two" shall be generated if true)
### next step: I created a keydown event function (the plan is to assign the game controls to the directional keys) - switch statement with 4 cases for the directional keycodes

### first case for the left key (case 37):

##### declared the position of the random number cell (row and column) and the destination position(same line and first column - when pressing the left key the movement of the cell shall be columnwise with decrement to the first column)
##### declared the conditions for moving the cells and numbers multiplication (column number greater than 1; the last random created and the number next to it to be equal)
##### created animation function with multiplication function as callback
##### assign the right identifying css classes for the iterated cells (from the current line) and the target cell



