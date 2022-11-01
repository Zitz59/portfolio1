import styles from './Button1.module.scss'

export const Button1 = (props) => {
    return (
        <div className={styles.buttonBlock}>
            <button className={styles.button1} onClick={()=>{}}>{props.buttonTitle}</button>
        </div>
    )
}