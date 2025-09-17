import styles from "./login.module.css";

import AuthLayout from "@/shared/ui/auth-layout";
import AuthInput from "@/shared/ui/auth-input";
import AuthButton from "@/shared/ui/auth-button";
import { useForm } from "react-hook-form";

export default function Page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputs}>
          <AuthInput
            type="email"
            id="email"
            placeholder="Email"
            iconClass="fa-solid fa-envelope"
            {...register("email")}
          />
          <AuthInput
            type="password"
            id="password"
            placeholder="Password"
            iconClass="fa-solid fa-eye-slash"
            {...register("password")}
          />
        </div>
        <span className={styles.forgot__password}>Forgot Password?</span>
        <div className={styles.button}>
          <AuthButton>LOGIN</AuthButton>
        </div>
      </form>
    </AuthLayout>
  );
}
