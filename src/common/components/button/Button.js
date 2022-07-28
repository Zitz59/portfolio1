import styles from './Button.module.css'

export const Button = (props) => {
    return (
        <div>
            <button className={styles.button} onClick={()=>{}}>{props.buttonTitle}</button>
        </div>
    )
}