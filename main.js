// 9 by 9 sudoku
const board = document.querySelector(".board");
// -------------------------------
let ranNums = ["", 2, 3, "", 5, "", 7, 8, 9];
let index = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let k;
let z = 0;
let b = 0;
let counter = 0;
// -------------------------------
const gameBoard = () => {
  k = ranNums.length;
  while (k > 0) {
    z = Math.floor(Math.random() * k);
    ranNums.push(ranNums[z]);
    ranNums.splice(z, 1);
    k--;
  }
  console.log("Initial :", ranNums);
  for (let i = 0; i <= 8; i++) {
    if (b >= 3) {
      ranNums.push(ranNums[0]);
      ranNums.shift();
      console.log("Update :", ranNums);
      b = 0;
    }
    for (let j = 0; j <= 8; j++) {
      if (i === 2 || i === 5 || i === 8) {
        if (j === 2 || j === 5) {
          const square = document.createElement("div");
          square.classList.add("square");
          square.classList.add("borderBottom");
          square.classList.add("borderRight");
          square.setAttribute("id", j + counter);
          square.innerText = ranNums[j];
          if (ranNums[j] === "") {
            const field = document.createElement("input");
            field.classList.add("field");
            field.setAttribute("type", "text");
            field.setAttribute("size", "1");
            field.setAttribute("maxlength", "1");
            square.insertAdjacentElement("afterBegin", field);
          }
          board.insertAdjacentElement("beforeEnd", square);
        } else {
          const square = document.createElement("div");
          square.classList.add("square");
          square.classList.add("borderBottom");
          square.setAttribute("id", j + counter);
          square.innerText = ranNums[j];
          if (ranNums[j] === "") {
            const field = document.createElement("input");
            field.classList.add("field");
            field.setAttribute("type", "text");
            field.setAttribute("size", "1");
            field.setAttribute("maxlength", "1");
            square.insertAdjacentElement("afterBegin", field);
          }
          board.insertAdjacentElement("beforeEnd", square);
        }
      } else if (j === 2 || j === 5) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.classList.add("borderRight");
        square.setAttribute("id", j + counter);
        square.innerText = ranNums[j];
        if (ranNums[j] === "") {
          const field = document.createElement("input");
          field.classList.add("field");
          field.setAttribute("type", "text");
          field.setAttribute("size", "1");
          field.setAttribute("maxlength", "1");
          square.insertAdjacentElement("afterBegin", field);
        }
        board.insertAdjacentElement("beforeEnd", square);
      } else {
        const square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("id", j + counter);
        square.innerText = ranNums[j];
        if (ranNums[j] === "") {
          const field = document.createElement("input");
          field.classList.add("field");
          field.setAttribute("type", "text");
          field.setAttribute("size", "1");
          field.setAttribute("maxlength", "1");
          square.insertAdjacentElement("afterBegin", field);
        }
        board.insertAdjacentElement("beforEend", square);
      }
    }
    // ------------#
    z = Math.floor(Math.random() * 9);
    ranNums[z] = "";
    if (z != 9) {
      if (z % 2 === 0) {
        ranNums[z++] = "";
      } else if (z % 3 === 0) {
        ranNums[z++] = "";
      }
    }
    if (z != 1) {
      if (z % 2 === 0) {
        ranNums[z--] = "";
      } else if (z % 3 === 0) {
        ranNums[z--] = "";
      }
    }
    if (z != 5) {
      if (z % 3 === 0) {
        ranNums[z % 3] = "";
      }
      // else if (z != 5) {
      //   ranNums[z % 4] = "";
      // }
    }
    // ------------#
    ranNums.push(ranNums[0]);
    ranNums.push(ranNums[1]);
    ranNums.push(ranNums[2]);
    ranNums.shift();
    ranNums.shift();
    ranNums.shift();
    console.log(ranNums);
    b++;
    console.log("b =", b);
    counter += 9;
  }
  // Minimum 17 numbers must be on board
  // 81 - 17 = 64 , we can remove 64 numbers (maximum)
};
gameBoard();

// 1,2,3,4,5,6,7,8,9   --> base row 1
// 4,5,6,7,8,9,1,2,3   --> shift base row 1 by 3 to right
// 7,8,9,1,2,3,4,5,6   --> shift base row 1 by 6 to right
// 2,3,4,5,6,7,8,9,1   --> shift base row by 1 to right (base row 2)
// 5,6,7,8,9,1,2,3,4   --> shift base row 2 by 3 to right
// 8,9,1,2,3,4,5,6,7   --> shift base row 2 by 6 to right
// 3,4,5,6,7,8,9,1,2   --> shift base row 1 by 2 to right (base row 3)
// 6,7,8,9,1,2,3,4,5   --> shift base row 3 by 3 to right
// 9,1,2,3,4,5,6,7,8   --> shift base row 3 by 6 to right
