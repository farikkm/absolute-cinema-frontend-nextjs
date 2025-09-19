import styles from "./register.module.css";

import AuthLayout from "@/shared/ui/auth-layout";
import AuthInput from "@/shared/ui/auth-input";
import { useForm } from "react-hook-form";
import AuthButton from "@/shared/ui/auth-button";

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
            type="text"
            id="fullname"
            placeholder="Full Name"
            iconClass="fa-solid fa-user"
          />
          <AuthInput
            type="email"
            id="email"
            placeholder="Email"
            iconClass="fa-solid fa-envelope"
          />
          <AuthInput
            type="password"
            id="password"
            placeholder="Password"
            iconClass="fa-solid fa-eye-slash"
          />
          <AuthInput
            type="password"
            id="repeat-password"
            placeholder="Repeat Password"
            iconClass="fa-solid fa-eye-slash"
          />
          <AuthInput
            type="text"
            id="username"
            placeholder="Username"
            iconClass="fa-solid fa-user"
          />
        </div>
        <div className={styles.button}>
          <AuthButton>REGISTER</AuthButton>
        </div>
      </form>
    </AuthLayout>
  );
}
