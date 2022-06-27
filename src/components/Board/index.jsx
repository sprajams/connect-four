import styles from "./styles.module.scss";
function Board() {
  const exampleBoard = [
    [1, 2, null, null, null, null],
    [1, 1, 1, 1, null, null], // player `1` has 4 in a row
    [2, null, null, null, null, null],
    [2, null, null, null, null, null],
    [2, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ];
  return (
    <div>
      <h1>BOARD</h1>
      <div className={styles.wrap}>
        {exampleBoard.map((x, i) => {
          return (
            <div className={styles.column}>
              {/* display each array from last element to first */}
              {x.map((y, n) => {
                return (
                  <div key={i} className={styles.square}>
                    <div>
                      ({i} , {n})
                    </div>
                    <div>{y}</div>
                  </div>
                );
                // }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Board;
