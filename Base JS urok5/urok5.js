document.querySelector(".appChess").addEventListener("click", Chess);

const text = document.querySelector('.text')

let cont = 1

function Chess() {
      text.innerHTML = ""
      const textChess = document.createElement('p')
      textChess.classList.add('textChess')

      const dom = document.createElement('div')
      dom.classList.add('chess')

      const sumbUp = document.createElement('div')
      sumbUp.classList.add('chess__sumbol-up')
      const centerDiv = document.createElement('div')
      centerDiv.classList.add('chess_center')

      const numbLeft = document.createElement('div')
      numbLeft.classList.add('chess__number-left')
      const deskChess = document.createElement('div')
      deskChess.classList.add('chess__desk')
      const numbRigth = document.createElement('div')
      numbRigth.classList.add('chess__number-right')

      centerDiv.appendChild(numbLeft)
      centerDiv.appendChild(deskChess)
      centerDiv.appendChild(numbRigth)

      const sumbDown = document.createElement('div')
      sumbDown.classList.add('chess__sumbol-down')

      dom.appendChild(sumbUp)
      dom.appendChild(centerDiv)
      dom.appendChild(sumbDown)

      console.dir(dom)

      text.appendChild(textChess)
      text.appendChild(dom)

      const textChessContent = document.querySelector('.textChess')

      textChessContent.innerHTML = `Нажмите на любую клетку или фигуру`;


      const chessSumbolUp = document.querySelector('.chess__sumbol-up')
      const chessNumberLeft = document.querySelector('.chess__number-left')
      const chessSumbolDown = document.querySelector('.chess__sumbol-down')
      const chessNumberRight = document.querySelector('.chess__number-right')

      const arrSumbol = ['A','B','C','D','E','F','G','H']
      const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8]


      function appFunction(arr, child) {
        arr.map((el) => {
          const result = document.createElement('div')
          result.textContent = el
          child.appendChild(result)
        })
      }

      appFunction(arrNumber,chessNumberLeft);
      appFunction(arrSumbol,chessSumbolUp);
      appFunction(arrNumber,chessNumberRight);
      appFunction(arrSumbol,chessSumbolDown);


      const arrChess = {
        0: [
          '<i class="fas fa-chess-rook black"></i>',
          '<i class="fas fa-chess-knight black"></i>',
          '<i class="fas fa-chess-bishop black"></i>',
          '<i class="fas fa-chess-queen black"></i>',
          '<i class="fas fa-chess-king black"></i>',
          '<i class="fas fa-chess-bishop black"></i>',
          '<i class="fas fa-chess-knight black"></i>',
          '<i class="fas fa-chess-rook black"></i>',
        ],
        1: [
          '<i class="fas fa-chess-pawn black"></i>',
          '<i class="fas fa-chess-pawn black"></i>',
          '<i class="fas fa-chess-pawn black"></i>',
          '<i class="fas fa-chess-pawn black"></i>',
          '<i class="fas fa-chess-pawn black"></i>',
          '<i class="fas fa-chess-pawn black"></i>',
          '<i class="fas fa-chess-pawn black"></i>',
          '<i class="fas fa-chess-pawn black"></i>',
        ],
        6: [
          '<i class="fas fa-chess-pawn white"></i>',
          '<i class="fas fa-chess-pawn white"></i>',
          '<i class="fas fa-chess-pawn white"></i>',
          '<i class="fas fa-chess-pawn white"></i>',
          '<i class="fas fa-chess-pawn white"></i>',
          '<i class="fas fa-chess-pawn white"></i>',
          '<i class="fas fa-chess-pawn white"></i>',
          '<i class="fas fa-chess-pawn white"></i>',
        ],
        7: [
          '<i class="fas fa-chess-rook white"></i>',
          '<i class="fas fa-chess-knight white"></i>',
          '<i class="fas fa-chess-bishop white"></i>',
          '<i class="fas fa-chess-queen white"></i>',
          '<i class="fas fa-chess-king white"></i>',
          '<i class="fas fa-chess-bishop white"></i>',
          '<i class="fas fa-chess-knight white"></i>',
          '<i class="fas fa-chess-rook white"></i>',
        ]
      };

      const chessBlock = document.querySelector(".chess__desk");
      chessBlock.innerHTML = "";
      const chessDiv = document.createElement("div");
      chessBlock.appendChild(chessDiv);
      chessDiv.classList.add('fieldBlock');
      const blockMenu = document.querySelector(".fieldBlock");
      let block;
      let switchOn = false;

      for (let i = 0; i < 8; i++) {
        for (let a = 0; a < 8; a++) {
          if (a === 0) {
            switchOn = !switchOn;
          }
          block = document.createElement("div");
          block.classList.add('blockChess');
          if (arrChess[i] !== undefined && arrChess[i][a] !== undefined) {
            block.innerHTML = arrChess[i][a];
          }
          if (switchOn) {
            block.classList.add('fieldChessBlack');
          } else {
            block.classList.add('fieldChessWhite');
          }

          block.addEventListener('click', () => {
            const arrRevers = [8,7,6,5,4,3,2,1]
            console.log(`столбец ${arrSumbol[a]} строка ${arrRevers[i]}`)
            textChessContent.innerHTML = `столбец ${arrSumbol[a]} строка ${arrRevers[i]}`;
          })
          blockMenu.appendChild(block);
          switchOn = !switchOn;
        }
      }
      cont--
}

