import styles from "./Options.module.css";

export default function Options({ onLeaveFeedback, onReset, total }) {
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.good}
        onClick={() => onLeaveFeedback("good")}
        type="button"
      >
        Good
      </button>

      <button
        className={styles.neutral}
        onClick={() => onLeaveFeedback("neutral")}
        type="button"
      >
        Neutral
      </button>

      <button
        className={styles.bad}
        onClick={() => onLeaveFeedback("bad")}
        type="button"
      >
        Bad
      </button>

      {total > 0 && (
        <button
          className={styles.reset}
          onClick={onReset}
          type="button"
        >
          Reset
        </button>
      )}
    </div>
  );
}
