import styles from './Button.module.scss'

export const Button = (props) => {
    return (
        <div>
            <button className={styles.button} onClick={()=>{}}>{props.buttonTitle}</button>
        </div>
    )
}