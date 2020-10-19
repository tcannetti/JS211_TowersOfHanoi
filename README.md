** CODE PLAN **
1. The game will be broken down into 4 main functions: isLegal(), movePiece(), checkForWin(), & towersOfHanoi().
2. the movePiece() function will use the array methods, pop() and push() to remove objects from the end of the starter array and place them at the beginning of the selected array. 
3. While the user is selecting where to move with movePiece(), isLegal() will do all the work deciding if the move should be allowed within the games rules. * My logic will check if the piece selected to move is bigger than the 