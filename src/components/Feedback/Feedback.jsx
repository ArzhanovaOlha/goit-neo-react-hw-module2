import styles from "./Feedback.module.css";

export default function Feedback({
  good,
  neutral,
  bad,
  total,
  positive,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.titles}>
        <span className={styles.goodTitle}>Good</span>
        <span className={styles.neutralTitle}>Neutral</span>
        <span className={styles.badTitle}>Bad</span>
      </div>

      <div className={styles.values}>
        <span>{good}</span>
        <span>{neutral}</span>
        <span>{bad}</span>
      </div>

      <div className={styles.summary}>
        <span>Total: {total}</span>
        <span>Positive: {positive}%</span>
      </div>

      <div className={styles.progress}>
        <div
          className={styles.progressFill}
          style={{ width: `${positive}%` }}
        />
      </div>
    </div>
  );
}
