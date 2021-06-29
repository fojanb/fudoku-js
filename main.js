// 6 by 6 sudoku
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ranNums = [];
let k;
let number = 0;

const board = document.querySelector(".board");
const gameBoard = () => {
  for (let i = 0; i <= 3; i++) {
    k = nums.length;
    const subBoard = document.createElement("div");
    subBoard.classList.add("subBoard");
    while (k > 0) {
      number = Math.floor(Math.random() * k);
      ranNums.push(nums[number]);
      nums.splice(number, 1);
      k--;
    }
    for (let j = 0; j <= 8; j++) {
      const square = document.createElement("div");
      square.classList.add("squareStyle");
      square.innerText = ranNums[j];
      subBoard.insertAdjacentElement("afterbegin", square);
    }
    board.insertAdjacentElement("beforeend", subBoard);
  }
};
gameBoard();
// Permutation of 1 to 9
