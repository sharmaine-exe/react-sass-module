import buttonStyles from './button.module.css'

function Button ({children, label="uiBaseButton", variant='base', ...props}) {
    return (
        <button className={buttonStyles[variant]}>{label}</button>
    )
}

export default Button;