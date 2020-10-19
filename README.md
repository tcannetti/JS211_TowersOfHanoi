** CODE PLAN **
1. The game will be broken down into 4 main functions: isLegal(), movePiece(), checkForWin(), & towersOfHanoi().
2. the movePiece() function will use the array methods, pop() and push() to remove objects from the end of the starter array and place them at the beginning of the selected array. 
3. While the user is selecting where to move with movePiece(), isLegal() will do all the work deciding if the move should be allowed within the games rules. * My logic will check if the piece selected to move is bigger than the piece its moving on top of and return true or false.
4. Finally after a move is determined to be legal and the piece is then moved from the starting array to the ending array, checkForWin() will determine if that move has won the game. 
* This was tough and I ended up having to change the arrays to strings to be able to equate them easier. The function with change the 'b' and 'c' array to strings, and if either of them are equal to '4, 3, 2, 1' it will determine true.
5. Finally the towersOfHanoi() runs all three of these together with the logic provided to actually play the game. It is built to process these functions in the proper order to check for legality of the move, actually move the piece, and to then check and see if that move wins the game. Lastly towersOfHanoi() will display a winning message and reset the board on completion. 

** UNIT TESTS **
1. I'd like to create a test that determins if the player is attempting to move a piece to the same location it's already at. 
2. A test to 
3. And lastly a test to 