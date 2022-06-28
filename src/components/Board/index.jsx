import { useState, useEffect } from "react";
import DropBtn from "../DropBtn";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { deepClone, checkForWinner } from "../../util";
function Board() {
  const [board, setBoard] = useState([
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ]);

  const [redTurn, setRedTurn] = useState(true);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    setWinner(checkForWinner(board));
  }, [board]);

  const toRestart = () => {
    setBoard([
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
    ]);
  };
  return (
    <div className={styles.outer}>
      <h2 className={styles.title}>
        {winner ? `${winner} wins!` : redTurn ? `Red's Turn` : `Yellow's Turn`}
      </h2>

      {winner ? (
        <button onClick={toRestart} className={styles.rematchBtn}>
          REMATCH?
        </button>
      ) : null}

      <div className={styles.wrap}>
        {board.map((x, i) => {
          const handleClick = () => {
            setRedTurn(!redTurn);
            const nextEmptySpot = x.indexOf(null);
            setBoard((curr) => {
              const clone = deepClone(curr);
              if (redTurn) {
                clone[i][nextEmptySpot] = "Red";
              } else {
                clone[i][nextEmptySpot] = "Yellow";
              }
              return clone;
            });
          };

          // display each array inside of board as a column with the 1st element at the bottom
          return (
            <div key={i} className={styles.column}>
              {x.map((y, n) => {
                return (
                  <div key={(i, n)} className={styles.square}>
                    <div
                      className={clsx(
                        y === "Yellow" && styles.yellow,
                        y === "Red" && styles.red,
                        styles.circle
                      )}
                    ></div>
                  </div>
                );
                // }
              })}
              {winner ? null : (
                <DropBtn
                  redTurn={redTurn}
                  handleClick={handleClick}
                  columnNum={x}
                  // disable drop button if the column is full OR if there is a winner
                  disableBtn={!x.includes(null) || winner}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Board;
