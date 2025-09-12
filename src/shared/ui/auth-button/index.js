import styles from "./auth-button.module.css"

export default function AuthButton({children}) {
    return (
        <button className={styles.button}>{children}</button>
    )
}