// 9 by 9 sudoku
let ranNums = [];

const board = document.querySelector(".board");
const gameBoard = () => {
  for (let i = 0; i <= 8; i++) {
    const subBoard = document.createElement("div");
    subBoard.classList.add("subBoard");
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let k = nums.length;
    let z = 0;
    ranNums.length = 0; //ranNums = [];
    // Permutation of 1 to 9
    while (k > 0) {
      z = Math.floor(Math.random() * k);
      ranNums.push(nums[z]);
      nums.splice(z, 1);
      k--;
    }
    console.log(ranNums);
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
