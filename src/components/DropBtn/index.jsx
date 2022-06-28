import styles from "./styles.module.scss";

function DropBtn({ handleClick, columnNum, redTurn, disableBtn }) {
  return (
    <div className={styles.wrap}>
      <button
        onClick={handleClick}
        className={styles.btn}
        disabled={disableBtn}
      >
        DROP
      </button>
    </div>
  );
}
export default DropBtn;
