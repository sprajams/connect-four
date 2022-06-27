import styles from "./styles.module.scss";

function DropBtn({ handleClick, columnNum, redTurn }) {
  return (
    <div className={styles.wrap}>
      <button onClick={handleClick} className={styles.btn}>
        DROP
      </button>
    </div>
  );
}
export default DropBtn;
