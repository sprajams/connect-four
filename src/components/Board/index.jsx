import { useState } from "react";
import DropBtn from "../DropBtn";
import clsx from "clsx";
import styles from "./styles.module.scss";
function Board() {
  const [board, setBoard] = useState([
    // ["Y", "R", null, null, null, null],
    // ["Y", "Y", "Y", null, null, null],
    // ["R", null, null, null, null, null],
    // ["R", null, null, null, null, null],
    // ["R", null, null, null, null, null],
    // [null, null, null, null, null, null],
    // [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ]);

  const [redTurn, setRedTurn] = useState(true);
  const onClick = () => {
    setRedTurn(!redTurn);
  };
  return (
    <div>
      <h2 className={styles.title}>{redTurn ? `Red's` : `Yellow's`} Turn</h2>
      <div className={styles.wrap}>
        {board.map((x, i) => {
          const handleClick = () => {
            onClick();
            const nextEmptySpot = x.indexOf(null);
            setBoard((curr) => {
              const clone = [...curr];
              if (redTurn) {
                clone[i][nextEmptySpot] = "R";
              } else {
                clone[i][nextEmptySpot] = "Y";
              }
              return clone;
            });
          };
          return (
            <div key={i} className={styles.column}>
              {/* display each array from last element to first */}
              {x.map((y, n) => {
                return (
                  <div key={(i, n)} className={styles.square}>
                    <div
                      className={clsx(
                        y === "Y" && styles.yellow,
                        y === "R" && styles.red,
                        styles.circle
                      )}
                    >
                      {y}
                    </div>
                  </div>
                );
                // }
              })}
              <DropBtn
                redTurn={redTurn}
                handleClick={handleClick}
                columnNum={x}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Board;
