import styles from './button.module.scss'

function Button ({children, label="uiBaseButton", variant='base', ...props}) {
    return (
        <button className={styles[variant]}>{label}</button>
    )
}

export default Button;