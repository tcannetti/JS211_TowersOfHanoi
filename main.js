'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do?
const movePiece = (startStack, endStack) => {
  // use pop() on the startStack to move the last piece to the endStack with push()
  let popOut = stacks[startStack].pop();
  // check for piece that was moved
  console.log(popOut, " piece moved");
  // place popOut piece into new stack
  stacks[endStack].push(popOut);
}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (startStack, endStack) => {
  // grab the piece from the starter stack to compare with end stack
  let startCheck = stacks[startStack][stacks[startStack].length -1];
  // grab the end stack piece
  let endCheck = stacks[endStack][stacks[endStack].length -1];
  // compare the two to make sure end is larger than start, return false if fail
  if (startCheck > endCheck) {
    return false;
  } else {
    return true;
  }
}

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
    let winCheckC = stacks.c.toString()
    let winCheckB = stacks.b.toString()
    // had trouble checking so converting to strings to make comparison easier for me.
    if(winCheckB == "4, 3, 2, 1" || winCheckC == "4, 3, 2, 1"){
      return true;
    } else {
      return false;
    }
}

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // check for legalMove before moving.
  if(isLegal(startStack, endStack)){
  // if legal then movePiece
    movePiece(startStack, endStack);
  };
  // check if last move was the winning move
  if(checkForWin() === true) {
    // if the checkforwin func is true, notify
    console.log("You have won Towers of Hanoi, GG ez!")
    console.log('------------------------------------')
  // New Game 
  console.log('Board Reset...');
  console.log('\nStart New Game\n');
    let stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    };

  };
}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
      stacks = { a: [4, 3], b: [2, 1], c: [] };
      assert.equal(isLegal('a', 'b'), false);
      stacks = { a: [4, 3], b: [1], c: [2] };
      assert.equal(isLegal('a', 'c'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
      stacks = { a: [4, 3, 2], b: [1], c: [] };
      assert.equal(isLegal('a', 'c'), true );
      stacks = { a: [4, 3], b: [1], c: [2] };
      assert.equal(isLegal('b', 'c'), true);
      stacks = { a: [4, 3], b: [], c: [2, 1] };
      assert.equal(isLegal('a', 'b'), true);
    });
    
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
  describe('movePiece()', () => {
    it('should correctly move a piece', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      movePiece('a', 'b');
      // make sure size of stack 'a' is 3
      assert.equal(stacks.a.length, 3);
      // make sure size of stack 'b' is 1
      assert.equal(stacks.b.length, 1);
      // make sure c is length 1
      assert.equal(stacks.c.length, 0);
      // make sure element in index 0 of 'b' is 1
      assert.equal(stacks.b[0], 1);
    });
  });

} else {

  getPrompt();

}
