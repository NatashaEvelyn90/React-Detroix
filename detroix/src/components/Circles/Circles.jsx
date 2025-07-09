import styles from '../Circles/Circles.module.css';

function Circles() {
    return(
        <div className={`${styles.mainCircles} mt-3 mb-3`}>
               <div className={styles.circle}></div>
               <div className={styles.circle}></div>
               <div className={styles.circle}></div> 
        </div>
    )
}

export default Circles