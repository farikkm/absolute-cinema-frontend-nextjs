import styles from "./auth-input.module.css";

export default function AuthInput({ id, placeholder, iconClass }) {
  return (
    <div className={styles.wrapper}>
      <input type="text" autoComplete="off" name={id} id={id} placeholder={placeholder} />
      <i className={iconClass}></i>
    </div>
  );
}
