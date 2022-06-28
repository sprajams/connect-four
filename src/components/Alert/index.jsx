import styles from "./styles.module.scss";

function Alert({ winner, redTurn }) {
  return (
    <div>
      <h2 className={styles.title}>
        {winner
          ? winner === "draw"
            ? `It's a ${winner.toUpperCase()}!`
            : `${winner.toUpperCase()} wins!`
          : null}
        {!winner ? (
          redTurn ? (
            <span className={styles.titleRed}>Red's Turn</span>
          ) : (
            <span className={styles.titleYellow}>Yellow's Turn</span>
          )
        ) : null}
      </h2>
    </div>
  );
}
export default Alert;
