import styles from "./register.module.css";

import AuthLayout from "@/shared/ui/auth-layout";
import AuthInput from "@/shared/ui/auth-input";
import { useForm } from "react-hook-form";
import AuthButton from "@/shared/ui/auth-button";
import { useState } from "react";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import { registerUser } from "@/features/user/api";

export default function Page() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const errorMessageNotify = (error) => toast.error(error);

  const router = useRouter();

  const onSubmit = async (user) => {
    if (user.password !== user["repeat-password"]) {
      errorMessageNotify("Пароли не совпадают");
      return;
    }

    setLoading(true);
    const response = await registerUser(user);
    setLoading(false);

    if (response === "Failed to fetch") {
      errorMessageNotify("Внутреннея серверная ошибка! Попробуйте позже!")
      return;
    }
    
    if (response) {
      router.push(`/successful-auth/register/${response.user._id}`);
    } else {
      errorMessageNotify("Пользователь с такими данными уже существует!")
    }
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputs}>
          <AuthInput
            type="text"
            id="fullname"
            placeholder="Full Name"
            iconClass="fa-solid fa-user"
            {...register("full-name")}
          />
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
          <AuthInput
            type="password"
            id="repeat-password"
            placeholder="Repeat Password"
            iconClass="fa-solid fa-eye-slash"
            {...register("repeat-password")}
          />
          <AuthInput
            type="text"
            id="username"
            placeholder="Username"
            iconClass="fa-solid fa-user"
            {...register("username")}
          />
        </div>
        <div className={styles.button}>
          <AuthButton>
            {loading ? <span className="spinner"></span> : "REGISTER"}
          </AuthButton>
        </div>
      </form>

      <Toaster
        position="top-center"
      />
    </AuthLayout>
  );
}
