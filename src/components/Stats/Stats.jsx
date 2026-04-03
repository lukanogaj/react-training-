import styles from "./Stats.module.scss";

const Stats = ({ stats }) => {
	return (
		<div className={styles.stats}>
			<div className={styles.statsItem}>Total: {stats.total}</div>
			<div className={styles.statsItem}>Completed: {stats.completed}</div>
			<div className={styles.statsItem}>Active: {stats.active}</div>
			<div className={styles.statsItem}>Overdue: {stats.overdue}</div>
		</div>
	);
};

export default Stats;
